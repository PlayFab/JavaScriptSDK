JavaScriptSDK README
========
1. Overview:
----
JavaScriptSDK for the Client API of PlayFab


2. Prerequisites:
----
* Users should be very familiar with the topics covered in our [getting started guide](https://playfab.com/docs/getting-started-with-playfab/).

To connect to the PlayFab service, your machine must be running TLS v1.2 or better.
* For Windows, this means Windows 7 and above
* [Official Microsoft Documentation](https://msdn.microsoft.com/en-us/library/windows/desktop/aa380516%28v=vs.85%29.aspx)
* [Support for SSL/TLS protocols on Windows](http://blogs.msdn.com/b/kaushal/archive/2011/10/02/support-for-ssl-tls-protocols-on-windows.aspx)


3. Example Project: PlayFabApiTest.html & PlayFabApiTest.js:
----

These files are an internal PlayFab testing project, which activates and tests the core functionality of the sdk.  They are not part of the sdk.  You should delete these two files before integrating the sdk with your project.

They require a testTitleData.json file to exist, which is described below.

This SDK can alternatively be obtained via our CDN. Additional details can be found [here](https://playfab.com/playfab-now-serving-javascript-sdk-via-cdn/).


4. testTitleData.json file required for example test files.
----

This sdk includes an optional example project that is used by PlayFab to verify sdk features are fully functional.

Please read about the testTitleData.json format, and purpose here:
* https://github.com/PlayFab/SDKGenerator/blob/master/JenkinsConsoleUtility/testTitleData.md
This file must be created and placed in the root of the sdk (beside PlayFabApiTest.html & PlayFabApiTest.js), and must be named "testTitleData.json"


5. Troubleshooting:
----
For a complete list of available APIs, check out the [online documentation](http://api.playfab.com/Documentation/).

#### Contact Us
We love to hear from our developer community!
Do you have ideas on how we can make our products and services better?

Our Developer Success Team can assist with answering any questions as well as process any feedback you have about PlayFab services.

[Forums, Support and Knowledge Base](https://community.playfab.com/index.html)

6. Example Usage (Template):
----

```
// In this javascript example, it is assumed your html will include the PlayFab JavaScript Client SDK
// For example, in your html header, add this:
// <script src="https://download.playfab.com/PlayFabClientApi.js"></script>

// You must always set your titleId first
PlayFab.settings.titleId = null; // Set your titleId here.  Example: "6195"

// Utility function (We may add this to the core sdk later)
function CompileErrorReport(error) {
    if (error == null)
        return "";
    var fullErrors = error.errorMessage;
    for (var paramName in error.errorDetails)
        for (var msgIdx in error.errorDetails[paramName])
            fullErrors += "\n" + paramName + ": " + error.errorDetails[paramName][msgIdx];
    return fullErrors;
}

// Define a callback function (In this case for any PlayFab-Login)
function OnLogin(response, error) {
    if (response && response["code"] == 200) {
        console.log("Login Successful: " + response.data.PlayFabId)
    }
    else {
        console.log("LoginWithEmailAddress Failed: \n" + CompileErrorReport(error))
    }
}

// Username and email is a typical login for Web-Pages
function ExampleLoginWithEmailAddress(email, password)
{
    // Request JSON
    var loginRequest = {
        TitleId: PlayFab.settings.titleId,
        "Email": email,
        "Password": password
    };
    // https://api.playfab.com/Documentation/Client/method/LoginWithEmailAddress
    PlayFabClientSDK.LoginWithEmailAddress(loginRequest, OnLogin);
}

// CustomId should only be used for testing or evaluating PlayFab, but it can be any string
function ExampleLoginWithCustomId(customId) {
    // Request JSON
    var loginRequest = {
        TitleId: PlayFab.settings.titleId,
        CustomId: PlayFab._internalSettings.buildIdentifier,
        CreateAccount: true
    };
    // https://api.playfab.com/Documentation/Client/method/LoginWithCustomID
    PlayFabClientSDK.LoginWithCustomID(loginRequest, OnLogin);
}
```


7. Acknowledgements
----
  Example Usage provided by [dylanh724](https://www.github.com/dylanh724)


8. Copyright and Licensing Information:
----
  Apache License --
  Version 2.0, January 2004
  http://www.apache.org/licenses/

  Full details available within the LICENSE file.
