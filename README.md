# Chrome Extensions React Redux Boilerplate

## Scripts

|`npm run <script>`|Description|
|------------------|-----------|
|`build`|Builds the application one time|
|`build:watch`|Builds the application and watches the files for changes|


## Application Structure

The application structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. Please note, however, that this structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and patterns for building scalable applications. If you wish to read more about this pattern, please check out this [awesome writeup](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) by [Justin Greenberg](https://github.com/justingreenberg).

```
.
├── src                         # Application source code
│   ├── config                  # Project configuration settings
│   ├── components              # Reusable Presentational Components
│   ├── containers              # Reusable Container Components
│   ├── modules                 # Modules that deserve a separate file
│   ├── routes                  # Main route definitions and async split points
│   │   ├── index.js            # Bootstrap main application routes with store
│   │   └── Home                # Fractal route
│   │       ├── components      # Route specific components
│   │           └── index.js    # Exports all the route specific components
│   │       ├── index.js        # Route definitions
│   │       ├── assets          # Assets required to render components
│   │       ├── HomeActions     # Collections of actions
│   │       ├── HomeComponent   # Presentational React Components
│   │       ├── HomeConstants   # Collections of constants
│   │       ├── HomeContainer   # Connect components to actions and store
│   │       ├── HomeReducer     # Components reducer
│   │       ├── HomeSelectors   # Collections of selectors
│   │       └── routes **       # Fractal sub-routes (** optional)
│   ├── reducers.js             # Reducer registry and injection
│   ├── background.js           # Background application, syncing store to chrome storage
│   ├── content.js              # Startpoint of the app that is injected to html pages
│   ├── popup.js                # Startpoint of the app that is opened when clicking on the app icon 
│   └── styles                  # Application-wide styles (generally settings)
└── webpack.config.js           # Webpack configuration
```

## Installation
1. Run `npm run build`
1. Open [chrome://extensions/](chrome://extensions/) and enable Developer mode in the top right corner
1. Drag the [assets](./assets) folder into screen
1. The extension should no appear
> Small note: When updating background.js you have to reload the app

## Collaboration

If you have questions or [issues](https://github.com/TriPSs/chrome-extension-react-redux-boilerplate/issues), please [open an issue](https://github.com/TriPSs/chrome-extension-react-redux-boilerplate/issues/new)!
