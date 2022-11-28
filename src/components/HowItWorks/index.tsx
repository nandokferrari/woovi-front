import * as React from 'react';
import { IconChevron } from '../Icons/IconChevron';
import * as Styled from './styled';

export const HowItWorks = () => {
    const [show, setShow] = React.useState(false);

    const handleToggle = () => {
        setShow((value) => !value);
    };

    return (
        <Styled.Container onClick={handleToggle}>
            <Styled.Header>
                <Styled.Label>Como funciona?</Styled.Label>
                <Styled.IconWrapper rotate={show}>
                    <IconChevron />
                </Styled.IconWrapper>
            </Styled.Header>
            {show && (
                <Styled.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc eget. Consectetur adipiscing elit. Nunc eget.
                </Styled.Text>
            )}
        </Styled.Container>
    );
};
