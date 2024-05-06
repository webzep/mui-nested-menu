import AdbIcon from '@mui/icons-material/Adb';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import NewIcon from '@mui/icons-material/InsertDriveFileOutlined';
import SaveIcon from '@mui/icons-material/SaveRounded';
import { Divider } from '@mui/material';
import { createTheme, ThemeProvider as MTP } from '@mui/material/styles';
import { ContextMenu, IconMenuItem, MenuItemData } from 'mui-nested-menu';
import { FC, Fragment } from 'react';

import { CodeBlock } from '@/components/CodeBlock';
import { PageHeader } from '@/components/ImportSample';
import { SampleBox } from '@/components/SampleBox';
import { Code, P, Subheading } from '@/components/StyledTypography';

const menuItemsData: MenuItemData[] = [
    {
        callback: (event: React.MouseEvent<HTMLElement>, item: MenuItemData) =>
            console.log('New clicked', event, item),
        label: 'New',
        leftIcon: <NewIcon />,
    },
    {
        callback: (event: React.MouseEvent<HTMLElement>, item: MenuItemData) =>
            console.log('Save clicked', event, item),
        label: 'Save',
        leftIcon: <SaveIcon />,
    },
    {
        items: [
            {
                callback: (event: React.MouseEvent<HTMLElement>, item: MenuItemData) =>
                    console.log('Save As > Option 1 clicked', event, item),
                label: 'Option 1',
                rightIcon: <FlutterDashIcon />,
            },
            {
                callback: (event: React.MouseEvent<HTMLElement>, item: MenuItemData) =>
                    console.log('Save As > Option 2 clicked', event, item),
                label: 'Option 2',
                leftIcon: <AdbIcon />,
            },
        ],
        label: 'Save As',
        leftIcon: <FlutterDashIcon />,
    },
    {
        items: [
            {
                items: [
                    {
                        callback: (event: React.MouseEvent<HTMLElement>, item: MenuItemData) =>
                            console.log('Export > FT1 > O1 clicked', event, item),
                        label: 'Option 1',
                        rightIcon: <FlutterDashIcon />,
                    },
                    {
                        callback: (event: React.MouseEvent<HTMLElement>, item: MenuItemData) =>
                            console.log('Export > FT1 > O2 clicked', event, item),
                        label: 'Option 2',
                        leftIcon: <AdbIcon />,
                    },
                ],
                label: 'File Type 1',
            },
            {
                callback: (event: React.MouseEvent<HTMLElement>, item: MenuItemData) =>
                    console.log('Export > FT2 clicked', event, item),
                label: 'File Type 2',
            },
        ],
        label: 'Export',
        leftIcon: <AdbIcon />,
        rightIcon: <AdbIcon />,
    },
    {
        delay: 500,
        items: [
            {
                callback: (event: React.MouseEvent<HTMLElement>, item: MenuItemData) =>
                    console.log('Delay in ms to prevent blinking on hovering > I was delayed! clicked', event, item),
                label: 'I was delayed!',
            },
        ],
        label: 'Delay in ms to prevent blinking on hovering',
    },
];

export const ContextMenuPage: FC = () => {
    return (
        <Fragment>
            <PageHeader />
            <P>
                When right clicked, it will open a context menu. Either provide the <Code>menuItems</Code>{' '}
                prop or the <Code>menuItemsData</Code> prop.
            </P>
            <Subheading>menuItems</Subheading>
            <P>
                <Code>menuItems</Code> allows you to insert other items such as dividers.
            </P>
            <SampleBox>
                <MTP theme={createTheme()}>
                    <ContextMenu
                        menuItems={[
                            <IconMenuItem key="i1" label="Item 1" rightIcon={<NewIcon />} />,
                            <Divider key="i2" />,
                            <IconMenuItem key="i3" label="Item 2" rightIcon={<SaveIcon />} />,
                        ]}
                    >
                        <div>Right Click Me!</div>
                    </ContextMenu>
                </MTP>
            </SampleBox>
            <CodeBlock
                code={`<ContextMenu
  menuItems={[
    <IconMenuItem key="i1" label="Item 1" rightIcon={<NewIcon />} />,
    <Divider key="i2" />,
    <IconMenuItem key="i3" label="Item 2" rightIcon={<SaveIcon />} />,
  ]}
>
  <div>Right Click Me!</div>
</ContextMenu>`}
            />

            <Subheading>menuItemsData</Subheading>
            <P>
                <Code>menuItemsData</Code> allows you to create a menu from an object format. It is more
                limited in what it can do.
            </P>
            <SampleBox>
                <MTP theme={createTheme()}>
                    <ContextMenu menuItemsData={menuItemsData}>
                        <div>Right Click Me!</div>
                    </ContextMenu>
                </MTP>
            </SampleBox>
            <CodeBlock
                code={`<ContextMenu menuItemsData={menuItemsData}>
  <div>Right Click Me!</div>
</ContextMenu>`}
            />
            <Subheading>Data Structure</Subheading>
            <P>
                The <Code>menuItemsData</Code> variable looks like the following:
            </P>
            <CodeBlock
                code={`const menuItemsData: MenuItemData[] = [
  {
    label: 'New',
    leftIcon: <NewIcon />,
    callback: (event, item) => console.log('New clicked', event, item),
  },
  {
    label: 'Save',
    leftIcon: <SaveIcon />,
    callback: (event, item) => console.log('Save clicked', event, item),
  },
  {
    label: 'Save As',
    leftIcon: <FlutterDashIcon />,
    items: [
      {
        label: 'Option 1',
        rightIcon: <FlutterDashIcon />,
        callback: (event, item) => console.log('Save As > Option 1 clicked', event, item),
      },
      {
        label: 'Option 2',
        leftIcon: <AdbIcon />,
        callback: (event, item) => console.log('Save As > Option 2 clicked', event, item),
      },
    ],
  },
  {
    label: 'Export',
    leftIcon: <AdbIcon />,
    rightIcon: <AdbIcon />,
    items: [
      {
        label: 'File Type 1',
        items: [
          {
            label: 'Option 1',
            rightIcon: <FlutterDashIcon />,
            callback: (event, item) => console.log('Export > FT1 > O1 clicked', event, item),
          },
          {
            label: 'Option 2',
            leftIcon: <AdbIcon />,
            callback: (event, item) => console.log('Export > FT1 > O2 clicked', event, item),
          },
        ],
      },
      {
        label: 'File Type 2',
        callback: (event, item) => console.log('Export > FT2 clicked', event, item),
      },
    ],
  },
  {
    delay: 500,
    items: [
        {
            callback: (event: React.MouseEvent<HTMLElement>, item: MenuItemData) =>
                console.log('Delay in ms to prevent blinking on hovering > I was delayed! clicked', event, item),
            label: 'I was delayed!',
        },
    ],
    label: 'Delay in ms to prevent blinking on hovering',
},
]`}
            />
        </Fragment>
    );
};
