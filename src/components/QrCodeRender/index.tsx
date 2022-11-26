import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IconCopy } from '../Icons/IconCopy';
import * as Styled from './styled';

interface IQrCodeRenderProps {
    value?: string;
}

export const QrCodeRender: React.FC<IQrCodeRenderProps> = ({ value }) => {
    const navigate = useNavigate();
    const { uuidTransaction } = useParams();

    const handleClick = () => {
        setTimeout(() => {
            navigate(`/card/${uuidTransaction}`);
        }, 3000);
    };

    // todo, animation on click saying "Código copiado!"

    return (
        <Styled.Container>
            <Styled.Image>
                <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&amp;data=Woovi, quero trabalhar com vocês \o/"
                    alt=""
                />
            </Styled.Image>
            <Styled.CopyButton fullWidth={false} onClick={handleClick}>
                <span>Clique aqui para copiar QR CODE</span>
                <IconCopy />
            </Styled.CopyButton>
        </Styled.Container>
    );
};
