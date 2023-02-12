import { FC, Fragment } from 'react';
import { Typography } from 'ui';

import { CodeBlock } from '@/components/CodeBlock';
import { Code, P, Subheading } from '@/components/StyledTypography';

export const InstallationPage: FC = () => {
    return (
        <Fragment>
            <Typography variant="h1">🪆 Mui Nested Menu</Typography>
            <Typography variant="h2">It&apos;s not perfect, but it&apos;s pretty good.</Typography>
            <P>
                This package provides components to let you nest menu items infinitely deep. The code is an
                adaption from <a href="material-ui-nested-menu-item">this package</a> to work with{' '}
                <a href="https://mui.com">MUI version 5</a>.
            </P>
            <Subheading>📦 Install</Subheading>
            <P>
                The code is <a href="https://github.com/steviebaa/mui-nested-menu">open source</a>, so you can
                use the library by copying the <Code>src/mui-nested-menu</Code> directory to your project (if
                you&apos;d like to adapt the components) or by installing it via{' '}
                <a href="https://www.npmjs.com/package/mui-nested-menu">NPM</a>.
            </P>
            <CodeBlock code="npm install mui-nested-menu" />
            <Subheading>🛠 Exports</Subheading>
            <P>The following items and types are exported from the package:</P>
            <P>
                <ol>
                    <li>
                        <Code>NestedDropdown</Code> - To create menu bar dropdowns.
                    </li>
                    <li>
                        <Code>ContextMenu</Code> - For a right-click menu.
                    </li>
                    <li>
                        <Code>IconMenuItem</Code> - A menu item which can take start and end icons.
                    </li>
                    <li>
                        <Code>NestedMenuItem</Code> - The actual nested menu component.
                    </li>
                    <li>
                        <Code>{'nestedMenuItemsFromObject({(items, isOpen, handleClose)})'}</Code> - Utility
                        function which returns a list of menu items from a given array of items in the object
                        format you see in the samples. You can then manually put this inside a{' '}
                        <Code>{'<Menu />'}</Code> component.
                    </li>
                    <li>
                        <Code>MenuItemData</Code> - A type for the menuItemsData prop.
                    </li>
                </ol>
            </P>
            <Subheading>💻 Contributing</Subheading>
            <P>
                Pull requests for <a href="https://github.com/steviebaa/mui-nested-menu">the project</a> are
                more than welcome. Please make sure to stick to the coding style used throughout the project.
            </P>
            <P>
                The nested menu code can be found in <Code>packages/mui-nested-menu</Code>. This way,
                development changes will be live in the documentation, so all you need to do it run{' '}
                <Code>yarn && yarn start</Code>. Once a PR is merged, I will update NPM registry.
            </P>
            <P>
                <ol>
                    <li>Clone the project from GitHub</li>
                    <li>Create a new branch</li>
                    <li>Make your changes</li>
                    <li>Commit your changes</li>
                    <li>Push your changes to the branch</li>
                    <li>Open a pull request</li>
                </ol>
            </P>
        </Fragment>
    );
};
