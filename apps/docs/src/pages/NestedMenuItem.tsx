import React from 'react';
import { P, Code } from 'components/StyledTypography';
import { SampleBox } from 'components/SampleBox';
import { CodeBlock } from 'components/CodeBlock';
import { PageHeader } from 'components/ImportSample';

import { IconMenuItem, NestedMenuItem } from 'mui-nested-menu';

import { Button, Menu, MenuItem } from '@mui/material';
import { ThemeProvider as MTP, createTheme } from '@mui/material/styles';

import NewIcon from '@mui/icons-material/InsertDriveFileOutlined';
import SaveIcon from '@mui/icons-material/SaveRounded';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import AdbIcon from '@mui/icons-material/Adb';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';

export const NestedMenuItemPage = () => {
	const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
	const open = Boolean(anchorEl);

	const handleClick = (e: React.MouseEvent) => setAnchorEl(e.currentTarget);
	const handleClose = () => setAnchorEl(null);

	return (
		<>
			<PageHeader />

			<P>
				You can manually nest items by wrapping the{' '}
				<Code>IconMenuItem</Code> or the standard <Code>MenuItem</Code>{' '}
				in the <Code>NestedMenuItem</Code> component.
			</P>

			<SampleBox>
				<MTP theme={createTheme()}>
					<div>
						<Button
							variant="contained"
							onClick={handleClick}
							endIcon={<ArrowDownIcon />}
						>
							Click Me!
						</Button>
						<Menu
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
						>
							<NestedMenuItem
								leftIcon={<AdbIcon />}
								rightIcon={<FlutterDashIcon />}
								label="Top Level"
								parentMenuOpen={open}
							>
								<MenuItem onClick={handleClose}>
									Standard Menu Item!
								</MenuItem>
								<IconMenuItem
									onClick={handleClose}
									leftIcon={<NewIcon />}
									rightIcon={<SaveIcon />}
									label="Icon Menu Item"
								/>
								<NestedMenuItem
									leftIcon={<AdbIcon />}
									rightIcon={<ArrowRightIcon />}
									label="Go deeper!"
									parentMenuOpen={open}
								>
									<MenuItem onClick={handleClose}>
										Standard Menu Item!
									</MenuItem>
									<IconMenuItem
										onClick={handleClose}
										leftIcon={<NewIcon />}
										rightIcon={<SaveIcon />}
										label="Icon Menu Item"
									/>
								</NestedMenuItem>
							</NestedMenuItem>
						</Menu>
					</div>
				</MTP>
			</SampleBox>
			<CodeBlock
				code={`const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);

const handleClick = (e: React.MouseEvent) => setAnchorEl(e.currentTarget);
const handleClose = () => setAnchorEl(null);

return (
  <div>
    <Button
      variant="contained"
      onClick={handleClick}
      endIcon={<ArrowDownIcon />}
    >
      Click Me!
    </Button>
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <NestedMenuItem
        leftIcon={<AdbIcon />}
        rightIcon={<FlutterDashIcon />}
        label="Top Level"
        parentMenuOpen={open}
      >
        <MenuItem onClick={handleClose}>Standard Menu Item!</MenuItem>
        <IconMenuItem
          onClick={handleClose}
          leftIcon={<NewIcon />}
          rightIcon={<SaveIcon />}
          label="Icon Menu Item"
        />
        <NestedMenuItem
          leftIcon={<AdbIcon />}
          rightIcon={<ArrowRightIcon />}
          label="Go deeper!"
          parentMenuOpen={open}
        >
          <MenuItem onClick={handleClose}>Standard Menu Item!</MenuItem>
          <IconMenuItem
            onClick={handleClose}
            leftIcon={<NewIcon />}
            rightIcon={<SaveIcon />}
            label="Icon Menu Item"
          />
        </NestedMenuItem>
      </NestedMenuItem>
    </Menu>
  </div>
);`}
			/>
		</>
	);
};
