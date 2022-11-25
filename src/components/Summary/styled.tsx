import { Typography } from '@mui/material';
import styled from 'styled-components';
import { IconChevron } from '../Icons/IconChevron';

export const Container = styled.div`
    margin-top: 20px;
`;

export const Steps = styled(Typography)`
    color: #4d4d4d;
    font-weight: 600;
    font-size: 16px;
`;

export const TotalAmount = styled.div`
    border-top: 2px solid #e5e5e5;
    border-bottom: 2px solid #e5e5e5;
`;

export const Cet = styled.div`
    padding: 20px 0;
    border-bottom: 2px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const CetLabel = styled(Typography)`
    font-size: 14px;
`;
export const CetValue = styled(Typography)`
    font-size: 18px;
`;

export const HowItWorks = styled.div`
    padding: 20px 10px 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HowItWorksLabel = styled(Typography)`
    font-weight: 600;
`;
export const ArrowIcon = styled(IconChevron)`
    margin-right: 3px;
`;
