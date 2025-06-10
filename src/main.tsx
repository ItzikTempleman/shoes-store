import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {Layout} from "./Components/Layout/Layout.tsx";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import {muiTheme} from "./Theme/Theme.ts";



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={muiTheme}>
        <Layout/>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>,
)
