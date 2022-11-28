import * as React from 'react';
import { currency } from '../../functions';
import { HowItWorks } from '../HowItWorks';
import { IconChevron } from '../Icons/IconChevron';
import * as Styled from './styled';
import { HowItWorksLabel } from './styled';

interface ISummaryProps {
    value: number;
}

export const Summary: React.FC<ISummaryProps> = ({ value }) => {
    return (
        <Styled.Container>
            <Styled.TotalAmount>
                <Styled.Cet>
                    <Styled.CetLabel>CET: 0,5%</Styled.CetLabel>
                    <Styled.CetValue>Total: {currency(value)}</Styled.CetValue>
                </Styled.Cet>
                <HowItWorks />
            </Styled.TotalAmount>
        </Styled.Container>
    );
};
