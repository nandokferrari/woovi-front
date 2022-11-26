import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Expiration } from '../../components/Expiration';
import { Identifier } from '../../components/Identifier';
import { Summary } from '../../components/Summary';
import { Title } from '../../components/Title';
import { OptionContext } from '../../providers/OptionContext';

interface IPageCardProps {}

const Container = styled.div`
    text-align: center;
`;

export const PageCard: React.FC<IPageCardProps> = () => {
    const { selectedItem } = React.useContext(OptionContext);
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

    const installmentsLeftToPay = (selectedItem?.installments as number) - 1;

    return (
        <Container>
            <Title
                value={`João, pague o restante em ${installmentsLeftToPay}x no cartão`}
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
                    <TextField label="Parcelas" />
                </Grid>
                <Grid xs={12}>
                    <Button>Pagar</Button>
                </Grid>
            </Grid>
            <Expiration value={'15/12/2022 - 08:17'} />
            <Summary />
            <Identifier value={uuidTransaction} />
        </Container>
    );
};
