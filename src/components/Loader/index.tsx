import { Typography } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import { WooviTheme } from '../../theme';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    /* background: rgba(3, 214, 157, 0.4); */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
        width: 80px;
        margin-left: 12px;
    }
`;

const Text = styled(Typography)`
    color: white;
    font-size: 24px;
`;

export const Loader = ({
    show = false,
    label,
}: {
    show: boolean;
    label?: string;
}) => {
    if (!show) {
        return <></>;
    }

    const theme = WooviTheme;

    return (
        <Container>
            <svg
                version="1.1"
                id="L4"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 70 70"
                enable-background="new 0 0 0 0"
                xmlSpace="preserve"
            >
                <circle
                    fill={theme.palette.primary.main}
                    stroke="none"
                    cx="6"
                    cy="50"
                    r="6"
                >
                    <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.1"
                    />
                </circle>
                <circle
                    fill={theme.palette.primary.main}
                    stroke="none"
                    cx="26"
                    cy="50"
                    r="6"
                >
                    <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.2"
                    />
                </circle>
                <circle
                    fill={theme.palette.primary.main}
                    stroke="none"
                    cx="46"
                    cy="50"
                    r="6"
                >
                    <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.3"
                    />
                </circle>
            </svg>
            <Text>{label}</Text>
        </Container>
    );
};
