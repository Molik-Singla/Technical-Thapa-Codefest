import React, { useContext } from "react";

// ✅ Context --------------------------------------------------------------------------------------
import { GlobalContext } from "../context/Store";

// ✅ Components--------------------------------------------------------------------------------------
import SingleCartItem from "./../components/SingleCartItem";

// ✅ Icons --------------------------------------------------------------------------------------
import { ImCross } from "react-icons/im";

const Cart = () => {
    // ✅ States / Variables --------------------------------------------------------------------------------------
    const { enableCart, setEnableCart, cartItems } = useContext(GlobalContext);

    return (
        <div className={`relative z-50 ${!enableCart && "hidden"} h-96`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="cart fixed right-0 top-0 z-50 flex h-screen w-full flex-col gap-8 overflow-auto bg-secondary-color px-7 py-8 md:w-[440px]">
                <div className="flex justify-between text-xl text-white">
                    <p className="font-open-sans-font text-1.5xl font-semibold">Cart</p>
                    <button
                        onClick={() => {
                            setEnableCart(false);
                        }}
                    >
                        <ImCross />
                    </button>
                </div>
                {cartItems?.length === 0 && <div className="flex justify-center pt-6 text-2xl font-semibold text-white ">Your cart is Empty</div>}
                {cartItems.map((single, ind) => {
                    return (
                        <SingleCartItem
                            key={ind}
                            hostingPrice={single?.hostingPrice}
                            hostingName={single?.hostingName}
                            hostingRenewPrice={single?.hostingRenewPrice}
                            randomId={single.randomId}
                        />
                    );
                })}
                <div>
                    <button className="bg_gradient mt-7 w-full cursor-not-allowed rounded-xl py-3 text-lg font-bold tracking-wide text-white">
                        Procced to Checkout
                    </button>
                </div>
                <div className="flex justify-center text-lg text-white">
                    or
                    <button
                        onClick={() => {
                            setEnableCart(false);
                        }}
                        className="ml-3 font-rubik-font font-bold text-primary-color"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
