import {
    Button,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Expiration } from '../../components/Expiration';
import { Identifier } from '../../components/Identifier';
import { Summary } from '../../components/Summary';
import { Title } from '../../components/Title';
import { OptionContext } from '../../providers/OptionContext';
import { Steps } from '../../components/Steps';
import { OptionsPixSplitted } from '../../providers/OptionsData';
import { currency } from '../../functions';

interface IPageCardProps {}

const Container = styled.div``;

export const PageCard: React.FC<IPageCardProps> = () => {
    const { selectedItem, handleSelection } = React.useContext(OptionContext);
    const { uuidTransaction } = useParams();
    const navigate = useNavigate();

    // redirect if there is no payment option selected
    React.useEffect(() => {
        if (selectedItem === null) {
            navigate('/');
        }
    }, []);

    // todo control form state with rhf
    // todo implement mask feature on input fields

    const initialPayment = selectedItem?.amount as number;
    const totalAmount = selectedItem?.total as number;
    const balance = totalAmount - initialPayment;

    const installmentsLeftToPay = (selectedItem?.installments as number) - 2;
    const [selectedInstallment, setSelectedInstallment] = React.useState(
        installmentsLeftToPay
    );

    const changeInstallment = (e: any) => {
        const newSelected = OptionsPixSplitted[e.target.value as number];
        setSelectedInstallment(e.target.value as number);
        // handleSelection(newSelected);
    };

    const InstallmentsList = [];

    for (let i = 0; i < OptionsPixSplitted.length; i++) {
        const pricePerInstallment = balance / (i + 1);
        InstallmentsList.push(`${i + 1}x de ${currency(pricePerInstallment)}`);
    }

    return (
        <Container>
            <Title
                value={`João, pague o restante em ${
                    selectedInstallment + 1
                }x no cartão`}
            />
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <TextField label="Nome completo" autoComplete="name" />
                </Grid>
                <Grid xs={12}>
                    <TextField label="CPF" type="tel" />
                </Grid>
                <Grid xs={12}>
                    <TextField
                        label="Número do cartão"
                        autoComplete="cc-number"
                        type="tel"
                    />
                </Grid>
                <Grid xs={6}>
                    <TextField label="Vencimento" />
                </Grid>
                <Grid xs={6}>
                    <TextField type="tel" label="CVV" autoComplete="cc-csc" />
                </Grid>
                <Grid xs={12}>
                    <TextField
                        select
                        label="Parcelas"
                        onChange={changeInstallment}
                        value={selectedInstallment}
                    >
                        {InstallmentsList.map((item, index) => (
                            <MenuItem key={item} value={index}>
                                {item}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid xs={12}>
                    <Button>Pagar</Button>
                </Grid>
            </Grid>
            <Expiration value={'15/12/2022 - 08:17'} />
            {(selectedItem?.installments as number) > 1 && (
                <Steps
                    type="card"
                    balance={balance}
                    selectedInstallment={selectedInstallment}
                />
            )}
            <Summary value={totalAmount} />

            <Identifier value={uuidTransaction} />
        </Container>
    );
};
