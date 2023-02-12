# 🪆 Mui Nested Menu

## It's not perfect, but it's pretty good.

This package provides components to let you nest menu items infinitely deep. The code is an adaption from [this package](material-ui-nested-menu-item) to work with [MUI version 5](https://mui.com).

[Check out the documentation here.](https://mui-nested-menu.vercel.app/)

## 📦 Install

The code is [open source](https://github.com/steviebaa/mui-nested-menu), so you can use the library by copying the `src/mui-nested-menu` directory to your project (if you'd like to adapt the components) or by installing it via NPM.

```
$ npm install mui-nested-menu
```

## 🛠 Exports

The following items and interfaces are exported from the package:

-   `NestedDropdown` - To create menu bar dropdowns.

-   `ContextMenu` - For a right-click menu.

-   `IconMenuItem` - A menu item which can take start and end icons.

-   `NestedMenuItem` - The actual nested menu component.

-   `nestedMenuItemsFromObject({(items, isOpen, handleClose)})` - Utility function which returns a list of menu items from a given array of items in the object format you see in the samples. You can then manually put this inside a `<Menu />` component.

-   `MenuItemData` - An interface for the `menuItemsData` prop.

## 💻 Contributing

Pull requests for [the project](https://github.com/steviebaa/mui-nested-menu) are more than welcome. Please make sure to stick to the coding style used throughout the project.

1. Clone the project from GitHub - it is a monorepo.
2. `yarn && yarn start` and you should see the docs on `localhost:1000`.
3. Create a new branch
4. Make your changes
5. Open a pull request

## 📝 Changelog

| Version | Breaking | Changes                                                                                                               |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| 3.0.0   | no       | Support for ESM and CJS modules.                                                                                      |
| 3.1.0   | yes      | Make disabled ans SX props available. Fixes typo `nesteMenuItemsFromObjectProps` to `nestedMenuItemsFromObjectProps`. |
| 3.2.0   | no       | Provide event and item in callback.                                                                                   |
