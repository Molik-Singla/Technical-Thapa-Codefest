import React, { useContext } from "react";

// ✅ Context --------------------------------------------------------------------------------------
import { GlobalContext } from "../context/Store";

// ✅ Components--------------------------------------------------------------------------------------
import { notifySuccess } from "./../animations/TostifyFunctions";

const SingleCartItem = ({ hostingName, hostingPrice, hostingRenewPrice, randomId }) => {
    // ✅ States / Variables --------------------------------------------------------------------------------------
    const { setCartItems } = useContext(GlobalContext);

    // ✅ Functions / Hooks --------------------------------------------------------------------------------------
    function handleRemoveCartItem() {
        setCartItems((prev) => {
            return prev.filter((single) => {
                return single.randomId !== randomId;
            });
        });
        notifySuccess("Item removed Successfully");
    }

    return (
        <div className="single_cart_item relative flex flex-col gap-2 rounded-md bg-white px-4 py-3 pt-14 font-open-sans-font shadow-xl">
            <div className="bg_gradient absolute -top-4 -left-4 flex h-14 w-14 items-center justify-center rounded-full font-semibold text-white">
                Host
            </div>
            <p className="font-rubik-font text-lg font-semibold">{hostingName} Web Hosting</p>
            <p className="text-2xl font-bold text-secondary-color">₹ {hostingPrice}/mo</p>
            <p className="font-medium text-gray-600">₹ {hostingRenewPrice}/mo when you renew</p>
            <div className="mt-2 flex justify-end">
                <button
                    onClick={handleRemoveCartItem}
                    className="animate_on_button_hover relative rounded-sm bg-secondary-color px-7 py-1 font-rubik-font text-lg font-medium text-white hover:bg-white hover:text-secondary-color"
                >
                    <span className="absolute top-0 left-0 bg-secondary-color"></span>
                    <span className="absolute bottom-0 right-0 bg-secondary-color"></span>
                    <span className="absolute bottom-0 left-0 bg-secondary-color"></span>
                    <span className="absolute top-0 right-0 bg-secondary-color"></span>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default SingleCartItem;
