import React from 'react';
import { Code, P, Subheading } from 'components/StyledTypography';
import { SampleBox } from 'components/SampleBox';
import { CodeBlock } from 'components/CodeBlock';
import { PageHeader } from 'components/ImportSample';

import { ThemeProvider as MTP, createTheme } from '@mui/material/styles';
import NewIcon from '@mui/icons-material/InsertDriveFileOutlined';
import SaveIcon from '@mui/icons-material/SaveRounded';
import SaveAsIcon from '@mui/icons-material/SaveOutlined';
import ImportExportRoundedIcon from '@mui/icons-material/ImportExportRounded';
import { NestedDropdown } from 'mui-nested-menu';
import { MenuItemData } from 'mui-nested-menu';

const menuItemsData: MenuItemData = {
	label: 'File',
	items: [
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
			leftIcon: <SaveAsIcon />,
			items: [
				{
					label: 'Option 1',
					rightIcon: <SaveAsIcon />,
					callback: () => console.log('Save As > Option 1 clicked'),
				},
				{
					label: 'Option 2',
					leftIcon: <SaveAsIcon />,
					callback: () => console.log('Save As > Option 2 clicked'),
					disabled: true,
				},
			],
		},
		{
			label: 'Export',
			leftIcon: <ImportExportRoundedIcon />,
			rightIcon: <ImportExportRoundedIcon />,
			items: [
				{
					label: 'File Type 1',
					items: [
						{
							label: 'Option 1',
							rightIcon: <SaveAsIcon />,
							callback: () => console.log('Export > FT1 > O1 clicked'),
							sx: { color: '#FF0000' },
						},
						{
							label: 'Option 2',
							leftIcon: <SaveAsIcon />,
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
	],
};

export const NestedDropdownPage = () => {
	return (
		<>
			<PageHeader />
			<P>
				You can create an object with the structure seen below and pass it as
				the <Code>menuItemsData</Code> prop of the <Code>NestedDropdown</Code>{' '}
				component. Make it as deep as you like.
			</P>

			<SampleBox>
				<MTP theme={createTheme()}>
					<NestedDropdown
						onClick={() => console.log('Clicked')}
						menuItemsData={menuItemsData}
						MenuProps={{ elevation: 3 }}
						ButtonProps={{ variant: 'outlined' }}
					/>
				</MTP>
			</SampleBox>
			<CodeBlock
				code={`<NestedDropdown
  menuItemsData={menuItemsData}
  MenuProps={{elevation: 3}}
  ButtonProps={{variant: 'outlined'}}
  onClick={() => console.log('Clicked')}
/>`}
			/>

			<Subheading>Data Structure</Subheading>
			<P>
				The <Code>menuItemsData</Code> variable looks like the following:
			</P>

			<CodeBlock
				code={`const menuItemsData: MenuItemData = {
  label: 'File',
  items: [
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
      leftIcon: <SaveAsIcon />,
      items: [
        {
          label: 'Option 1',
          rightIcon: <SaveAsIcon />,
          callback: () => console.log('Save As > Option 1 clicked'),
        },
        {
          label: 'Option 2',
          leftIcon: <SaveAsIcon />,
          callback: () => console.log('Save As > Option 2 clicked'),
          disabled: true,
        },
      ],
    },
    {
      label: 'Export',
      leftIcon: <ImportExportRoundedIcon />,
      rightIcon: <ImportExportRoundedIcon />,
      items: [
        {
          label: 'File Type 1',
          items: [
            {
              label: 'Option 1',
              rightIcon: <SaveAsIcon />,
              callback: () => console.log('Export > FT1 > O1 clicked'),
              sx: { color: '#FF0000' },
            },
            {
              label: 'Option 2',
              leftIcon: <SaveAsIcon />,
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
  ],
};`}
			/>
		</>
	);
};
