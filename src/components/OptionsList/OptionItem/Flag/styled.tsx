import { Typography } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
    background: #133a6f;
    padding: 4px 12px;
    border-radius: 5px;
    display: flex;
    position: relative;
    margin-top: 10px;

    &:after {
        content: '';
        display: block;
        background: white;
        width: 22px;
        height: 22px;
        position: absolute;
        top: -3px;
        right: -2px;
        rotate: 45deg;
        transform: translateX(+50%);
        border-radius: 0 0 0 3px;
    }
`;

export const Title = styled(Typography)`
    color: white;
    font-weight: 600;
    margin-right: 5px;
`;

export const Message = styled(Typography)`
    color: white;
`;
