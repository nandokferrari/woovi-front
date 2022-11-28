import * as React from 'react';
import { currency } from '../../functions';
import { OptionContext } from '../../providers/OptionContext';
import { IconCheck } from '../Icons/IconCheck';
import * as Styled from './styled';

interface IStepsProps {
    type: 'pix' | 'card';
    selectedInstallment?: number;
    balance?: number;
}

export const Steps: React.FC<IStepsProps> = ({
    type,
    selectedInstallment,
    balance,
}) => {
    const { selectedItem } = React.useContext(OptionContext);
    let installmentsList = ['1ª entrada no Pix'];
    let amount = 0;

    if (!selectedInstallment) {
        // page pix
        for (let i = 0; i < (selectedItem?.installments as number) - 1; i++) {
            installmentsList.push(`${i + 2}ª no cartão`);
        }
        amount = selectedItem?.amount as number;
    } else {
        // page card
        for (let i = 0; i < selectedInstallment + 1; i++) {
            installmentsList.push(`${i + 2}ª no cartão`);
        }
        amount = (balance as number) / (selectedInstallment + 1);
    }

    return (
        <Styled.Container type={type}>
            {installmentsList.map((item, index) => (
                <Styled.Item key={item}>
                    <Styled.Bullet>
                        <IconCheck />
                    </Styled.Bullet>
                    <Styled.Label>{item}</Styled.Label>
                    <Styled.Amount>
                        {index === 0
                            ? currency(selectedItem?.amount)
                            : currency(amount)}
                    </Styled.Amount>
                </Styled.Item>
            ))}
        </Styled.Container>
    );
};
