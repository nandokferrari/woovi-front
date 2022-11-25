import * as React from 'react';
import styled from 'styled-components';
import { LogoHeader } from '../../Logo';
import * as Styled from './styled';

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
    return (
        <Styled.Container>
            <LogoHeader />
        </Styled.Container>
    );
};
