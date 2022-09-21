import React, { useContext, useEffect, useState } from "react";

// ✅ Context --------------------------------------------------------------------------------------
import { GlobalContext } from "../context/Store";

// ✅ Components --------------------------------------------------------------------------------------
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { notifySuccess, notifyError } from "./../animations/TostifyFunctions";

// ✅ icons --------------------------------------------------------------------------------------
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Login = () => {
    // ✅ States / Variables --------------------------------------------------------------------------------------
    const navigate = useNavigate();

    const { isLogin, setIsLogin, setCartItems } = useContext(GlobalContext);
    const [cookies, setCookie, removeCookie] = useCookies("");

    const [loginOrSignup, setLoginOrSignup] = useState("login");
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    // ✅ Functions / Hooks --------------------------------------------------------------------------------------
    function handleOnChange(evt) {
        const { name, value, type, checked } = evt.target;
        setLoginData((prev) => {
            return { ...prev, [name]: type === "checkbox" ? checked : value };
        });
    }

    function handleLoginSignup(evt) {
        document.title = "Hostinger";

        evt.preventDefault();
        // Do login after checking Credentials and update cookies and cart
        if (loginOrSignup === "login") {
            if (cookies?.login?.email === loginData.email && cookies?.login?.password === loginData.password) {
                setIsLogin(true);
                setCookie("isLogin", true, {
                    path: "/",
                });
                if (cookies?.cart?.length > 0) setCartItems(cookies?.cart);
                document.body.style.overflow = "visible";
                navigate("/");
            } else notifyError("Wrong Credentials");
        } else {
            // else do Signup
            setCookie(
                "login",
                { ...loginData },
                {
                    path: "/",
                }
            );
            setCookie("isLogin", true, {
                path: "/",
            });
            setIsLogin(true);
            document.body.style.overflow = "visible";
            navigate("/");
        }
        setLoginData({
            email: "",
            password: "",
        });
    }

    function handleLogout() {
        document.title = "Hostinger";
        document.body.style.overflow = "visible";

        setCookie("isLogin", false, {
            path: "/",
        });
        setIsLogin(false);
        setCartItems([]);
        notifySuccess("Log out Successfull");
        navigate("/");
    }

    useEffect(() => {
        document.title = "Login | Hostinger";
    }, []);

    return (
        <div>
            <div
                className={`header_section fixed top-0 z-50 flex h-14 w-full items-center bg-secondary-color px-5 font-open-sans-font text-lg font-bold text-white transition-all duration-500 md:justify-center md:px-10 md:text-2xl `}
            >
                <div
                    onClick={() => {
                        document.body.style.overflow = "visible";
                    }}
                >
                    <Link to="/">
                        <button
                            onClick={() => {
                                document.title = "Hostinger";
                            }}
                        >
                            <BsFillArrowLeftCircleFill className="absolute left-5 top-5 md:top-4" />
                        </button>
                    </Link>
                </div>
                <p className="ml-11 md:ml-0">Login / Signup</p>
                {isLogin && (
                    <button
                        onClick={handleLogout}
                        className="animate_on_button_hover absolute right-6 top-4 rounded-sm border-2 border-white px-5 py-0 text-base hover:border-transparent  md:top-2 md:px-7 md:py-1 md:text-lg"
                    >
                        <span className="absolute top-0 left-0 bg-white"></span>
                        <span className="absolute bottom-0 right-0 bg-white"></span>
                        <span className="absolute bottom-0 left-0 bg-white"></span>
                        <span className="absolute top-0 right-0 bg-white"></span>
                        Logout
                    </button>
                )}
            </div>
            <div className="section_background_gradient flex h-screen w-full justify-center pt-9 md:pt-16">
                <div className="mt-20 h-auto w-[86%] rounded-xl bg-white px-6 py-10 font-open-sans-font shadow-2xl md:w-96">
                    <form>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="mb-2 block font-open-sans-font text-base font-semibold text-gray-900 dark:text-gray-300"
                            >
                                Enter email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-4 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                                placeholder="email@gmail.com"
                                required={true}
                                name="email"
                                value={loginData.email}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="mb-6 mt-10">
                            <label
                                htmlFor="password"
                                className="mb-2 block font-open-sans-font text-base font-semibold text-gray-900 dark:text-gray-300"
                            >
                                Enter password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-4 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                required={true}
                                name="password"
                                value={loginData.password}
                                onChange={handleOnChange}
                            />
                        </div>

                        <div className="mt-6 flex w-full justify-end">
                            <button
                                onClick={(evt) => handleLoginSignup(evt)}
                                type="submit"
                                className="animate_on_button_hover relative mt-5 w-full rounded-sm bg-secondary-color px-10 py-2 text-center font-rubik-font text-base font-semibold text-white outline-none hover:bg-white hover:text-secondary-color sm:w-auto"
                            >
                                <span className="absolute top-0 left-0 bg-secondary-color"></span>
                                <span className="absolute bottom-0 right-0 bg-secondary-color"></span>
                                <span className="absolute bottom-0 left-0 bg-secondary-color"></span>
                                <span className="absolute top-0 right-0 bg-secondary-color"></span>
                                {loginOrSignup === "login" ? "Login" : "Signup"}
                            </button>
                        </div>
                        <p className="my-6 mt-10 flex w-full justify-center font-roboto-font">
                            {loginOrSignup === "login" ? "Don't have Account?" : "Already have Account?"}

                            <button
                                onClick={() => {
                                    if (loginOrSignup === "login") setLoginOrSignup("signup");
                                    else if (loginOrSignup === "signup") setLoginOrSignup("login");
                                }}
                                className="ml-1 font-bold text-secondary-color"
                            >
                                {loginOrSignup === "login" ? "Signup" : "Login"}
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
