import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

import "./main.scss"
import {ThemeProvider} from "./utils/ThemeProvider";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
);