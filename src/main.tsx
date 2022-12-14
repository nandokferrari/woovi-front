import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { OptionProvider } from './providers/OptionContext';
import { WooviTheme } from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={WooviTheme}>
            <StyledEngineProvider injectFirst>
                <OptionProvider>
                    <App />
                </OptionProvider>
            </StyledEngineProvider>
        </ThemeProvider>
    </React.StrictMode>
);
