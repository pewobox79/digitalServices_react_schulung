import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Homepage from "./pages/Homepage.tsx";
import AboutUsPage from "./pages/AboutUsPage.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import Impressum from "./pages/Impressum.tsx";

createRoot(document.getElementById('root')!).render(

        <MainLayout>
         <Impressum/>
        </MainLayout>
)
