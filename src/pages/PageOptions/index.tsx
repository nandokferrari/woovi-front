import * as React from 'react';
import styled from 'styled-components';
import { OptionsList } from '../../components/OptionsList';
import { Title } from '../../components/Title';
import { OptionContext } from '../../providers/OptionContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { OptionsPix, OptionsPixSplitted } from '../../providers/OptionsData';

interface IPageOptionsProps {}

const Container = styled.div`
    text-align: center;
`;

const OptionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 34px;
`;

export const PageOptions: React.FC<IPageOptionsProps> = () => {
    const { selectedItem } = React.useContext(OptionContext);
    const [showLoader, setShowLoader] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedItem) {
            setTimeout(() => {
                setShowLoader(true);
            }, 500);

            setTimeout(() => {
                navigate('/pix/2c1b951f356c4680b13ba1c9fc889c47');
            }, 3500);
        }

        return () => {
            setShowLoader(false);
        };
    }, [selectedItem]);

    return (
        <>
            <Loader show={showLoader} />
            <Container>
                <Title value="João, como você quer pagar?" />
                <OptionsWrapper>
                    <OptionsList label="Pix" items={OptionsPix} />
                    <OptionsList
                        label="Pix Parcelado"
                        items={OptionsPixSplitted}
                    />
                </OptionsWrapper>
            </Container>
        </>
    );
};
