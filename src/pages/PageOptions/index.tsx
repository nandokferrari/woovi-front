import * as React from 'react';
import styled from 'styled-components';
import { CustomCheck } from '../../components/CustomCheck';
import { OptionsList } from '../../components/OptionsList';
import { Title } from '../../components/Title';
import { OptionContext } from '../../providers/OptionContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../components/Loader';

interface IPageOptionsProps {}

export interface IPaymentOption {
    installments: number;
    amount: number;
    total: number | null;
    cashback: number;
    banner: { title: string; message: string };
}

const Container = styled.div`
    text-align: center;
`;

const OptionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 34px;
`;

const OptionsPix = [
    {
        installments: 1,
        amount: 30500,
        total: null,
        cashback: 0.03,
        banner: {
            title: '🤑 R$ 300,00',
            message: 'de volta no seu Pix na hora',
        },
    },
];
const OptionsPixSplitted = [
    {
        installments: 2,
        amount: 15300,
        total: 30600,
    },
    {
        installments: 3,
        amount: 10196.66,
        total: 30620,
    },
    {
        installments: 4,
        amount: 7725,
        total: 30900,
        banner: {
            title: '-3% de juros:',
            message: 'Melhor opção de parcelamento',
        },
    },
    {
        installments: 5,
        amount: 6300,
        total: 31500,
    },
    {
        installments: 6,
        amount: 5283.33,
        total: 31699.98,
    },
];

export const PageOptions: React.FC<IPageOptionsProps> = () => {
    const { selectedItem } = React.useContext(OptionContext);
    const [showLoader, setShowLoader] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedItem) {
            setShowLoader(true);

            setTimeout(() => {
                navigate('/pix/2c1b951f356c4680b13ba1c9fc889c47');
            }, 3000);
        }

        return () => {
            setShowLoader(false);
        };
    }, [selectedItem]);

    return (
        <>
            <Loader show={showLoader} />
            <Container>
                <Title value="João, como você quer pagar?" />
                <OptionsWrapper>
                    <OptionsList label="Pix" items={OptionsPix} />
                    <OptionsList
                        label="Pix Parcelado"
                        items={OptionsPixSplitted}
                    />
                </OptionsWrapper>
            </Container>
        </>
    );
};
