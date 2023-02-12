import React from 'react';
import { Code, P, Subheading } from '@/components/StyledTypography';
import { SampleBox } from '@/components/SampleBox';
import { CodeBlock } from '@/components/CodeBlock';
import { PageHeader } from '@/components/ImportSample';

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
			callback: (
				event: React.MouseEvent<HTMLElement>,
				item: MenuItemData
			) => console.log('New clicked', event, item),
		},
		{
			label: 'Save',
			leftIcon: <SaveIcon />,
			callback: (
				event: React.MouseEvent<HTMLElement>,
				item: MenuItemData
			) => console.log('Save clicked', event, item),
		},
		{
			label: 'Save As',
			leftIcon: <SaveAsIcon />,
			items: [
				{
					label: 'Option 1',
					rightIcon: <SaveAsIcon />,
					callback: (
						event: React.MouseEvent<HTMLElement>,
						item: MenuItemData
					) => console.log('Save As > Option 1 clicked', event, item),
				},
				{
					label: 'Option 2',
					leftIcon: <SaveAsIcon />,
					callback: (
						event: React.MouseEvent<HTMLElement>,
						item: MenuItemData
					) => console.log('Save As > Option 2 clicked', event, item),
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
							callback: (
								event: React.MouseEvent<HTMLElement>,
								item: MenuItemData
							) =>
								console.log(
									'Export > FT1 > O1 clicked',
									event,
									item
								),
							sx: { color: '#FF0000' },
						},
						{
							label: 'Option 2',
							leftIcon: <SaveAsIcon />,
							callback: (
								event: React.MouseEvent<HTMLElement>,
								item: MenuItemData
							) =>
								console.log(
									'Export > FT1 > O2 clicked',
									event,
									item
								),
						},
					],
				},
				{
					label: 'File Type 2',
					callback: (
						event: React.MouseEvent<HTMLElement>,
						item: MenuItemData
					) => console.log('Export > FT2 clicked', event, item),
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
				You can create an object with the structure seen below and pass
				it as the <Code>menuItemsData</Code> prop of the{' '}
				<Code>NestedDropdown</Code> component. Make it as deep as you
				like.
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
				The <Code>menuItemsData</Code> variable looks like the
				following:
			</P>

			<CodeBlock
				code={`const menuItemsData: MenuItemData = {
  label: 'File',
  items: [
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
      leftIcon: <SaveAsIcon />,
      items: [
        {
          label: 'Option 1',
          rightIcon: <SaveAsIcon />,
          callback: (event, item) => console.log('Save As > Option 1 clicked', event, item),
        },
        {
          label: 'Option 2',
          leftIcon: <SaveAsIcon />,
          callback: (event, item) => console.log('Save As > Option 2 clicked', event, item),
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
              callback: (event, item) => console.log('Export > FT1 > O1 clicked', event, item),
              sx: { color: '#FF0000' },
            },
            {
              label: 'Option 2',
              leftIcon: <SaveAsIcon />,
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
  ],
};`}
			/>
		</>
	);
};
