import React, { useState, useContext } from "react";

// ✅ Context -------------------------------------------------------------------------------------------
import { GlobalContext } from "../context/Store";

// ✅ Components -------------------------------------------------------------------------------------------
import { Outlet, Link } from "react-router-dom";
import { useCookies } from "react-cookie";

// ✅ Icons  -------------------------------------------------------------------------------------------
import { FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { ImCross } from "react-icons/im";

const Header = () => {
    // ✅ States / Variables --------------------------------------------------------------------------------
    const [cookies] = useCookies("");

    const { setEnableCart, isLogin, scrollToServices, scrollToPricing } = useContext(GlobalContext);

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

    return (
        <>
            <header
                className={`header_section fixed top-0 z-20 flex h-14 w-full items-center justify-between bg-secondary-color px-5 font-open-sans-font text-white shadow-2xl md:px-10`}
            >
                <div className="logo">
                    <p className="font-['Lobster'] text-4xl font-light tracking-wide text-white">Hostinger</p>
                </div>
                <div className="hidden gap-6 md:flex lg:gap-20">
                    <nav className="flex items-center gap-5 font-medium lg:gap-9">
                        <button
                            className="transition-all duration-500 hover:scale-105 hover:font-semibold"
                            onClick={() => scrollToPricing.current.scrollIntoView({ behavior: "smooth" })}
                        >
                            Web Hosting
                        </button>
                        <button
                            className="transition-all duration-500 hover:scale-105 hover:font-semibold"
                            onClick={() => scrollToServices.current.scrollIntoView({ behavior: "smooth" })}
                        >
                            Services
                        </button>
                        <p>Email</p>
                        <p>Domain</p>
                    </nav>
                    <div className="login_cart flex h-full items-center gap-8">
                        <Link to="/login">
                            <button className="animate_on_button_hover relative rounded-sm border-2 border-white py-[2px] px-7 font-rubik-font font-semibold  hover:border-transparent">
                                <span className="absolute top-0 left-0 bg-white"></span>
                                <span className="absolute bottom-0 right-0 bg-white"></span>
                                <span className="absolute bottom-0 left-0 bg-white"></span>
                                <span className="absolute top-0 right-0 bg-white"></span>
                                {isLogin === true ? "Logged In" : "Log in"}
                            </button>
                        </Link>

                        <button
                            onClick={() => {
                                document.title = "Cart | Hostinger";
                                setEnableCart(true);
                            }}
                            className="flex items-center gap-2 font-semibold transition-all duration-500 hover:scale-110"
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
                                <button
                                    onClick={() => {
                                        handleCloseMenuOnMobile();
                                        scrollToPricing.current.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className={`${openMenuOnMobile && "slide-in-right-4s"}`}
                                >
                                    Web Hosting
                                </button>
                                <button
                                    onClick={() => {
                                        handleCloseMenuOnMobile();
                                        scrollToServices.current.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className={`${openMenuOnMobile && "slide-in-right-5s"}`}
                                >
                                    Services
                                </button>
                                <p className={`${openMenuOnMobile && "slide-in-right-6s"}`}>Email</p>
                                <p className={`${openMenuOnMobile && "slide-in-right-7s"}`}>Domain</p>
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
                                        handleCloseMenuOnMobile();
                                        document.title = "Cart | Hostinger";

                                        setEnableCart(true);
                                    }}
                                    className={`flex items-center gap-2 font-semibold transition-all duration-200 hover:scale-110 ${
                                        openMenuOnMobile && "slide-in-right-7s"
                                    } hover:scale-105`}
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
