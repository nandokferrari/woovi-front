import * as React from 'react';
import styled from 'styled-components';

interface IHeaderProps {}

const Container = styled.header``;

export const Header: React.FC<IHeaderProps> = () => {
    return <Container>header</Container>;
};
