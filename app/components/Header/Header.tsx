import Link from "next/link";

const Header = () => {

    return (
        <header className={`full z-10 relative`}>
             <div className={` flex flex-row justify-between`}>
                <Link href={`/home`}>Logo</Link>
                <nav >
                    <ul className={` flex flex-row`}>
                        <li>home</li>
                        <li>work</li>
                        <li>contact</li>
                    </ul>
                </nav>
             </div>
        </header>

    )
}
export default Header;