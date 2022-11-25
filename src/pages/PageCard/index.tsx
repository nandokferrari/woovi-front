import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Expiration } from '../../components/Expiration';
import { Identifier } from '../../components/Identifier';
import { Summary } from '../../components/Summary';
import { Title } from '../../components/Title';

interface IPageCardProps {}

const Container = styled.div`
    text-align: center;
`;

export const PageCard: React.FC<IPageCardProps> = () => {
    const { uuidTransaction } = useParams();

    return (
        <Container>
            <Title value="João, pague o restante em 1x no cartão" />
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <TextField label="Nome completo" />
                </Grid>
                <Grid xs={12}>
                    <TextField label="CPF" />
                </Grid>
                <Grid xs={12}>
                    <TextField label="Número do cartão" />
                </Grid>
                <Grid xs={6}>
                    <TextField label="Vencimento" />
                </Grid>
                <Grid xs={6}>
                    <TextField label="CVV" />
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
