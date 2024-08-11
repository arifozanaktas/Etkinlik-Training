import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SnackbarProvider } from 'notistack';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
            <SnackbarProvider>
                <App />
            </SnackbarProvider>
        </BrowserRouter>
    </LocalizationProvider>
);
