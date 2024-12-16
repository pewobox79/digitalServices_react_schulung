import Header from "../compontents/Header";
import Footer from "../compontents/Footer";
import {ReactElement, ReactNode} from "react";

const MainLayout = ({children}:{children: ReactElement |ReactElement[] |ReactNode}) => {

    return <>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
    </>
}

export default MainLayout