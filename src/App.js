import React from "react";

// ✅ Components --------------------------------------------------------------------------------------
import Header from "./layout/Header";
import Home from "./layout/Home";
import Services from "./layout/Services";
import Testimonials from "./layout/Testimonials";
import PricingPlans from "./layout/PricingPlans";

const App = () => {
    return (
        <div className="h-auto">
            <Header />
            <Home />
            <Services />
            <Testimonials />
            <PricingPlans />
        </div>
    );
};

export default App;
