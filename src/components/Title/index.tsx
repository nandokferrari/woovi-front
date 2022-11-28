import { Typography } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';

interface ITitleProps {
    value: string;
}

const Container = styled(Typography)`
    color: #4d4d4d;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
    text-align: center;
`;

export const Title: React.FC<ITitleProps> = ({ value }) => {
    return <Container>{value}</Container>;
};
