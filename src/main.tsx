import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {MainLayout} from "./Components/MainLayout/MainLayout.tsx";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import {muiTheme} from "./Theme/Theme.ts";
import "notyf/notyf.min.css";
import {interceptor} from "./Utils/Interceptor.ts";
import {Provider} from "react-redux";
import {store} from "./Redux/Store.ts";
interceptor.create();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={muiTheme}>
        <MainLayout/>
            </ThemeProvider>
        </BrowserRouter>
        </Provider>
    </StrictMode>,
)
