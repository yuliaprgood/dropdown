import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useMeasure } from '../../hooks/useMeasure';
import { useClickOutside } from '../../hooks/useClickOutside';
import { MenuItemProps, Position } from '../../types';
import { TriggerButton } from '../trigger-button';
import { Icons } from '../../ui/icons';
import { Dropdown, Item, Wrapper } from './styles';

type DropdownMenuProps = {
    menuItems: MenuItemProps[];
};

const MenuItem: FC<MenuItemProps> = ({ icon, onClick, title }) => {
    return (
        <Item onClick={onClick}>
            <div>{title}</div>
            {icon && icon}
        </Item>
    );
};

export const DropdownMenu: FC<DropdownMenuProps> = ({ menuItems }) => {
    const [active, setActive] = useState(false);
    const [windowWidth, windowHeight] = useWindowSize();
    const [dropdownRef, dropdownBounds] = useMeasure(true);
    const [triggerRef, triggerBounds] = useMeasure(true);
    const [viewPortVisible, setVisible] = useState(true);

    const positionX = useMemo(
        () =>
            windowWidth - triggerBounds.x > dropdownBounds.width
                ? Position.Left
                : Position.Right,
        [windowWidth, triggerBounds, dropdownBounds],
    );

    const positionY = useMemo(
        () =>
            windowHeight - triggerBounds.y < dropdownBounds.height
                ? Position.Top
                : Position.Bottom,
        [windowWidth, triggerBounds, dropdownBounds],
    );

    const handleTriggerClick = useCallback(
        () => setActive((prev) => !prev),
        [],
    );

    const handleItemClick = useCallback((onClick: () => void) => {
        onClick();
        setTimeout(() => {
            setActive(() => false);
        }, 300);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry], observer) => {
            entry.isIntersecting
                ? setVisible(() => true)
                : setVisible(() => false);
        }, {});
        if (triggerRef.current) observer.observe(triggerRef.current);

        return () => {
            if (triggerRef.current) observer.unobserve(triggerRef.current);
        };
    }, [triggerRef]);

    useClickOutside(dropdownRef, (e: MouseEvent | TouchEvent) => {
        if (e.target !== triggerRef.current) {
            setActive(() => false);
        }
    });

    return (
        <Wrapper>
            <TriggerButton
                onClick={handleTriggerClick}
                ref={triggerRef}
                icon={<Icons.Menu size={20} fill={'white'} />}
            />
            <Dropdown
                ref={dropdownRef}
                orientationX={positionX}
                orientationY={positionY}
                isActive={active}
                viewPortVisible={viewPortVisible}
            >
                {menuItems.map(({ icon, title, onClick }) => (
                    <MenuItem
                        key={title}
                        title={title}
                        icon={icon}
                        onClick={() => handleItemClick(onClick)}
                    />
                ))}
            </Dropdown>
        </Wrapper>
    );
};
