import React from 'react';
import {Code, P, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {CodeBlock} from '@components/CodeBlock';
import {PageHeader} from '@components/ImportSample';

import NewIcon from '@mui/icons-material/InsertDriveFileOutlined';
import SaveIcon from '@mui/icons-material/SaveRounded';
import AdbIcon from '@mui/icons-material/Adb';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';

import {
  ContextMenu,
  IconMenuItem,
  MenuItemData,
  NestedMenuItem,
} from '@mui-nested-menu/index';
import {ThemeProvider as MTP, createTheme} from '@mui/material/styles';
import {Divider} from '@mui/material';

const menuItemsData: MenuItemData[] = [
  {
    label: 'New',
    leftIcon: <NewIcon />,
    callback: () => console.log('New clicked'),
  },
  {
    label: 'Save',
    leftIcon: <SaveIcon />,
    callback: () => console.log('Save clicked'),
  },
  {
    label: 'Save As',
    leftIcon: <FlutterDashIcon />,
    items: [
      {
        label: 'Option 1',
        rightIcon: <FlutterDashIcon />,
        callback: () => console.log('Save As > Option 1 clicked'),
      },
      {
        label: 'Option 2',
        leftIcon: <AdbIcon />,
        callback: () => console.log('Save As > Option 2 clicked'),
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
            callback: () => console.log('Export > FT1 > O1 clicked'),
          },
          {
            label: 'Option 2',
            leftIcon: <AdbIcon />,
            callback: () => console.log('Export > FT1 > O2 clicked'),
          },
        ],
      },
      {
        label: 'File Type 2',
        callback: () => console.log('Export > FT2 clicked'),
      },
    ],
  },
];

export const ContextMenuPage = () => {
  return (
    <>
      <PageHeader />
      <P>
        When right clicked, it will open a context menu. Either provide the
        <Code>menuItems</Code> prop or the <Code>menuItemsData</Code> prop.
      </P>

      <Subheading>menuItems</Subheading>
      <P>
        <Code>menuItems</Code> allows you to insert other items such as
        dividers.
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
        <Code>menuItemsData</Code> allows you to create a menu from an object
        format. It is more limited in what it can do.
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
    callback: () => console.log('New clicked'),
  },
  {
    label: 'Save',
    leftIcon: <SaveIcon />,
    callback: () => console.log('Save clicked'),
  },
  {
    label: 'Save As',
    leftIcon: <FlutterDashIcon />,
    items: [
      {
        label: 'Option 1',
        rightIcon: <FlutterDashIcon />,
        callback: () => console.log('Save As > Option 1 clicked'),
      },
      {
        label: 'Option 2',
        leftIcon: <AdbIcon />,
        callback: () => console.log('Save As > Option 2 clicked'),
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
            callback: () => console.log('Export > FT1 > O1 clicked'),
          },
          {
            label: 'Option 2',
            leftIcon: <AdbIcon />,
            callback: () => console.log('Export > FT1 > O2 clicked'),
          },
        ],
      },
      {
        label: 'File Type 2',
        callback: () => console.log('Export > FT2 clicked'),
      },
    ],
  },
]`}
      />
    </>
  );
};
