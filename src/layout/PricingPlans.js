import React, { useContext } from "react";

// ✅ Context--------------------------------------------------------------------------------------
import { GlobalContext } from "../context/Store";

// ✅ Components --------------------------------------------------------------------------------------
import SinglePricingCard from "./../components/SinglePricingCard";
import SectionElement from "./../components/SectionElement";
import SectionHeading from "./../components/SectionHeading";

// ✅ Data --------------------------------------------------------------------------------------
import { singleWebHosting, premiumWebHosting, businessWebHosting } from "./../helpers/PricingData";

const PricingPlans = () => {
    // ✅ States / Variavbles --------------------------------------------------------------------------------------
    const { scrollToPricing } = useContext(GlobalContext);
    return (
        <SectionElement refsToScroll={scrollToPricing}>
            <div className="flex h-full w-full flex-col items-center gap-12 md:gap-16">
                <SectionHeading>Pricing Plans</SectionHeading>
                <div className="all_cards flex h-auto w-full flex-row flex-wrap justify-center gap-10 bg-white py-0 px-1 md:py-9 md:px-10 lg:flex-nowrap">
                    <SinglePricingCard pricingPlan={singleWebHosting} planAmount={69} planAmountWhenRenew={159} planName={"Single"} />
                    <SinglePricingCard
                        pricingPlan={premiumWebHosting}
                        planAmount={149}
                        planAmountWhenRenew={249}
                        planName={"Premium"}
                        additionalClassesToAdd={"lg:-translate-y-12"}
                        namePlateClassesToAd={"bg_gradient"}
                    />
                    <SinglePricingCard pricingPlan={businessWebHosting} planAmount={249} planAmountWhenRenew={499} planName={"Business"} />
                </div>
            </div>
        </SectionElement>
    );
};

export default PricingPlans;
