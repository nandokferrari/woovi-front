import * as React from 'react';
import { currency } from '../../functions';
import { OptionContext } from '../../providers/OptionContext';
import { IconCheck } from '../Icons/IconCheck';
import * as Styled from './styled';

interface IStepsProps {
    type: 'pix' | 'card';
}

export const Steps: React.FC<IStepsProps> = ({ type }) => {
    const { selectedItem } = React.useContext(OptionContext);

    const installmentsList = [];
    for (let i = 0; i < (selectedItem?.installments as number); i++) {
        let sentence = 'ª entrada no Pix';
        if (i > 0) {
            sentence = 'ª no cartão';
        }
        installmentsList.push(`${i + 1}${sentence}`);
    }

    return (
        <Styled.Container type={type}>
            {installmentsList.map((item) => (
                <Styled.Item key={item}>
                    <Styled.Bullet>
                        <IconCheck />
                    </Styled.Bullet>
                    <Styled.Label>{item}</Styled.Label>
                    <Styled.Amount>
                        {currency(selectedItem?.amount)}
                    </Styled.Amount>
                </Styled.Item>
            ))}
        </Styled.Container>
    );
};
