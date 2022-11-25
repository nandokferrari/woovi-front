import {
    Button,
    ButtonProps,
    css,
    styled,
    TextField,
    TextFieldProps,
} from '@mui/material';
import { withTheme } from '@mui/styles';
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
