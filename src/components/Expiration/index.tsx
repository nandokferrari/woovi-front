import * as React from 'react';
import * as Styled from './styled';

interface IIdentifierProps {
    value?: string;
}

export const Identifier: React.FC<IIdentifierProps> = ({ value }) => {
    return (
        <Styled.Container>
            <Styled.Label>Prazo de Pagamento:</Styled.Label>
            <Styled.Value>{value}</Styled.Value>
        </Styled.Container>
    );
};
