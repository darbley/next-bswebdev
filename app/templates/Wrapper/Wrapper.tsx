'use client';
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import useIsMobileView from "@/app/hooks/useIsMobileView";
import { ReactNode, useEffect, useState } from "react";

type WrapperProps = {
    children: ReactNode;
    addClass?: string;
}

const Wrapper = ({children, addClass} : WrapperProps) => {
    const isMobileView = useIsMobileView();
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        setIsMobile(isMobileView)
        //console.log('is mobile ',isMobileView + ' ' + isMobile);
        return () => {}
      },[isMobileView]);
      
    return (
        <div className={addClass}>
            <Header isMobile={isMobile} />
            {children}
            <Footer />
        </div>
    )
}
export default Wrapper;