import { Box, Button, ButtonProps, Typography } from '@mui/material';
import { withTheme } from '@mui/styles';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Image = withTheme(styled(Box)`
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    padding: 15px;
    display: inline-block;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 20px;

    img {
        width: 100%;
        max-width: 330px;
    }
`);

export const CopyButton = styled(Button)<ButtonProps>`
    @media (max-width: 415px) {
        font-size: 15px;
    }

    svg {
        margin-left: 16px;
    }
`;
