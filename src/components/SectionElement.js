import React from "react";

const SectionElement = ({ children, bgToAdd, refsToScroll = null }) => {
    return (
        <div ref={refsToScroll} className={`services_section h-full w-full px-5 py-14 md:px-10 md:py-20 ${bgToAdd}`}>
            {children}
        </div>
    );
};

export default SectionElement;
