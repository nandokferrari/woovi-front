import * as React from 'react';
import { IPaymentOption } from '../../../pages/PageOptions';
import { OptionContext } from '../../../providers/OptionContext';
import { IconCheck } from '../../Icons/IconCheck';
import { Flag } from './Flag';
import * as Styled from './styled';

interface IOptionItemProps {
    selected?: boolean;
    item: IPaymentOption;
}

const currency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
};

export const OptionItem: React.FC<IOptionItemProps> = ({
    selected = false,
    item,
}) => {
    const { handleSelection } = React.useContext(OptionContext);

    return (
        <Styled.Container
            selected={selected}
            onClick={() => handleSelection(item.installments)}
        >
            <Styled.Values>
                <Styled.Info>
                    <Styled.Installment>
                        <Styled.Number>{item.installments}x</Styled.Number>
                        <Styled.Amount>{currency(item.amount)}</Styled.Amount>
                    </Styled.Installment>
                    {item.total ? (
                        <Styled.Total>
                            Total: {currency(item.total as number)}
                        </Styled.Total>
                    ) : (
                        <Styled.Cashback>
                            Ganhe <b>{item.cashback * 100}%</b> de Cashback
                        </Styled.Cashback>
                    )}
                </Styled.Info>
                <Styled.Radio selected={selected}>
                    <IconCheck />
                </Styled.Radio>
            </Styled.Values>
            {item.banner && (
                <Flag title={item.banner.title} message={item.banner.message} />
            )}
        </Styled.Container>
    );
};
