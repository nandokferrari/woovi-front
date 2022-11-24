import * as React from 'react';
import styled from 'styled-components';
import { Footer } from './Footer';
import { Header } from './Header';

interface ILayoutProps {
    children: React.ReactNode;
}

const Container = styled.div``;

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <Container>
            <Header />
            {children}
            <Footer />
        </Container>
    );
};
