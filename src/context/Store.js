import { createContext, useState, useRef } from "react";
const GlobalContext = createContext();

const Store = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [enableCart, setEnableCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const scrollToServices = useRef();
    const scrollToPricing = useRef();

    return (
        <GlobalContext.Provider
            value={{ isLogin, setIsLogin, enableCart, setEnableCart, cartItems, setCartItems, scrollToServices, scrollToPricing }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, Store };
