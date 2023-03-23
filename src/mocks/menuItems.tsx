import { Icons } from '../ui/icons';
import React from 'react';
import { MenuItemProps } from '../types';

export const menuItems: MenuItemProps[] = [
    {
        title: 'Поделиться в социальных сетях',
        icon: <Icons.Share size={16} />,
        onClick: () => console.log('Поделиться'),
    },
    {
        title: 'Редактировать',
        icon: <Icons.Edit size={16} />,
        onClick: () => console.log('Редактировать'),
    },
    {
        title: 'Удалить',
        icon: <Icons.Delete size={16} />,
        onClick: () => console.log('Удалить'),
    },
];
