import * as React from 'react';
import styled from 'styled-components';
import { QrCodeRender } from '../../components/QrCodeRender';
import { Expiration } from '../../components/Expiration';
import { Identifier } from '../../components/Identifier';
import { Summary } from '../../components/Summary';
import { useParams } from 'react-router-dom';
import { Title } from '../../components/Title';

interface IPagePixProps {}

const Container = styled.div`
    text-align: center;
`;

export const PagePix: React.FC<IPagePixProps> = () => {
    const { uuidTransaction } = useParams();

    return (
        <Container>
            <Title value="João, pague a entrada de R$ 15.300,00 pelo Pix" />
            <QrCodeRender />
            <Expiration value={'15/12/2022 - 08:17'} />
            <Summary />
            <Identifier value={uuidTransaction} />
        </Container>
    );
};
