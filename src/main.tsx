import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {MainLayout} from "./Components/MainLayout/MainLayout.tsx";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import {muiTheme} from "./Theme/Theme.ts";
import "notyf/notyf.min.css";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={muiTheme}>
        <MainLayout/>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>,
)
