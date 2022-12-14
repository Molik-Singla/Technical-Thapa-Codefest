import React, { useContext, useEffect } from "react";

// ✅ Context ----------------------------------------------------------------------------------------------
import { GlobalContext } from "../context/Store";

// ✅ Components -------------------------------------------------------------------------------------------
import { useCookies } from "react-cookie";

import SinglePricingElem from "./SinglePricingElem";

import { notifySuccess, notifyWarn } from "./../animations/TostifyFunctions";

import SingleHeadingForPricingDetails from "./SingleHeadingForPricingDetails";

const SinglePricingCard = ({
    pricingPlan,
    planName,
    planAmount,
    planAmountWhenRenew,
    additionalClassesToAdd,
    namePlateClassesToAd = "bg-secondary-color",
}) => {
    // ✅ States / Variables -------------------------------------------------------------------------------------------
    const { cartItems, setCartItems, isLogin } = useContext(GlobalContext);
    const [, setCookie] = useCookies("");

    // ✅ Functions / Hooks -------------------------------------------------------------------------------------------
    // For detecting Element and deleteing it
    function randomString(strLength, charSet) {
        var result = [];

        strLength = strLength || 5;
        charSet = charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        while (strLength--) result.push(charSet.charAt(Math.floor(Math.random() * charSet.length)));

        return result.join("");
    }

    function handleAddToCart() {
        if (isLogin) {
            notifySuccess("Item added to Cart");

            const randomId = randomString(8);
            setCartItems((prev) => {
                return [
                    ...prev,
                    {
                        hostingName: planName,
                        hostingPrice: planAmount,
                        hostingRenewPrice: planAmountWhenRenew,
                        randomId: randomId,
                    },
                ];
            });
        } else notifyWarn("Please do Login or Signup");
    }

    // ✅ Useeffect -------------------------------------------------------------------------------------------
    useEffect(() => {
        if (isLogin) {
            setCookie("cart", cartItems, {
                path: "/",
            });
        }
    }, [cartItems]);

    return (
        <div
            className={`single_card flex h-auto flex-col gap-7 rounded-2xl border-2 border-gray-200 bg-white font-open-sans-font shadow-lg transition-all duration-300 hover:scale-105 ${additionalClassesToAdd} w-[clamp(19.3rem,100%,20rem)]`}
        >
            <p
                className={`r w-full rounded-t-lg bg-secondary-color py-3 text-center font-open-sans-font text-lg font-bold text-white ${namePlateClassesToAd}`}
            >
                {planName} Web Hosting
            </p>
            <div className="flex flex-col items-center gap-2">
                <p>Ideal solution for beginners</p>
                <p className="font-open-sans-font text-4xl font-bold text-secondary-color">₹ {planAmount}/mo</p>
                <button
                    onClick={handleAddToCart}
                    className="animate_on_button_hover relative rounded-sm bg-secondary-color px-12 py-2 font-rubik-font text-lg font-semibold text-white hover:bg-white hover:text-secondary-color"
                >
                    <span className="absolute top-0 left-0 bg-secondary-color"></span>
                    <span className="absolute bottom-0 right-0 bg-secondary-color"></span>
                    <span className="absolute bottom-0 left-0 bg-secondary-color"></span>
                    <span className="absolute top-0 right-0 bg-secondary-color"></span>
                    Add to Cart
                </button>
                <p className="text-sm text-gray-400">₹{planAmountWhenRenew}/mo when you renew</p>
            </div>

            <div className="all_details flex flex-col gap-6 px-6 pb-7">
                <div className="flex flex-col gap-[6px]">
                    <SingleHeadingForPricingDetails detailName={"Top feature comparison"} />

                    {pricingPlan.topfeatureComparision.map((elem, ind) => {
                        return (
                            <p key={ind}>
                                <span className="font-bold text-secondary-color">{elem.split(" ")[0]}</span> {elem.split(" ").slice(1).join(" ")}
                            </p>
                        );
                    })}
                </div>

                <div className="flex flex-col gap-[6px]">
                    <SingleHeadingForPricingDetails detailName={"Security"} />

                    {pricingPlan.security.map((elem, ind) => {
                        return <SinglePricingElem key={ind} elem={elem} />;
                    })}
                </div>
                <div className="flex flex-col gap-[6px]">
                    <SingleHeadingForPricingDetails detailName={"Free Bonuses"} />
                    {pricingPlan.freeBonuses.map((elem, ind) => {
                        return <SinglePricingElem key={ind} elem={elem} />;
                    })}
                </div>
                <div className="flex flex-col gap-[6px]">
                    <SingleHeadingForPricingDetails detailName={"Wordpress Option"} />

                    {pricingPlan.wordpressOption.map((elem, ind) => {
                        return <SinglePricingElem key={ind} elem={elem} />;
                    })}
                </div>
                <div className="flex flex-col gap-[6px]">
                    <SingleHeadingForPricingDetails detailName={"Service and Support"} />

                    {pricingPlan.serviceAndSupport.map((elem, ind) => {
                        return <SinglePricingElem key={ind} elem={elem} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default SinglePricingCard;
