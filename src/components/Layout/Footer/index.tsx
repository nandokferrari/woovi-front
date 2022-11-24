import * as React from 'react';
import styled from 'styled-components';

interface IFooterProps {}

const Container = styled.footer``;

export const Footer: React.FC<IFooterProps> = () => {
    return <Container>footer</Container>;
};
