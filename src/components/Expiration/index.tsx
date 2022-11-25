import * as React from 'react';
import * as Styled from './styled';

interface IExpirationProps {
    value?: string;
}

export const Expiration: React.FC<IExpirationProps> = ({ value }) => {
    return (
        <Styled.Container>
            <Styled.Label>Prazo de Pagamento:</Styled.Label>
            <Styled.Value>{value}</Styled.Value>
        </Styled.Container>
    );
};
