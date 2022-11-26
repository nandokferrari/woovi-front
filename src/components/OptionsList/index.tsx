import * as React from 'react';
import { IPaymentOption } from '../../pages/PageOptions';
import { OptionContext } from '../../providers/OptionContext';
import { OptionItem } from './OptionItem';
import * as Styled from './styled';

interface IOptionsListProps {
    label: string;
    items: IPaymentOption[];
}

export const OptionsList: React.FC<IOptionsListProps> = ({
    label = 'Label',
    items,
}) => {
    const { selectedItem } = React.useContext(OptionContext);

    return (
        <Styled.Container>
            <Styled.Label>{label}</Styled.Label>
            <Styled.List>
                {items.map((item) => (
                    <OptionItem
                        key={item.installments}
                        item={item}
                        selected={item.installments === selectedItem}
                    />
                ))}
            </Styled.List>
        </Styled.Container>
    );
};
