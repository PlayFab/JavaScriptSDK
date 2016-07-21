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


4. testTitleData.json file required for example test files.
----

This sdk includes an optional example project that is used by PlayFab to verify sdk features are fully functional.  The testTitleData.json file provides your secret title information to the unit-test project, so it can execute tests in your own PlayFab title.

The format is as follows:

    {
    	"titleId": "your Game Title ID, found in the settings/credentials section of your dashboard on the website",
    	"developerSecretKey": "your PlayFab API Secret Key, found in the settings/credentials section of your dashboard on the website - NEVER SHARE THIS KEY WITH PLAYERS",
    	"titleCanUpdateSettings": "false",  // "true" or "false", based on your Allow Client to Post Player Statistics option, found in the settings/general section of your dashboard on the website
    	"userName": "testUser", // Arbitrary username, you can change this to any valid username
    	"userEmail": "your@email.com", // This email address will be bound to the username above
    	"userPassword": "testPassword", // This must be the correct password for the testUser above (if that user does not exist yet, this will be the new password)
    	"characterName": "testCharacter" // Arbitrary characterName, you can change this to any valid characterName
    }

This file must be created and placed in the root of the sdk (beside PlayFabApiTest.html & PlayFabApiTest.js), and must be named "testTitleData.json"


5. Troubleshooting:
----
For a complete list of available APIs, check out the [online documentation](http://api.playfab.com/Documentation/).

#### Contact Us
We love to hear from our developer community!
Do you have ideas on how we can make our products and services better?

Our Developer Success Team can assist with answering any questions as well as process any feedback you have about PlayFab services.

[Forums, Support and Knowledge Base](https://community.playfab.com/hc/en-us)

6. Example Usage (Template):
----
```
function VanillaPFTemplate(bar)
{
    function PFTemplate(bar)
    {
        console.log("@ PFTemplate..");

        var req =
        {
            // TODO: Replace "fu" with your own request JSON KVP's
            "fu": bar
        };

        // TODO: Uncomment below and replace FuBar with 
        // a proper PlayFabClientSDK.function(request, callback)

        // Callback =>
        function onPFTemplate(response, err)
        {
            console.log("@ onPFTemplate()..");
            if ( response && response["code"] == 200 )
            {
                // SUCCESS >>
                console.log( j(response) );
                var data = response["data"];

                if (data)
                {
                    // TODO: Handle success
                }
            }
            else
            {
                // FAIL >>
                var errMainCode = err["code"];
                var errStatus = err["status"];
                var errCode = err["errorCode"];
                var errMsg = err["errorMessage"];

                var errMainTxt = "**ERR " + errMainCode + " (" + errStatus + ") @ onPFTemplate: ";
                var errPlayFabTxt = errMsg + "(" + errCode + ")";
                console.log(errMainTxt + errPlayFabTxt);

                // TODO: Handle errors
                // Example below for sweetAlert2 @ https://github.com/limonte/sweetalert2
                //swal(status, errMsg, "error");
            }
        }
    }
}
```

7. Copyright and Licensing Information:
----
  Apache License --
  Version 2.0, January 2004
  http://www.apache.org/licenses/

  Full details available within the LICENSE file.
