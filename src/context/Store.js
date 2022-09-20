import { createContext, useState } from "react";
const GlobalContext = createContext();

const Store = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [enableCart, setEnableCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    return (
        <GlobalContext.Provider value={{ isLogin, setIsLogin, enableCart, setEnableCart, cartItems, setCartItems }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, Store };
