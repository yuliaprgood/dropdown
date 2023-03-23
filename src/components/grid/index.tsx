import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

type GridProps = {
    children: ReactNode;
};

export const Grid: FC<GridProps> = ({ children }) => {
    return <GridContainer>{children}</GridContainer>;
};

const GridContainer = styled.div`
    width: min-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
`;
