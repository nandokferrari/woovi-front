import { AppRoutes } from './AppRoutes';
import { Layout } from './components/Layout';

const App: React.FC = () => {
    return (
        <Layout>
            <AppRoutes />
        </Layout>
    );
};

export default App;
