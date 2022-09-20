import React, { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";

// ✅ Icons  -------------------------------------------------------------------------------------------
import { FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { ImCross } from "react-icons/im";

import { Outlet, Link } from "react-router-dom";
import { GlobalContext } from "../context/Store";

const Header = () => {
    // ✅ States / Variables --------------------------------------------------------------------------------
    const [cookies] = useCookies("");

    const { setEnableCart } = useContext(GlobalContext);

    const [headerAppearence, setHeaderAppearence] = useState("");
    const [openMenuOnMobile, setOpenMenuOnMobile] = useState(false);
    const [closeMenu, setCloseMenu] = useState(false);

    // ✅ Functions / Hooks --------------------------------------------------------------------------------
    function handleOpenMenuOnMobile() {
        document.body.style.overflow = "hidden";

        setCloseMenu(false);
        setOpenMenuOnMobile(true);
    }
    function handleCloseMenuOnMobile() {
        document.body.style.overflow = "visible";

        setCloseMenu(true);
        setTimeout(() => {
            setOpenMenuOnMobile(false);
        }, 500);
    }

    function listenScrollEvent() {
        window.scrollY > 55 ? setHeaderAppearence("bg-secondary-color") : setHeaderAppearence("");
    }

    // ✅ UseEffects --------------------------------------------------------------------------------
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <>
            <header
                className={`header_section fixed top-0 z-20 flex h-14 w-full items-center justify-between ${headerAppearence} px-5 font-open-sans-font text-white transition-all duration-500 md:px-10`}
            >
                <div className="logo">
                    <p className="text-1.5xl font-bold text-white md:text-2xl">Hostinger</p>
                </div>
                <div className="hidden gap-6 md:flex lg:gap-20 ">
                    <nav className="flex items-center gap-5 font-medium lg:gap-9">
                        <p>Web Hosting</p>
                        <p>Services</p>
                        <p>Email</p>
                        <p>Domain</p>
                    </nav>
                    <div className="login_cart flex h-full items-center gap-8">
                        <Link to="/login">
                            <button className="rounded-full border-2 border-white py-[2px] px-7 font-rubik-font font-semibold transition-all duration-300 hover:bg-white hover:text-secondary-color">
                                {cookies?.login?.isLogin === true ? "Logged In" : "Log in"}
                            </button>
                        </Link>
                        <button
                            onClick={() => {
                                setEnableCart(true);
                            }}
                            className="flex items-center gap-2 font-semibold transition-all duration-200 hover:scale-110"
                        >
                            <FiShoppingCart className="text-3xl" />
                            Cart
                        </button>
                    </div>
                </div>

                <div className="block md:hidden">
                    <HiMenuAlt3 className="block cursor-pointer text-4xl md:hidden" onClick={handleOpenMenuOnMobile} />
                    {openMenuOnMobile && (
                        <div
                            className={`fixed left-0 top-0 h-screen w-screen bg-secondary-color ${
                                openMenuOnMobile && !closeMenu && "slide-in-right"
                            } ${closeMenu && "slide-out-right"}`}
                        >
                            <div className="flex h-14 w-full items-center justify-end px-5 text-white">
                                <ImCross className="mr-2 cursor-pointer text-1.5xl" onClick={handleCloseMenuOnMobile} />
                            </div>
                            <div className="navs_links box-border flex h-full flex-col items-center gap-10 pt-10 text-2xl font-semibold text-white">
                                <p className={`${openMenuOnMobile && "slide-in-right-4s"}`}>Home</p>
                                <p className={`${openMenuOnMobile && "slide-in-right-5s"}`}>About Me</p>
                                <p className={`${openMenuOnMobile && "slide-in-right-6s"}`}>Contact</p>
                                <p className={`${openMenuOnMobile && "slide-in-right-7s"}`}>Services</p>
                                <Link to="/login">
                                    <button
                                        className={`rounded-full border-2 border-white py-[2px] px-7 font-rubik-font font-semibold transition-all duration-300 hover:bg-white hover:text-secondary-color ${
                                            openMenuOnMobile && "slide-in-right-7s"
                                        }`}
                                    >
                                        {cookies?.login?.isLogin === true ? "Logged In" : "Log in"}
                                    </button>
                                </Link>
                                <button
                                    onClick={() => {
                                        setEnableCart(true);
                                    }}
                                    className={`flex items-center gap-2 font-semibold transition-all duration-200 hover:scale-110 ${
                                        openMenuOnMobile && "slide-in-right-7s"
                                    }`}
                                >
                                    <FiShoppingCart className="text-3xl" />
                                    Cart
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>
            <Outlet />
        </>
    );
};

export default Header;
