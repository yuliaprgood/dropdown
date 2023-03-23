import { FC } from 'react';
import { ProductProps } from '../../types';
import styled from '@emotion/styled';
import { DropdownMenu } from '../dropdown';
import { menuItems } from '../../mocks/menuItems';

export const Card: FC<ProductProps> = ({ title }) => {
    return (
        <CardWrapper>
            <Title>{title}</Title>
            <Menu>
                <DropdownMenu menuItems={menuItems} />
            </Menu>
        </CardWrapper>
    );
};

const CardWrapper = styled.div`
    position: relative;
    width: 290px;
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 16px;
    padding: 16px;
    background: lightgray;
`;

const Menu = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const Title = styled.h3`
    text-transform: capitalize;
`;
