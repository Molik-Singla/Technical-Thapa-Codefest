import React, { useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ✅ Context --------------------------------------------------------------------------------------
import { GlobalContext } from "./context/Store";

// ✅ Components --------------------------------------------------------------------------------------
import { useCookies } from "react-cookie";
import Header from "./layout/Header";
import LandingPage from "./layout/LandingPage";
import Login from "./layout/Login";
import Cart from "./layout/Cart";

import Tostify from "./animations/Tostify";

const App = () => {
    // ✅ States / variables --------------------------------------------------------------------------------------
    const [cookies, setCookie] = useCookies("");
    const { setIsLogin, setCartItems } = useContext(GlobalContext);

    // ✅ useeffects --------------------------------------------------------------------------------------
    useEffect(() => {
        if (cookies?.isLogin === "true") {
            setIsLogin(true);
            if (cookies?.cart?.length > 0) setCartItems(cookies.cart);
        }
    }, []);

    return (
        <Tostify>
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="/" element={<Header />}>
                        <Route path="/" element={<LandingPage />}>
                            <Route path="" element={<Cart />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Tostify>
    );
};

export default App;
