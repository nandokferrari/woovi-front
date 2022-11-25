import { Box, Button, ButtonProps, Typography } from '@mui/material';
import { withTheme } from '@mui/styles';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Image = styled(withTheme(Box))`
    border: 1px solid #03d69d;
    padding: 15px;
    display: inline-block;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 20px;

    img {
        width: 100%;
        max-width: 330px;
    }
`;

export const CopyButton = styled(Button)<ButtonProps>`
    svg {
        margin-left: 16px;
    }
`;
