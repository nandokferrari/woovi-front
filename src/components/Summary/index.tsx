import * as React from 'react';
import { currency } from '../../functions';
import { IconChevron } from '../Icons/IconChevron';
import * as Styled from './styled';
import { HowItWorksLabel } from './styled';

interface ISummaryProps {
    value: number;
}

// todo: make howitworks functional

export const Summary: React.FC<ISummaryProps> = ({ value }) => {
    return (
        <Styled.Container>
            <Styled.TotalAmount>
                <Styled.Cet>
                    <Styled.CetLabel>CET: 0,5%</Styled.CetLabel>
                    <Styled.CetValue>Total: {currency(value)}</Styled.CetValue>
                </Styled.Cet>
                <Styled.HowItWorks>
                    <Styled.HowItWorksLabel>
                        Como funciona?
                    </Styled.HowItWorksLabel>
                    <Styled.ArrowIcon />
                </Styled.HowItWorks>
            </Styled.TotalAmount>
        </Styled.Container>
    );
};
