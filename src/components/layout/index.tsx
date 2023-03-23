import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

type LayoutProps = {
    children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
    return <LayoutContainer>{children}</LayoutContainer>;
};

const LayoutContainer = styled.div`
    width: 100%;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
