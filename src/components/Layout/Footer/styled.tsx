import { Typography } from '@mui/material';
import styled from 'styled-components';
import { LogoFooter } from '../../Logo';

export const Container = styled.footer`
    display: flex;
    justify-content: center;
    padding: 40px 0 25px;
`;

export const Text = styled(Typography)`
    display: block;
    font-size: 14px;
    color: #b2b2b2;
    margin: 0 5px;
`;
