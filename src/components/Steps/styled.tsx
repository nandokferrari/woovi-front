import { Typography, Box } from '@mui/material';
import { withTheme } from '@mui/styles';
import styled, { css } from 'styled-components';

export const Bullet = styled(Box)`
    width: 16px;
    height: 16px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    position: relative;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    background: white;

    &::after {
        content: '';
        position: absolute;
        width: 2px;
        height: 50px;
        background: #e5e5e5;
        top: 0;
        z-index: -1;
    }

    svg {
        width: 8px;
        height: 8px;
    }
`;

export const Item = styled(Box)`
    display: flex;
    align-items: center;

    &:last-child {
        ${Bullet}::after {
            display: none;
        }
    }
`;

export const Container = withTheme(styled.div<{ type: 'pix' | 'card' }>`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 30px;

    ${({ theme, type }) => {
        if (type === 'pix') {
            return css`
                ${Item}:first-child {
                    ${Bullet} {
                        border-color: ${theme.palette.primary.main};
                    }
                }
            `;
        }
        if (type === 'card') {
            return css`
                ${Item}:first-child {
                    ${Bullet} {
                        border-color: ${theme.palette.primary.main};
                        background-color: ${theme.palette.primary.main};
                    }
                }
                ${Bullet} {
                    border-color: ${theme.palette.primary.main};
                }
            `;
        }
    }}
`);

export const Label = styled(Typography)`
    font-weight: 500;
    font-size: 18px;

    color: #4d4d4d;
`;

export const Amount = styled(Typography)`
    font-weight: 600;
    font-size: 18px;

    color: #4d4d4d;
    margin-left: auto;
`;
