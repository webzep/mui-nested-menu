import AdbIcon from '@mui/icons-material/Adb';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Button, Menu } from '@mui/material';
import { createTheme, ThemeProvider as MTP } from '@mui/material/styles';
import { IconMenuItem } from 'mui-nested-menu';
import { MouseEvent, useState } from 'react';

import { CodeBlock } from '@/components/CodeBlock';
import { PageHeader } from '@/components/ImportSample';
import { SampleBox } from '@/components/SampleBox';
import { Code, P } from '@/components/StyledTypography';

export const IconMenuItemPage = () => {
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);
    const open = Boolean(anchorEl);

    const handleClick = (e: MouseEvent) => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <>
            <PageHeader />
            <P>
                The <Code>IconMenuItem</Code> is a styled <Code>MenuItem</Code> used for the other components.
                However it can be used separately as well.
            </P>
            <SampleBox>
                <MTP theme={createTheme()}>
                    <div>
                        <Button variant="contained" onClick={handleClick} endIcon={<ArrowDownIcon />}>
                            Click Me!
                        </Button>
                        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                            <IconMenuItem
                                leftIcon={<AdbIcon />}
                                rightIcon={<FlutterDashIcon />}
                                label={'Icon Menu Item'}
                                onClick={handleClose}
                            />
                        </Menu>
                    </div>
                </MTP>
            </SampleBox>
            <CodeBlock
                code={`const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);

const handleClick = (e: MouseEvent) => setAnchorEl(e.currentTarget);
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
      <IconMenuItem
        leftIcon={<AdbIcon />}
        rightIcon={<FlutterDashIcon />}
        label="Icon Menu Item"
        onClick={handleClose}
      />
    </Menu>
  </div>
);`}
            />
        </>
    );
};
