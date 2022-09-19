import React from "react";
import SingleHeadingForPricingDetails from "./SingleHeadingForPricingDetails";
import SinglePricingElem from "./SinglePricingElem";

const SinglePricingCard = ({
    pricingPlan,
    planName,
    planAmount,
    planAmountWhenRenew,
    additionalClassesToAdd,
    namePlateClassesToAd = "bg-secondary-color",
}) => {
    return (
        <div
            className={`single_card flex h-auto w-96 flex-col gap-7 rounded-2xl border-2 border-gray-200 bg-white font-open-sans-font shadow-lg transition-all duration-500 hover:scale-105 ${additionalClassesToAdd} min-w-[300px] max-w-[320px]`}
        >
            <p
                className={`r w-full rounded-t-lg bg-secondary-color py-3 text-center font-open-sans-font text-lg font-bold text-white ${namePlateClassesToAd}`}
            >
                {planName} Web Hosting
            </p>
            <div className="flex flex-col items-center gap-2">
                <p>Ideal solution for beginners</p>
                <p className="font-open-sans-font text-4xl font-bold text-secondary-color">₹ {planAmount}/mo</p>
                <button className="rounded-full bg-secondary-color px-12 py-2 font-rubik-font text-lg font-semibold text-white">Add to Cart</button>
                <p>₹{planAmountWhenRenew}/mo when you renew</p>
            </div>

            <div className="all_details flex flex-col gap-6 px-6 pb-7">
                <div className="flex flex-col gap-[6px]">
                    <SingleHeadingForPricingDetails detailName={"Top feature comparison"} />

                    {pricingPlan.topfeatureComparision.map((elem) => {
                        return (
                            <p>
                                <span className="font-bold text-secondary-color">{elem.split(" ")[0]}</span> {elem.split(" ").slice(1).join(" ")}
                            </p>
                        );
                    })}
                </div>

                <div className="flex flex-col gap-[6px]">
                    <SingleHeadingForPricingDetails detailName={"Security"} />

                    {pricingPlan.security.map((elem) => {
                        return <SinglePricingElem elem={elem} />;
                    })}
                </div>
                <div className="flex flex-col gap-[6px]">
                    <SingleHeadingForPricingDetails detailName={"Free Bonuses"} />
                    {pricingPlan.freeBonuses.map((elem) => {
                        return <SinglePricingElem elem={elem} />;
                    })}
                </div>
                <div className="flex flex-col gap-[6px]">
                    <SingleHeadingForPricingDetails detailName={"Wordpress Option"} />

                    {pricingPlan.wordpressOption.map((elem) => {
                        return <SinglePricingElem elem={elem} />;
                    })}
                </div>
                <div className="flex flex-col gap-[6px]">
                    <SingleHeadingForPricingDetails detailName={"Service and Support"} />

                    {pricingPlan.serviceAndSupport.map((elem) => {
                        return <SinglePricingElem elem={elem} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default SinglePricingCard;
