import * as React from 'react';
import { IconShield } from '../../Icons/IconShield';
import { LogoFooter } from '../../Logo';
import * as Styled from './styled';

interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = () => {
    return (
        <Styled.Container>
            <IconShield />
            <Styled.Text>Pagamento 100% seguro via:</Styled.Text>
            <LogoFooter />
        </Styled.Container>
    );
};
