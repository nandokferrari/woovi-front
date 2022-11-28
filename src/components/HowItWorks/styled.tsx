import { Typography } from '@mui/material';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    cursor: pointer;
`;

export const Header = styled.div`
    padding: 20px 10px 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Label = styled(Typography)`
    font-weight: 600;
`;
export const IconWrapper = styled.div<{ rotate: boolean }>`
    transition: all linear 100ms;
    ${({ rotate }) =>
        rotate &&
        css`
            rotate: 180deg;
        `}
`;

export const Text = styled(Typography)`
    text-align: left;
    padding: 0 20px 20px;
    color: #999;
    font-size: 14px;
`;
