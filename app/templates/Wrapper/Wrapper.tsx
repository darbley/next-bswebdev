import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import { ReactNode } from "react";

type WrapperProps = {
    children: ReactNode;
    addClass?: string;
}

const Wrapper = ({children, addClass} : WrapperProps) => {
    return (
        <div className={addClass}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default Wrapper;