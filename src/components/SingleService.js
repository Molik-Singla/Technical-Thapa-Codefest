import React from "react";

// ✅ Icons -------------------------------------------------------------------------------------------
import { TiTick } from "react-icons/ti";

const SingleService = ({ serviceName }) => {
    return (
        <p className="flex w-full items-center gap-2 font-open-sans-font text-xl font-bold text-secondary-color md:w-[46%] md:text-1.5xl lg:w-[31%]">
            <TiTick className="text-2xl text-green-600" />
            {serviceName}
        </p>
    );
};

export default SingleService;
