import * as React from 'react';
import styled from 'styled-components';
import { QrCodeRender } from '../../components/QrCodeRender';
import { Expiration } from '../../components/Expiration';
import { Identifier } from '../../components/Identifier';
import { Summary } from '../../components/Summary';
import { useParams, useNavigate } from 'react-router-dom';
import { Title } from '../../components/Title';
import { OptionContext } from '../../providers/OptionContext';
import { currency } from '../../functions';
import { Steps } from '../../components/Steps';

interface IPagePixProps {}

const Container = styled.div`
    text-align: center;
`;

export const PagePix: React.FC<IPagePixProps> = () => {
    const { selectedItem } = React.useContext(OptionContext);
    const { uuidTransaction } = useParams();
    const navigate = useNavigate();

    // redirect if there is no payment option selected
    React.useEffect(() => {
        if (selectedItem === null) {
            navigate('/');
        }
    }, []);

    const amountToPay = currency(selectedItem?.amount);

    const titleText =
        (selectedItem?.installments as number) === 1
            ? `João, pague agora o total de ${amountToPay} pelo Pix`
            : `João, pague a entrada de ${amountToPay} pelo Pix`;

    return (
        <Container>
            <Title value={titleText} />
            <QrCodeRender />
            <Expiration value={'15/12/2022 - 08:17'} />
            {(selectedItem?.installments as number) > 1 && <Steps type="pix" />}
            <Summary value={selectedItem?.total as number} />
            <Identifier value={uuidTransaction} />
        </Container>
    );
};
