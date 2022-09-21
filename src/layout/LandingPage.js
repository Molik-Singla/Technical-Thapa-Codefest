import React from "react";

// ✅ Components -------------------------------------------------------------------------------------------
import Home from "./Home";
import Services from "./Services";
import Testimonials from "./Testimonials";
import PricingPlans from "./PricingPlans";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

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
