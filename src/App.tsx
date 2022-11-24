import { Button, styled } from '@mui/material';

const CustomButton = styled(Button)`
    background: red;
`;

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Hello woovi, let's dale</h1>
            <CustomButton>
                material instalado corretamente com styled-components
            </CustomButton>
        </div>
    );
};

export default App;
