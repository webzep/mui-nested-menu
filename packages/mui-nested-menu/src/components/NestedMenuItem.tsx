import Menu, { MenuProps } from '@mui/material/Menu';
import { MenuItemProps } from '@mui/material/MenuItem';
import {
    ElementType,
    FocusEvent,
    forwardRef,
    HTMLAttributes,
    KeyboardEvent,
    MouseEvent,
    ReactNode,
    RefAttributes,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';

import { ChevronRight } from '../icons/ChevronRight';
import { IconMenuItem } from './IconMenuItem';

export type NestedMenuItemProps = Omit<MenuItemProps, 'button'> & {
    parentMenuOpen: boolean;
    component?: ElementType;
    label?: string;
    rightIcon?: ReactNode;
    leftIcon?: ReactNode;
    children?: ReactNode;
    className?: string;
    tabIndex?: number;
    disabled?: boolean;
    ContainerProps?: HTMLAttributes<HTMLElement> & RefAttributes<HTMLElement | null>;
    MenuProps?: Partial<Omit<MenuProps, 'children'>>;
    button?: true | undefined;
    menuPosition?: 'left' | 'right';
};

const NestedMenuItem = forwardRef<HTMLLIElement | null, NestedMenuItemProps>(function NestedMenuItem(
    props,
    ref
) {
    const {
        parentMenuOpen,
        label,
        rightIcon = <ChevronRight />,
        leftIcon = null,
        children,
        className,
        tabIndex: tabIndexProp,
        ContainerProps: ContainerPropsProp = {},
        menuPosition = 'right',
        MenuProps,
        ...MenuItemProps
    } = props;

    const { ref: containerRefProp, ...ContainerProps } = ContainerPropsProp;

    const menuItemRef = useRef<HTMLLIElement | null>(null);
    useImperativeHandle(ref, () => menuItemRef.current!); // eslint-disable-line @typescript-eslint/no-non-null-assertion

    const containerRef = useRef<HTMLDivElement | null>(null);
    useImperativeHandle(containerRefProp, () => containerRef.current);

    const menuContainerRef = useRef<HTMLDivElement | null>(null);

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
        setIsSubMenuOpen(true);

        if (ContainerProps.onMouseEnter) {
            ContainerProps.onMouseEnter(e);
        }
    };
    const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
        setIsSubMenuOpen(false);

        if (ContainerProps.onMouseLeave) {
            ContainerProps.onMouseLeave(e);
        }
    };

    // Check if any immediate children are active
    const isSubmenuFocused = () => {
        const active = containerRef.current?.ownerDocument.activeElement ?? null;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        for (const child of menuContainerRef.current!.children) {
            if (child === active) {
                return true;
            }
        }

        return false;
    };

    const handleFocus = (e: FocusEvent<HTMLElement>) => {
        if (e.target === containerRef.current) {
            setIsSubMenuOpen(true);
        }

        if (ContainerProps.onFocus) {
            ContainerProps.onFocus(e);
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            return;
        }

        if (isSubmenuFocused()) {
            e.stopPropagation();
        }

        const active = containerRef.current?.ownerDocument.activeElement;

        if (e.key === 'ArrowLeft' && isSubmenuFocused()) {
            containerRef.current?.focus();
        }

        if (e.key === 'ArrowRight' && e.target === containerRef.current && e.target === active) {
            const firstChild = menuContainerRef.current?.children[0] as HTMLDivElement;
            firstChild?.focus();
        }
    };

    const open = isSubMenuOpen && parentMenuOpen;

    // Root element must have a `tabIndex` attribute for keyboard navigation
    let tabIndex;
    if (!props.disabled) {
        tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
    }

    return (
        <div
            {...ContainerProps}
            ref={containerRef}
            onFocus={handleFocus}
            tabIndex={tabIndex}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onKeyDown={handleKeyDown}
        >
            <IconMenuItem
                MenuItemProps={MenuItemProps}
                className={className}
                ref={menuItemRef}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                label={label}
            />

            <Menu
                // Set pointer events to 'none' to prevent the invisible Popover div
                // from capturing events for clicks and hovers
                style={{ pointerEvents: 'none' }}
                anchorEl={menuItemRef.current}
                anchorOrigin={{
                    horizontal: menuPosition === 'right' ? 'right' : 'left',
                    vertical: 'top',
                }}
                transformOrigin={{
                    horizontal: menuPosition === 'right' ? 'left' : 'right',
                    vertical: 'top',
                }}
                open={open}
                autoFocus={false}
                disableAutoFocus
                disableEnforceFocus
                onClose={() => {
                    setIsSubMenuOpen(false);
                }}
                {...MenuProps}
            >
                <div ref={menuContainerRef} style={{ pointerEvents: 'auto' }}>
                    {children}
                </div>
            </Menu>
        </div>
    );
});

NestedMenuItem.displayName = 'NestedMenuItem';
export { NestedMenuItem };
