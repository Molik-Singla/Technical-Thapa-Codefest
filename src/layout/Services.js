import React from "react";

// ✅ Components -------------------------------------------------------------------------------------------
import SectionElement from "./../components/SectionElement";
import SectionHeading from "./../components/SectionHeading";
import SingleService from "./../components/SingleService";

const Services = () => {
    return (
        <SectionElement>
            <div className="flex h-full w-full flex-col items-center gap-16">
                <SectionHeading>Out Services</SectionHeading>
                <div className="box-border flex h-auto w-full flex-col flex-wrap items-center gap-4 pl-6 md:flex-row md:gap-y-7 md:pl-16 lg:gap-5">
                    <SingleService serviceName={"Free SSL"} />
                    <SingleService serviceName={"Access Management"} />
                    <SingleService serviceName={"eCommerce Optimization"} />
                    <SingleService serviceName={"Free Migration"} />
                    <SingleService serviceName={"Automated backups"} />
                    <SingleService serviceName={"DDoS Protection"} />
                    <SingleService serviceName={"PHP Speed Boost"} />
                    <SingleService serviceName={"LiteSpeed Cache Plugin"} />
                    <SingleService serviceName={"One-Click WordPress Installation"} />
                    <SingleService serviceName={"24/7/365 Tech Support"} />
                    <SingleService serviceName={"Auto Script Installer"} />
                    <SingleService serviceName={"99.9% Uptime Guarantee"} />
                </div>
            </div>
        </SectionElement>
    );
};

export default Services;
