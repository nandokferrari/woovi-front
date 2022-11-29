import { bottomNavigationActionClasses, Typography } from '@mui/material';
import { withTheme } from '@mui/styles';
import styled, { css } from 'styled-components';

export const Container = withTheme(styled.div<{ selected: boolean }>`
    padding: 22px 20px;
    border: 2px solid #e5e5e5;
    margin-top: -2px;
    cursor: pointer;

    &:first-child {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    &:last-child {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    &:hover {
        background: #fafafa;
    }

    ${({ selected, theme }) =>
        selected &&
        css`
            outline: 2px solid ${theme.palette.primary.main};
            outline-offset: -2px;
            background-color: #f4fbf9;
        `}
`);

export const Values = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Installment = styled.div`
    display: flex;
`;

export const Number = styled(Typography)`
    color: #4d4d4d;
    font-size: 24px;
    font-weight: 600;
    margin-right: 10px;
`;

export const Amount = styled(Typography)`
    color: #4d4d4d;
    font-size: 24px;
`;

export const Total = styled(Typography)`
    color: #b2b2b2;
    font-size: 16px;
`;

export const Cashback = withTheme(styled(Typography)`
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 16px;
`);

export const Radio = withTheme(styled.div<{ selected: boolean }>`
    width: 26px;
    height: 26px;
    border: 2px solid #e5e5e5;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;

    svg {
        display: none;
    }

    ${({ selected, theme }) =>
        selected &&
        css`
            border-color: ${theme.palette.primary.main};
            background: ${theme.palette.primary.main};

            svg {
                display: block;
            }
        `}
`);
