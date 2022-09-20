import React, { useState, useEffect } from "react";

// ✅ Components --------------------------------------------------------------------------------------
import SectionElement from "./../components/SectionElement";
import SingleTestimonial from "./../components/SingleTestimonial";

import Carousel from "react-elastic-carousel";

// ✅ Data --------------------------------------------------------------------------------------
import testimonialData from "./../helpers/TestimonialData";

const Testimonials = () => {
    // ✅ States / Variables --------------------------------------------------------------------------------------
    const [testimonialsArray, setTestimonialsArray] = useState([]);

    // ✅ UseEffects --------------------------------------------------------------------------------
    useEffect(() => {
        setTestimonialsArray(() => {
            return testimonialData.map((single) => {
                return <SingleTestimonial key={Math.random()} userName={single.userName} description={single.description} image={single.image} />;
            });
        });
    }, []);
    return (
        <SectionElement bgToAdd={"bg_gradient"}>
            <div className="relative bottom-6 h-auto px-1 font-open-sans-font text-3.5xl font-bold text-white">Testimonials</div>

            <div className="flex w-full justify-center lg:flex-row">
                <div className="flex h-auto w-full justify-center px-0 md:w-[90%] md:px-2 lg:order-1 lg:max-w-max">
                    <div className="carosouel_div relative flex h-80 w-screen items-center gap-2 px-0 md:px-10">
                        <Carousel
                            breakPoints={[
                                { width: 1, itemsToShow: 1 },
                                { width: 767, itemsToShow: 1 },
                            ]}
                            itemsToShow={2}
                            className={"flex gap-3"}
                        >
                            {testimonialsArray}
                        </Carousel>
                    </div>
                </div>
            </div>
        </SectionElement>
    );
};

export default Testimonials;
