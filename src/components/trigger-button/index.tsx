import React, { forwardRef, ReactNode } from 'react';
import styled from '@emotion/styled';

type TriggerButtonProps = {
    onClick: () => void;
    label?: string;
    icon?: ReactNode;
    round?: boolean;
};

export type Ref = HTMLButtonElement;

export const TriggerButton = forwardRef<Ref, TriggerButtonProps>(
    ({ onClick, label, icon, round = false }, ref) => {
        return (
            <Trigger onClick={onClick} ref={ref} round={round}>
                {label && <Label>{label}</Label>}
                {icon && <IconWrapper>{icon}</IconWrapper>}
            </Trigger>
        );
    },
);

const Trigger = styled.button<{
    round: boolean;
}>`
    position: relative;
    border: none;
    outline: none;
    background: darkgray;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    min-width: 32px;
    height: 32px;
    border-radius: ${({ round }) => (round ? '50%' : '8px')};
    padding: 0 4px;

    :hover {
        opacity: 0.7;
    }
`;

const IconWrapper = styled.div`
    position: relative;
    pointer-events: none;
    display: flex;
`;
const Label = styled.div`
    pointer-events: none;
`;
