import React from 'react';
import {Code, P, Subheading} from '@components/StyledTypography';
import {CodeBlock} from '@components/CodeBlock';

export const InstallationPage = () => {
  return (
    <>
      <h1>🪆 Mui Nested Menu</h1>
      <h2>It's not perfect, but it's pretty good.</h2>

      <P>
        This package provides components to let you nest menu items infinitely
        deep. The code is an adaption from{' '}
        <a href="material-ui-nested-menu-item">this package</a> to work with{' '}
        <a href="https://mui.com">MUI version 5</a>.
      </P>
      {/*  */}
      <Subheading>📦 Install</Subheading>
      <P>
        The code is{' '}
        <a href="https://github.com/steviebaa/mui-nested-menu">open source</a>,
        so you can use the library by copying the{' '}
        <Code>src/mui-nested-menu</Code> directory to your project (if you'd
        like to adapt the components) or by installing it via{' '}
        <a href="https://www.npmjs.com/package/mui-nested-menu">NPM</a>.
      </P>
      <CodeBlock code="$ npm install mui-nested-menu" />
      {/*  */}
      <Subheading>🛠 Exports</Subheading>
      <P>The following items and interfaces are exported from the package:</P>
      <ol>
        <li>
          <Code>NestedDropdown</Code> - To create menu bar dropdowns.
        </li>
        <li>
          <Code>ContextMenu</Code> - For a right-click menu.
        </li>
        <li>
          <Code>IconMenuItem</Code> - A menu item which can take start and end
          icons.
        </li>
        <li>
          <Code>NestedMenuItem</Code> - The actual nested menu component.
        </li>
        <li>
          <Code>
            {'nestedMenuItemsFromObject({(items, isOpen, handleClose)})'}
          </Code>{' '}
          - Utility function which returns a list of menu items from a given
          array of items in the object format you see in the samples. You can
          then manually put this inside a <Code>{'<Menu />'}</Code> component.
        </li>
        <li>
          <Code>MenuItemData</Code> - An interface for the menuItemsData prop.
        </li>
      </ol>
      {/*  */}
      <Subheading>💻 Contributing</Subheading>
      <P>
        Pull requests for{' '}
        <a href="https://github.com/steviebaa/mui-nested-menu">the project</a>{' '}
        are more than welcome. Please make sure to stick to the coding style
        used throughout the project.
      </P>

      <P>
        The nest menu code can be found in <Code>src/mui-nested-menu</Code>.
        This way, as you build, you can see the changes by launching the
        documentation. Once a PR is merged, I will update NPM.
      </P>

      <ol>
        <li>Clone the project from GitHub</li>
        <li>Create a new branch</li>
        <li>Make your changes</li>
        <li>Commit your changes</li>
        <li>Push your changes to the branch</li>
        <li>Open a pull request</li>
      </ol>
    </>
  );
};
