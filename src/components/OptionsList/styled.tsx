import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export const Label = styled(Typography)`
    color: #4d4d4d;
    background: #e5e5e5;
    font-size: 18px;
    padding: 2px 20px;
    border-radius: 100px;
    display: inline-block;
    font-weight: 800;
`;

export const Container = styled.div`
    position: relative;

    ${Label} {
        position: absolute;
        top: -17px;
        left: 20px;
    }

    &:first-child {
        /* margin-bottom: 34px; */
    }
`;

export const List = styled.div`
    color: #4d4d4d;
`;
