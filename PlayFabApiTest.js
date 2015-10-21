if (typeof PlayFabClientSDK == 'undefined')
    Console.error("PlayFabApiTest requires PlayFabClientApi.js to be pre-loaded.");
if (typeof PlayFabServerSDK == 'undefined')
    Console.error("PlayFabApiTest requires PlayFabServerApi.js to be pre-loaded.");

var PlayFabApiTests = {
    testTitleDataFilename: "testTitleData.json", // TODO: Do not hard code the location of this file (javascript can't really do relative paths either)
    titleData: {
        titleId: null, // put titleId here
        developerSecretKey: null, // put secretKey here
        titleCanUpdateSettings: "true",
        userName: "put test username here",
        userEmail: "put valid email for userName here",
        userPassword: "put valid password for userName here",
        characterName: "put valid characterName for userName here",
    },
    testData: {
        playFabId: null, // Filled during login
        characterId: null, // Filled during character-access
        testNumber: null, // Used by several tests
        testTimeStamp: null, // Used by several tests
    },
    testConstants: {
        TEST_KEY: "testCounter",
        TEST_STAT_NAME: "str",
    },

    ManualExecution: function () {
        $.getJSON(PlayFabApiTests.testTitleDataFilename, function (json) {
            if (PlayFabApiTests.SetUp(json))
                PlayFabApiTests.LoginTests();
        }).fail(function () {
            if (PlayFabApiTests.SetUp(PlayFabApiTests.titleData))
                PlayFabApiTests.LoginTests();
        });
    },

    LoginTests: function () {
        // All tests run completely synchronously, which is a bit tricky.
        //   Some test rely on data loaded from other tests, and there's no super easy to force tests to be sequential/dependent
        //   In fact, most of the tests return here before they're done, and report back success/fail in some arbitrary future

        QUnit.module("PlayFab Api Test");
        QUnit.test("InvalidLogin", PlayFabApiTests.InvalidLogin);
        QUnit.test("LoginOrRegister", PlayFabApiTests.LoginOrRegister);

        setTimeout(function () { PlayFabApiTests.PostLoginTests(0); }, 200);
        setTimeout(function () { PlayFabApiTests.PostCharacterTests(0); }, 200);
    },

    PostLoginTests: function (count) {
        if (count > 5)
            return;

        if (PlayFab._internalSettings.sessionTicket == null) {
            // Wait for login
            setTimeout(function () { PlayFabApiTests.PostLoginTests(count + 1); }, 200);
        } else {
            // Continue with other tests that require login
            QUnit.test("UserDataApi", PlayFabApiTests.UserDataApi);
            QUnit.test("UserStatisticsApi", PlayFabApiTests.UserStatisticsApi);
            QUnit.test("UserCharacter", PlayFabApiTests.UserCharacter);
            QUnit.test("AccountInfo", PlayFabApiTests.AccountInfo);
            QUnit.test("CloudScript", PlayFabApiTests.CloudScript);
        }
    },

    PostCharacterTests: function (count) {
        if (count > 5)
            return;

        if (PlayFabApiTests.testData.characterId == null) {
            // Wait for characterId
            setTimeout(function () { PlayFabApiTests.PostCharacterTests(count + 1); }, 200);
        } else {
            QUnit.test("LeaderBoard", PlayFabApiTests.LeaderBoard);
        }
    },

    SetUp: function (inputTitleData) {
        // All of these must exist for the titleData load to be successful
        var titleDataValid = inputTitleData.hasOwnProperty("titleId") && inputTitleData.titleId != null
        && inputTitleData.hasOwnProperty("developerSecretKey") && inputTitleData.developerSecretKey != null
        && inputTitleData.hasOwnProperty("titleCanUpdateSettings")
        && inputTitleData.hasOwnProperty("userName")
        && inputTitleData.hasOwnProperty("userEmail")
        && inputTitleData.hasOwnProperty("userPassword")
        && inputTitleData.hasOwnProperty("characterName");

        if (titleDataValid)
            PlayFabApiTests.titleData = inputTitleData;
        else
            window.console.error("testTitleData input file did not parse correctly");

        PlayFab.settings.titleId = PlayFabApiTests.titleData.titleId;
        PlayFab.settings.developerSecretKey = PlayFabApiTests.titleData.developerSecretKey;

        return titleDataValid;
    },

    CallbackWrapper: function (callbackName, Callback, assert) {
        return function (result, error) {
            try {
                Callback(result, error);
            } catch (e) {
                window.console.error("Exception thrown during " + callbackName + " callback: " + e.toString() + "\n" + e.stack); // Very irritatingly, qunit doesn't report failure results until all async callbacks return, which doesn't always happen when there's an exception
                assert.ok(false, "Exception thrown during " + callbackName + " callback: " + e.toString() + "\n" + e.stack);
            }
        };
    },

    VerifyNullError: function (result, error, assert, message) {
        var success = (result != null && error == null)
        if (!success)
            assert.ok(success, message);
        if (error != null)
            assert.ok(false, "PlayFab error message: " + error.errorMessage);
    },

    InvalidLogin: function (assert) {
        var invalidRequest = {
            TitleId: PlayFab.settings.titleId,
            Email: PlayFabApiTests.titleData.userEmail,
            Password: PlayFabApiTests.titleData.userPassword + "INVALID",
        };

        var InvalidLoginCallback = function (result, error) {
            assert.ok(result == null, "Login should have failed");
            assert.ok(error != null, "Login should have failed");
            if (error != null)
                assert.ok(error.errorMessage.toLowerCase().indexOf("password") > -1, "Expect errorMessage about invalid password: " + error.errorMessage);
            invalidDone();
        };
        var invalidDone = assert.async();
        PlayFabClientSDK.LoginWithEmailAddress(invalidRequest, PlayFabApiTests.CallbackWrapper("InvalidLoginCallback", InvalidLoginCallback, assert));
    },

    LoginOrRegister: function (assert) {
        var loginRequest = {
            // Currently, you need to look up the correct format for this object in the API-docs:
            //   https://api.playfab.com/Documentation/Client/method/LoginWithEmailAddress
            TitleId: PlayFab.settings.titleId,
            Email: PlayFabApiTests.titleData.userEmail,
            Password: PlayFabApiTests.titleData.userPassword,
        };
        var registerRequest = {
            // Currently, you need to look up the correct format for this object in the API-docs:
            //   https://api.playfab.com/Documentation/Client/method/RegisterPlayFabUser
            TitleId: PlayFab.settings.titleId,
            Username: PlayFabApiTests.titleData.userName,
            Email: PlayFabApiTests.titleData.userEmail,
            Password: PlayFabApiTests.titleData.userPassword,
        };

        // We don't know at this point how many async calls we'll make
        var loginDone = null;
        var registerDone = null;

        var OptionalLoginCallback = function (result, error) {
            // First login falls back upon registration if login failed
            if (result == null) {
                // Register the character and try again
                registerDone = assert.async();
                PlayFabClientSDK.RegisterPlayFabUser(registerRequest, PlayFabApiTests.CallbackWrapper("RegisterCallback", RegisterCallback, assert));
                loginDone();
            }
            else {
                // Confirm the successful login
                MandatoryLoginCallback(result, error)
            }
        };
        var RegisterCallback = function (result, error) {
            // Second login MUST succeed
            PlayFabApiTests.VerifyNullError(result, error, assert, "Testing Registration result");

            // Log in again, this time with the newly registered account
            loginDone = assert.async();
            PlayFabClientSDK.LoginWithEmailAddress(loginRequest, PlayFabApiTests.CallbackWrapper("MandatoryLoginCallback", MandatoryLoginCallback, assert));
            registerDone();
        };
        var MandatoryLoginCallback = function (result, error) {
            // Login MUST succeed at some point during this test
            PlayFabApiTests.VerifyNullError(result, error, assert, "Testing Valid login result");
            assert.ok(PlayFab._internalSettings.sessionTicket != null, "Testing Login credentials cache");
            PlayFabApiTests.testData.playFabId = result.PlayFabId; // Save the PlayFabId, it will be used in other tests
            loginDone();
        };
        loginDone = assert.async();
        PlayFabClientSDK.LoginWithEmailAddress(loginRequest, PlayFabApiTests.CallbackWrapper("OptionalLoginCallback", OptionalLoginCallback, assert));
    },

    UserDataApi: function (assert) {
        var getDataRequest = {}; // null also works

        // This test is always exactly 3 async calls
        get1Done = assert.async();
        updateDone = assert.async();
        get2Done = assert.async();

        var GetDataCallback1 = function (result, error) {
            PlayFabApiTests.VerifyNullError(result, error, assert, "Testing GetUserData result");
            assert.ok(result.Data != null, "Testing GetUserData Data");
            assert.ok(result.Data.hasOwnProperty(PlayFabApiTests.testConstants.TEST_KEY), "Testing GetUserData DataKey");

            PlayFabApiTests.testData.testNumber = parseInt(result.Data[PlayFabApiTests.testConstants.TEST_KEY].Value, 10);
            PlayFabApiTests.testData.testTimeStamp = new Date(result.Data[PlayFabApiTests.testConstants.TEST_KEY].LastUpdated);
            PlayFabApiTests.testData.testNumber = (PlayFabApiTests.testData.testNumber + 1) % 100; // This test is about the expected value changing - but not testing more complicated issues like bounds

            var updateDataRequest = {}; // Can't create this until we have the testNumber value
            updateDataRequest.Data = {};
            updateDataRequest.Data[PlayFabApiTests.testConstants.TEST_KEY] = PlayFabApiTests.testData.testNumber;
            PlayFabClientSDK.UpdateUserData(updateDataRequest, PlayFabApiTests.CallbackWrapper("UpdateDataCallback", UpdateDataCallback, assert));
            get1Done();
        };
        var UpdateDataCallback = function (result, error) {
            PlayFabApiTests.VerifyNullError(result, error, assert, "Testing UpdateUserData result");

            PlayFabClientSDK.GetUserData(getDataRequest, PlayFabApiTests.CallbackWrapper("GetDataCallback2", GetDataCallback2, assert));
            updateDone();
        };
        var GetDataCallback2 = function (result, error) {
            PlayFabApiTests.VerifyNullError(result, error, assert, "Testing GetUserData result");
            assert.ok(result.Data != null, "Testing GetUserData Data");
            assert.ok(result.Data.hasOwnProperty(PlayFabApiTests.testConstants.TEST_KEY), "Testing GetUserData DataKey");

            var actualtestNumber = parseInt(result.Data[PlayFabApiTests.testConstants.TEST_KEY].Value, 10);
            var actualTimeStamp = new Date(result.Data[PlayFabApiTests.testConstants.TEST_KEY].LastUpdated);

            assert.equal(PlayFabApiTests.testData.testNumber, actualtestNumber, "Testing incrementing counter: " + PlayFabApiTests.testData.testNumber + "==" + actualtestNumber);
            assert.ok(actualTimeStamp > PlayFabApiTests.testData.testTimeStamp, "Testing incrementing timestamp: " + actualTimeStamp + " > " + PlayFabApiTests.testData.testTimeStamp);
            get2Done();
        };

        // Kick off this test process
        PlayFabClientSDK.GetUserData(getDataRequest, PlayFabApiTests.CallbackWrapper("GetDataCallback1", GetDataCallback1, assert));
    },

    UserStatisticsApi: function (assert) {
        var getStatsRequest = {}; // null also works

        // This test is always exactly 3 async calls
        get1Done = assert.async();
        updateDone = assert.async();
        get2Done = assert.async();

        var GetStatsCallback1 = function (result, error) {
            PlayFabApiTests.VerifyNullError(result, error, assert, "Testing GetUserStats result");
            assert.ok(result.UserStatistics != null, "Testing GetUserData Stats");
            assert.ok(result.UserStatistics.hasOwnProperty(PlayFabApiTests.testConstants.TEST_STAT_NAME), "Testing GetUserData Stat-value");

            PlayFabApiTests.testData.testNumber = result.UserStatistics[PlayFabApiTests.testConstants.TEST_STAT_NAME];
            PlayFabApiTests.testData.testNumber = (PlayFabApiTests.testData.testNumber + 1) % 100; // This test is about the expected value changing - but not testing more complicated issues like bounds

            var updateStatsRequest = {}; // Can't create this until we have the testNumber value
            updateStatsRequest.UserStatistics = {};
            updateStatsRequest.UserStatistics[PlayFabApiTests.testConstants.TEST_STAT_NAME] = PlayFabApiTests.testData.testNumber;
            PlayFabClientSDK.UpdateUserStatistics(updateStatsRequest, PlayFabApiTests.CallbackWrapper("UpdateStatsCallback", UpdateStatsCallback, assert));
            get1Done();
        };
        var UpdateStatsCallback = function (result, error) {
            PlayFabApiTests.VerifyNullError(result, error, assert, "Testing UpdateUserStats result");
            PlayFabClientSDK.GetUserStatistics(getStatsRequest, PlayFabApiTests.CallbackWrapper("GetStatsCallback2", GetStatsCallback2, assert));
            updateDone();
        };
        var GetStatsCallback2 = function (result, error) {
            PlayFabApiTests.VerifyNullError(result, error, assert, "Testing GetUserStats result");
            assert.ok(result.UserStatistics != null, "Testing GetUserData Stats");
            assert.ok(result.UserStatistics.hasOwnProperty(PlayFabApiTests.testConstants.TEST_STAT_NAME), "Testing GetUserData Stat-value");

            var actualtestNumber = result.UserStatistics[PlayFabApiTests.testConstants.TEST_STAT_NAME];

            assert.equal(PlayFabApiTests.testData.testNumber, actualtestNumber, "Testing incrementing stat: " + PlayFabApiTests.testData.testNumber + "==" + actualtestNumber);
            get2Done();
        };

        // Kick off this test process
        PlayFabClientSDK.GetUserStatistics(getStatsRequest, PlayFabApiTests.CallbackWrapper("GetStatsCallback1", GetStatsCallback1, assert));
    },

    UserCharacter: function (assert) {
        var getCharsRequest = {};
        var grantCharRequest = {
            TitleId: PlayFabApiTests.titleData.titleId,
            PlayFabId: PlayFabApiTests.testData.playFabId,
            CharacterName: PlayFabApiTests.titleData.CHAR_NAME,
            CharacterType: PlayFabApiTests.titleData.CHAR_TEST_TYPE,
        };

        // We don't know at this point how many async calls we'll make
        var getDone = null;
        var grantDone = null;

        var OptionalGetCharsCallback = function (result, error) {
            // First get chars falls back upon grant-char if target character not present
            if (result == null) {
                // Register the character and try again
                grantDone = assert.async();
                PlayFabServerSDK.GrantCharacterToUser(grantCharRequest, PlayFabApiTests.CallbackWrapper("GrantCharCallback", GrantCharCallback, assert));
                getDone();
            }
            else {
                // Confirm the successful login
                MandatoryGetCharsCallback(result, error)
            }
        };
        var GrantCharCallback = function (result, error) {
            // Second character callback MUST succeed
            PlayFabApiTests.VerifyNullError(result, error, assert, "Testing GrantCharacter result");

            // Get chars again, this time with the newly granted character
            getDone = assert.async();
            PlayFabClientSDK.GetAllUsersCharacters(getCharsRequest, PlayFabApiTests.CallbackWrapper("MandatoryGetCharsCallback", MandatoryGetCharsCallback, assert));
            grantDone();
        };
        var MandatoryGetCharsCallback = function (result, error) {
            // GetChars MUST succeed at some point during this test
            PlayFabApiTests.VerifyNullError(result, error, assert, "Testing GetChars result");

            for (var i in result.Characters)
                if (result.Characters[i].CharacterName == PlayFabApiTests.titleData.characterName)
                    PlayFabApiTests.testData.characterId = result.Characters[i].CharacterId; // Save the characterId, it will be used in other tests

            assert.ok(PlayFabApiTests.testData.characterId != null, "Searching for " + PlayFabApiTests.titleData.characterName + " on this account.");
            getDone();
        };
        getDone = assert.async();
        PlayFabClientSDK.GetAllUsersCharacters(getCharsRequest, PlayFabApiTests.CallbackWrapper("OptionalGetCharsCallback", OptionalGetCharsCallback, assert));
    },

    LeaderBoard: function (assert) {
        var clientRequest = {
            MaxResultsCount: 3,
            StatisticName: PlayFabApiTests.testConstants.TEST_STAT_NAME,
        };
        var serverRequest = {
            MaxResultsCount: 3,
            PlayFabId: PlayFabApiTests.testData.playFabId,
            CharacterId: PlayFabApiTests.testData.characterId,
            StatisticName: PlayFabApiTests.testConstants.TEST_STAT_NAME,
        };

        var GetLeaderboardCallback_C = function (result, error) {
            PlayFabApiTests.VerifyNullError(result, error, assert, "Testing GetLeaderboard result");
            if (result != null) {
                assert.ok(result.Leaderboard != null, "Testing GetLeaderboard content");
                assert.ok(result.Leaderboard.length > 0, "Testing GetLeaderboard content-length");
            }

            lbDone_C();
        };
        var GetLeaderboardCallback_S = function (result, error) {
            PlayFabApiTests.VerifyNullError(result, error, assert, "Testing GetLeaderboard result");
            if (result != null) {
                assert.ok(result.Leaderboard != null, "Testing GetLeaderboard content");
                assert.ok(result.Leaderboard.length > 0, "Testing GetLeaderboard content-length");
            }

            lbDone_S();
        };

        var lbDone_C = assert.async();
        PlayFabClientSDK.GetLeaderboardAroundCurrentUser(clientRequest, PlayFabApiTests.CallbackWrapper("GetLeaderboardCallback_C", GetLeaderboardCallback_C, assert));
        var lbDone_S = assert.async();
        PlayFabServerSDK.GetLeaderboardAroundCharacter(serverRequest, PlayFabApiTests.CallbackWrapper("GetLeaderboardCallback_S", GetLeaderboardCallback_S, assert));
    },

    AccountInfo: function (assert) {
        var GetAccountInfoCallback = function (result, error) {
            PlayFabApiTests.VerifyNullError(result, error, assert, "Testing GetAccountInfo result");
            assert.ok(result.AccountInfo != null, "Testing GetAccountInfo");
            assert.ok(result.AccountInfo.TitleInfo != null, "Testing TitleInfo");
            assert.ok(result.AccountInfo.TitleInfo.Origination != null, "Testing Origination");
            assert.ok(result.AccountInfo.TitleInfo.Origination.length > 0, "Testing Origination string-Enum");
            getDone();
        };

        var getDone = assert.async();
        PlayFabClientSDK.GetAccountInfo({}, PlayFabApiTests.CallbackWrapper("GetAccountInfoCallback", GetAccountInfoCallback, assert));
    },

    CloudScript: function (assert) {
        var urlDone = null;
        var hwDone = null;

        if (PlayFab._internalSettings.logicServerUrl == null) {
            var getCloudUrlRequest = {};

            var GetCloudScriptUrlCallback = function (result, error) {
                PlayFabApiTests.VerifyNullError(result, error, assert, "Testing GetCloudUrl response");

                if (PlayFab._internalSettings.logicServerUrl != null)
                    PlayFabApiTests.CloudScript(assert); // Recursively call this test to get the case below
                else
                    assert.ok(false, "GetCloudScriptUrl did not retrieve the logicServerUrl");

                urlDone();
            };

            urlDone = assert.async();
            PlayFabClientSDK.GetCloudScriptUrl(getCloudUrlRequest, PlayFabApiTests.CallbackWrapper("GetCloudScriptUrlCallback", GetCloudScriptUrlCallback, assert));
        } else {
            var helloWorldRequest = { ActionId: "helloWorld" };

            var HelloWorldCallback = function (result, error) {
                PlayFabApiTests.VerifyNullError(result, error, assert, "Testing HelloWorld response");
                if (result != null) {
                    assert.ok(result.Results != null, "Testing HelloWorld result");
                    assert.ok(result.Results.messageValue != null, "Testing HelloWorld result message");
                    assert.equal(result.Results.messageValue, "Hello " + PlayFabApiTests.testData.playFabId + "!", "HelloWorld cloudscript result: " + result.Results.messageValue);
                }
                hwDone();
            };

            hwDone = assert.async();
            PlayFabClientSDK.RunCloudScript(helloWorldRequest, PlayFabApiTests.CallbackWrapper("HelloWorldCallback", HelloWorldCallback, assert));
        }
    },
};

PlayFabApiTests.ManualExecution();
