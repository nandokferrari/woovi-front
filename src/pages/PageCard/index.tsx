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
import { Loader } from '../../components/Loader';
import { useForm } from 'react-hook-form';
import { RHFinput } from '../../components/RHF/input';

interface IPageCardProps {}

const Container = styled.div``;

export const PageCard: React.FC<IPageCardProps> = () => {
    const { selectedItem, handleSelection } = React.useContext(OptionContext);
    const { uuidTransaction } = useParams();
    const navigate = useNavigate();
    const [showLoader, setShowLoader] = React.useState(false);

    const { control, handleSubmit, watch, getValues } = useForm();

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
    const defaultValueSelect = installmentsLeftToPay;

    React.useEffect(() => {
        if (getValues('installments') !== undefined) {
            setSelectedInstallment(getValues('installments'));
        }
    }, [watch('installments')]);

    const InstallmentsList = [];

    for (let i = 0; i < OptionsPixSplitted.length; i++) {
        const pricePerInstallment = balance / (i + 1);
        InstallmentsList.push(`${i + 1}x de ${currency(pricePerInstallment)}`);
    }

    const handleClick = () => {
        handleSubmit(onValid)();
    };

    const onValid = (data: any) => {
        console.log(data);

        setShowLoader(true);
        setTimeout(() => setShowLoader(false), 3000);
    };

    return (
        <>
            <Loader show={showLoader} />
            <Container>
                <Title
                    value={`João, pague o restante em ${
                        selectedInstallment + 1
                    }x no cartão`}
                />
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <RHFinput
                            control={control}
                            name="name"
                            label="Nome completo"
                            autoComplete="name"
                            rules={{ required: true }}
                        />
                    </Grid>
                    <Grid xs={12}>
                        <RHFinput
                            control={control}
                            name="document"
                            label="CPF"
                            type="tel"
                            rules={{ required: true }}
                        />
                    </Grid>
                    <Grid xs={12}>
                        <RHFinput
                            control={control}
                            name="card-number"
                            label="Número do cartão"
                            type="tel"
                            autoComplete="cc-number"
                            rules={{ required: true }}
                        />
                    </Grid>
                    <Grid xs={6}>
                        <RHFinput
                            control={control}
                            name="expiry"
                            label="Vencimento"
                            rules={{ required: true }}
                        />
                    </Grid>
                    <Grid xs={6}>
                        <RHFinput
                            control={control}
                            name="cvv"
                            type="tel"
                            label="CVV"
                            autoComplete="cc-csc"
                            rules={{ required: true }}
                        />
                    </Grid>
                    <Grid xs={12}>
                        <RHFinput
                            name="installments"
                            control={control}
                            select
                            label="Parcelas"
                            defaultValue={defaultValueSelect || ''}
                        >
                            {InstallmentsList.map((item, index) => (
                                <MenuItem key={item} value={index}>
                                    {item}
                                </MenuItem>
                            ))}
                        </RHFinput>
                    </Grid>
                    <Grid xs={12}>
                        <Button onClick={handleClick}>Pagar</Button>
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
        </>
    );
};
