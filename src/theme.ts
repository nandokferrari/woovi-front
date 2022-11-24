import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const gridUnit = 8;
export const WooviTheme = createTheme({
    typography: {
        fontFamily: 'Nunito',
    },
    palette: {
        primary: {
            main: '#03D69D',
        },
        secondary: {
            main: '#133A6F',
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '18px',
                    fontWeight: '400',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                fullWidth: true,
            },
            styleOverrides: {
                root: {},
            },
        },
    },
});
