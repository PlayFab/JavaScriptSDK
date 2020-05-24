# JavaScriptSDK README

This is **hack** around the original PlayFab JS SDK to provide support for generic Typescript projects

## How to use

Use the web SDK Playfab provides as a pre-built package.

```html
    <script src="//download.playfab.com/PlayFabClientApi.js"></script>
```

Create a `global.d.ts` to define its public interface

```js
import {ISettings} from '@nagyv/playfab-web-sdk/src/Typings/PlayFab/PlayFab'
import {IPlayFabClient} from '@nagyv/playfab-web-sdk/src/Typings/PlayFab/PlayFabClientApi'

export {};

declare global {
  interface Window { 
    PlayFab: {
      settings: ISettings,
    }
    PlayFabClientSDK: IPlayFabClient
  }
}
```

Import the interface definitions as needed into your own code as shown in the `global.d.ts` snippet above.
