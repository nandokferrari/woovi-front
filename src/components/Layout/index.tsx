import { withTheme } from '@mui/styles';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { WooviTheme } from '../../theme';
import { Footer } from './Footer';
import { Header } from './Header';

interface ILayoutProps {
    children: React.ReactNode;
}

const Container = styled('div')`
    padding: 0 ${WooviTheme.spacing(2)};
`;

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <Container>
            <Header />
            {children}
            <Footer />
        </Container>
    );
};
