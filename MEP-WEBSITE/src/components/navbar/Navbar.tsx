import "../../styles/Tbox.css";
import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import NavMenu from "./NavMenu";
//import hold from "../../hooks/Hold";

const Navbar = () => {
    // const [isMobile, setIsMobile] = hold<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // useEffect(() => {
    //     const animated = () => {
    //         if (window.scrollY > 175) {
    //             setBackground(true);
    //         } else {
    //             setBackground(false);
    //         }
    //     };
    //     window.addEventListener("scroll", animated);
    //     return () => {
    //         window.removeEventListener("scroll", animated);
    //     };
    // }, []);

    return (
        <nav className={`w-full flex justify-end items-center sticky top-0 z-50 bg-nonBlack`}>
            <HamburgerMenu onclick={() => setIsOpen((prev) => !prev)} />
            {isOpen && <NavMenu />}
        </nav>
    );
};

export default Navbar;
