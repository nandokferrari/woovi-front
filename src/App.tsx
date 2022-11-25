import { styled, TextField, TextFieldProps } from '@mui/material';
import { AppRoutes } from './AppRoutes';
import { Layout } from './components/Layout';

const CustomTextField = styled(TextField)<TextFieldProps>``;

const App: React.FC = () => {
    return (
        <Layout>
            <AppRoutes />
        </Layout>
    );
};

export default App;
