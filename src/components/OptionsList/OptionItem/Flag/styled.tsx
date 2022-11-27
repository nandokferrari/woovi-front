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
        width: 20px;
        height: 20px;
        transform: translateY(-50%);

        position: absolute;
        top: calc(50% - 3px);
        right: -5px;
        border-radius: 0 0 0 3px;

        rotate: 45deg;
        /* border: 1px solid red; */
    }
`;

export const Title = styled(Typography)`
    color: white;
    font-weight: 600;
    margin-right: 5px;

    @media (max-width: 450px) {
        font-size: 14px;
    }

    @media (max-width: 415px) {
        font-size: 12px;
    }
`;

export const Message = styled(Typography)`
    color: white;

    @media (max-width: 450px) {
        font-size: 14px;
    }

    @media (max-width: 415px) {
        font-size: 12px;
    }
`;
