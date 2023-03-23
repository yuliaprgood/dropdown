import React from 'react';

export type ProductProps = {
    id: number;
    title: string;
};

export type MenuItemProps = {
    title: string;
    icon?: React.ReactNode;
    onClick: () => void;
};

export enum Position {
    Top = 'top',
    Bottom = 'bottom',
    Left = 'left',
    Right = 'right',
}

export type PositionX = Position.Left | Position.Right;
export type PositionY = Position.Top | Position.Bottom;
