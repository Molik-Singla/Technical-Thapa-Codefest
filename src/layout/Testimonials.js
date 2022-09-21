import React from "react";

// ✅ Components --------------------------------------------------------------------------------------
import SectionElement from "./../components/SectionElement";
import SingleTestimonial from "./../components/SingleTestimonial";

const Testimonials = () => {
    return (
        <SectionElement bgToAdd={"bg_gradient"}>
            <div className="relative bottom-6 h-auto px-1 font-open-sans-font text-3.5xl font-bold text-white">Testimonials</div>

            <div className="flex w-full justify-center lg:flex-row">
                <div className="flex h-auto w-full justify-center px-0 md:w-[90%] md:px-2 lg:order-1 lg:max-w-max">
                    <div className="carosouel_div relative flex h-auto w-screen flex-col items-center gap-5 px-0 md:px-1 md:py-12 lg:flex-row">
                        <SingleTestimonial
                            key={Math.random()}
                            userName={"Robert James"}
                            description={
                                " If you're a beginner, then you can trust this guy and can put your time into his content. I can assure you that it'll be worth it."
                            }
                            image={"https://picsum.photos/id/8/64"}
                        />
                        <SingleTestimonial
                            key={Math.random()}
                            userName={"Richard Joseph"}
                            description={"This website and this content is very interesting and worth it. You must try our services at least once."}
                            image={"https://picsum.photos/id/23/64"}
                        />
                    </div>
                </div>
            </div>
        </SectionElement>
    );
};

export default Testimonials;
