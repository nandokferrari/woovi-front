import { ButtonProps, ButtonPropsColorOverrides } from '@mui/material';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IconCopy } from '../Icons/IconCopy';
import * as Styled from './styled';

interface IQrCodeRenderProps {
    value?: string;
}

interface IButtonData {
    text: string;
    color: ButtonProps['color'];
}

const buttonInitialState = {
    color: 'secondary' as ButtonProps['color'],
    text: 'Clique aqui para copiar QR CODE',
};

const buttonClickedState = {
    color: 'primary' as ButtonProps['color'],
    text: 'Copiado com sucesso!',
};

export const QrCodeRender: React.FC<IQrCodeRenderProps> = ({ value }) => {
    const navigate = useNavigate();
    const { uuidTransaction } = useParams();
    const [buttonData, setButtonData] =
        React.useState<IButtonData>(buttonInitialState);

    const handleClick = () => {
        setButtonData(buttonClickedState);

        setTimeout(() => {
            setButtonData(buttonInitialState);
        }, 2000);

        setTimeout(() => {
            navigate(`/card/${uuidTransaction}`);
        }, 4000);
    };

    // todo, show loader while loads qr code image

    return (
        <Styled.Container>
            <Styled.Image>
                <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&amp;data=Woovi, quero trabalhar com vocês \o/"
                    alt=""
                />
            </Styled.Image>
            <Styled.CopyButton
                fullWidth={false}
                onClick={handleClick}
                color={buttonData.color}
            >
                <span>{buttonData.text}</span>
                <IconCopy />
            </Styled.CopyButton>
        </Styled.Container>
    );
};
