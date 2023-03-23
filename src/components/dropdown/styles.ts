import styled from '@emotion/styled';
import { PositionX, PositionY } from '../../types';

const Wrapper = styled.div`
    position: relative;
    height: fit-content;
`;

const Item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: 0.3s;
    word-break: break-word;
    border-radius: 4px;
    padding: 4px;

    :hover {
        background: aliceblue;
    }
`;

const Dropdown = styled.div<{
    orientationX?: PositionX;
    orientationY?: PositionY;
    isActive: boolean;
    viewPortVisible: boolean;
}>`
    border-radius: 8px;
    padding: 16px;
    background: white;
    position: absolute;
    width: 260px;
    left: ${({ orientationX }) => (orientationX === 'left' ? 0 : 'unset')};
    right: ${({ orientationX }) => (orientationX === 'right' ? 0 : 'unset')};
    top: ${({ orientationY }) =>
        orientationY === 'bottom' ? '34px' : 'unset'};
    bottom: ${({ orientationY }) =>
        orientationY === 'top' ? '34px' : 'unset'};
    display: flex;
    flex-direction: column;
    gap: 4px;
    transition: 0.3s;
    visibility: ${({ isActive, viewPortVisible }) =>
        isActive && viewPortVisible ? 'visible' : 'hidden'};
    opacity: ${({ isActive, viewPortVisible }) =>
        isActive && viewPortVisible ? 1 : 0};
    z-index: ${({ isActive, viewPortVisible }) =>
        isActive && viewPortVisible ? 10 : -1};
`;

export { Item, Wrapper, Dropdown };
