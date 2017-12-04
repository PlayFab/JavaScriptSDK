# JavaScriptSDK README


## 1. Overview:

JavaScriptSDK for the Client API of PlayFab

This SDK can alternatively be used via our CDN. Additional details can be found [here](https://blog.playfab.com/blog/playfab-now-serving-javascript-sdk-via-cdn).

If you want to start coding right away, check out our [JavaScript Getting Started Guide](JavaScriptGettingStarted.md)


## 2. Prerequisites:

* Users should be very familiar with the topics covered in our [getting started guide](https://api.playfab.com/docs/general-getting-started).

To connect to the PlayFab service, your machine must be running TLS v1.2 or better.
* For Windows, this means Windows 7 and above
* [Official Microsoft Documentation](https://msdn.microsoft.com/en-us/library/windows/desktop/aa380516%28v=vs.85%29.aspx)
* [Support for SSL/TLS protocols on Windows](http://blogs.msdn.com/b/kaushal/archive/2011/10/02/support-for-ssl-tls-protocols-on-windows.aspx)


## 3. Example Project (UNDER CONSTRUCTION)

The Example project is being revised for the upcoming 1.0 release

This sdk includes an optional example project that is used by PlayFab to verify sdk features are fully functional.

Please read about the testTitleData.json format, and purpose here:
* [testTitleData.md](https://github.com/PlayFab/SDKGenerator/blob/master/JenkinsConsoleUtility/testTitleData.md) must be created and placed in the root of the example (beside index.html & PlayFabApiTest.ts), and must be named "testTitleData.json"


## 4. Troubleshooting:

For a complete list of available APIs, check out the [online documentation](http://api.playfab.com/Documentation/).

#### Contact Us
We love to hear from our developer community!
Do you have ideas on how we can make our products and services better?

Our Developer Success Team can assist with answering any questions as well as process any feedback you have about PlayFab services.

[Forums, Support and Knowledge Base](https://community.playfab.com/index.html)

## 7. NPM support:
You may install JavaScript SDK with npm by running :  

`npm install playfab-web-sdk`

Notice that it will install web JavaScript package as opposed to `npm install playfab` which will install NodeJS SDK.

While npm is generally used for server side packages, you may use one of popular build tools to mix NPM installed packages into your clientside JS codebase. Consider Babel, Webpack, Gulp or Grunt for different approaches to building and automation.

## 6. Acknowledgements

  [dylanh724](https://www.github.com/dylanh724) - The previous tutorial before the current [Getting Started Guide](JavaScriptGettingStarted.md)


## 7. Copyright and Licensing Information:

  Apache License --
  Version 2.0, January 2004
  http://www.apache.org/licenses/

  Full details available within the LICENSE file.
