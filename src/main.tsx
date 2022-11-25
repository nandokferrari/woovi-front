import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WooviTheme } from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={WooviTheme}>
            <StyledEngineProvider injectFirst>
                <App />
            </StyledEngineProvider>
        </ThemeProvider>
    </React.StrictMode>
);
