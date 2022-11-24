import { Button, ButtonProps, css, styled } from '@mui/material';

const CustomButton = styled(Button)<ButtonProps>``;

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Hello woovi, let's dale</h1>
            <CustomButton color="primary" variant="contained">
                material instalado corretamente com styled-components
            </CustomButton>
        </div>
    );
};

export default App;
