import Link from "next/link";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

type HeaderProps = {
    isMobile: string
}

const Header = ({ isMobile }: HeaderProps) => {

    return (
        <header className={`full z-10 relative`}>
             <div className={` flex flex-row justify-between`}>
                <Link href={`/home`}>Logo</Link>
                { isMobile && <MobileMenu /> }
                { !isMobile && isMobile !== null && <DesktopMenu /> }
             </div>
        </header>

    )
}
export default Header;