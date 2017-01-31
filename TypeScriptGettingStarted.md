
JavaScript with TypeScript Getting Started Guide
----

This guide will help you make your first API call using a Web TypeScript environment.

TypeScript Project Setup
----

* OS: This guide is written for Windows 10 and Visual Studio
  * The "Project Setup" section of this guide will not be very useful for other operating systems and environments (sorry!)
* Installation
  * Download and install Visual Studio 2015
    * Update TypeScript within VS to the [latest version](https://www.microsoft.com/en-us/download/details.aspx?id=48593) (2.1.5 when this document was written)
    * [OPTIONAL] Install the [Node.js tools](https://www.visualstudio.com/vs/node-js/) into Visual Studio
  * Download and extract the [PlayFab JavaScriptSDK](https://github.com/PlayFab/JavaScriptSDK/archive/master.zip) to a local folder of your choosing {playFabSdkLocation}
* New Project Setup
  * Open Visual Studio and create a new "Blank Node.js Web Application"
    * ![TS image](/images/TypeScript/NewProj.png)
    * This creates a project with several setup files
    * [OPTIONAL] delete app.cs (We won't be using it)
* In Windows Explorer, navigate to {playFabSdkLocation}/PlayFabSdk and find the "src" folder
* In another Windows Explorer window, navigate to your new Visual Studio project
  * Copy the "src" folder from {playFabSdkLocation}/PlayFabSdk, into your project folder
* Close the explorer windows, and return to Visual Studio
* Toggle the "Show All Files" button a few times, until you can see the PlayFab source files
* RClick "src" and "Include in Project"
  * ![TS image](/images/TypeScript/IncludeSdk.png)
* At this point, running the project will open a browser, and display the default Microsoft example
* Project setup complete!


Set up your first API call
----

This guide will provide the minimum steps to make your first PlayFab API call.  Confirmation will be visible on the webpage.

In your favorite text-editor, update the contents of index.html as follows:
```HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>PlayFab JavaScript Unit Tests</title>
    <script type="text/javascript" src="https://download.playfab.com/PlayFabClientApi.js"></script>
    <script type="text/javascript" src="app.js"></script>
</head>
<body>
    PlayFab Getting Started Guide<br/>
    TitleID: <input type="text" id="titleId" value="144"><br/>
    CustomID: <input type="text" id="customId" value="GettingStartedGuide"><br/>
    <input type="button" value="Call LoginWithCustomID" onclick="DoExampleLoginWithCustomID()"><br/>
    Result:<br/>
    <textarea id="resultOutput" cols="60" rows="5"></textarea><br/>
</body>
</html>
```

In your favorite text-editor, update the contents of app.ts as follows:
```TypeScript
function DoExampleLoginWithCustomID() {
    PlayFab.settings.titleId = (<HTMLInputElement>document.getElementById("titleId")).value;
    var loginRequest = {
        CustomId: (<HTMLInputElement>document.getElementById("customId")).value,
        CreateAccount: true
    };

    PlayFabClientSDK.LoginWithCustomID(loginRequest, LoginCallback);
}

var LoginCallback = function (result: PlayFabModule.SuccessContainer<PlayFabClientModels.LoginResult>, error: PlayFabModule.IPlayFabError) {
    if (result !== null) {
        document.getElementById("resultOutput").innerHTML = "Congratulations, you made your first successful API call!";
    } else if (error !== null) {
        document.getElementById("resultOutput").innerHTML =
            "Something went wrong with your first API call.\n" +
            "Here's some debug information:\n" +
            CompileErrorReport(error);
    }
}

// This is a utility function we haven't put into the core SDK yet.  Feel free to use it.
function CompileErrorReport(error: PlayFabModule.IPlayFabError) {
    if (error === null)
        return "";
    var fullErrors = error.errorMessage;
    for (var paramName in error.errorDetails)
        for (var msgIdx in error.errorDetails[paramName])
            fullErrors += "\n" + paramName + ": " + error.errorDetails[paramName][msgIdx];
    return fullErrors;
}
```

Finish and Execute
----

* Run the program: Drop Down -> Debug -> Start Debugging
* In the new browser window, click the "Call LoginWithCustomID" button
* You should see the following text in the Result section:
```text
Congratulations, you made your first successful API call!
```

* At this point, you can start making other api calls, and building your game
* For a list of all available client API calls, see our documentation:
  * https://api.playfab.com/
* Happy coding!

Deconstruct the code
----
