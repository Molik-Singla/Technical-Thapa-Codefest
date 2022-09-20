import React from "react";

// ✅ Components -------------------------------------------------------------------------------------------
import Home from "./Home";
import Services from "./Services";
import Testimonials from "./Testimonials";
import PricingPlans from "./PricingPlans";

import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const LandingPage = () => {
    return (
        <>
            <Home />
            <Services />
            <Testimonials />
            <PricingPlans />
            <Footer />
            <Outlet />
        </>
    );
};

export default LandingPage;
