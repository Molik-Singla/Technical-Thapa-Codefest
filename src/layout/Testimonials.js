import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

// ✅ Components --------------------------------------------------------------------------------------
import SectionElement from "./../components/SectionElement";
import SingleTestimonial from "./../components/SingleTestimonial";

// ✅ Icons --------------------------------------------------------------------------------------
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

// ✅ Data --------------------------------------------------------------------------------------
import testimonialData from "./../helpers/TestimonialData";

const Testimonials = () => {
    // ✅ States / Variables --------------------------------------------------------------------------------------
    const [cookies, setCookie] = useCookies("mytestimonial");

    const [testimonialsArray, setTestimonialsArray] = useState([]);
    const [testimonialCount, setTestimonialCount] = useState(
        cookies?.mytestimonial?.user_name ? testimonialData?.length + 1 : testimonialData?.length
    );
    const [testimonialCountToShow, setTestimonialCountToShow] = useState(0);
    const [testimonialDataToCollect, setTestimonialDataToCollect] = useState({
        user_name: "",
        description: "",
    });

    // ✅ Functions / Hooks --------------------------------------------------------------------------------------
    function handlePreviousTestimonial() {
        setTestimonialCountToShow((prev) => (prev === 0 ? testimonialCount - 1 : prev - 1));
    }
    function handleNextTestimonial() {
        setTestimonialCountToShow((prev) => (prev === testimonialCount - 1 ? 0 : prev + 1));
    }
    function handleSaveTestimonialData() {
        setCookie("mytestimonial", JSON.stringify(testimonialDataToCollect), {
            path: "/",
        });
        setTestimonialsArray(() => {
            return [
                <SingleTestimonial
                    key={Math.random()}
                    userName={testimonialDataToCollect.user_name}
                    description={testimonialDataToCollect.description}
                />,
                ...testimonialData.map((single) => {
                    return <SingleTestimonial key={Math.random()} userName={single.userName} description={single.description} image={single.image} />;
                }),
            ];
        });
        setTestimonialDataToCollect({
            user_name: "",
            description: "",
        });
        setTestimonialCountToShow(0);
    }
    function handleOnChangeOnFormData(evt) {
        const { name, value } = evt.target;
        setTestimonialDataToCollect((prev) => {
            return { ...prev, [name]: value };
        });
    }

    // ✅ UseEffects --------------------------------------------------------------------------------
    useEffect(() => {
        if (cookies?.mytestimonial?.user_name) {
            setTestimonialsArray(() => {
                return [
                    <SingleTestimonial
                        key={Math.random()}
                        userName={cookies?.mytestimonial?.user_name}
                        description={cookies?.mytestimonial?.description}
                    />,
                    ...testimonialData.map((single) => {
                        return (
                            <SingleTestimonial key={Math.random()} userName={single.userName} description={single.description} image={single.image} />
                        );
                    }),
                ];
            });
        } else {
            setTestimonialsArray(() => {
                return testimonialData.map((single) => {
                    return <SingleTestimonial key={Math.random()} userName={single.userName} description={single.description} image={single.image} />;
                });
            });
        }
    }, []);
    return (
        <SectionElement bgToAdd={"bg_gradient"}>
            <div className="relative bottom-6 h-auto px-1 font-open-sans-font text-3.5xl font-bold text-white">Testimonials</div>
            <div className="flex w-full flex-col gap-8 lg:flex-row">
                <div className="order-2 flex h-auto w-full justify-center px-2 md:px-8 lg:order-1 lg:max-w-max">
                    <div className="carosouel_div relative flex gap-5 px-3 md:px-10">
                        <IoIosArrowDropleftCircle
                            onClick={handlePreviousTestimonial}
                            className="absolute top-[43%] left-[-24px] z-50 text-4xl text-white md:left-[-12px] md:text-5xl"
                        />

                        {testimonialsArray[testimonialCountToShow]}

                        <IoIosArrowDroprightCircle
                            onClick={handleNextTestimonial}
                            className="absolute top-[43%] right-[-24px] z-40 text-4xl text-white md:right-[-12px] md:text-5xl"
                        />
                    </div>
                </div>

                <section className="order-1 mx-auto h-auto w-full max-w-4xl rounded-md bg-white p-6 shadow-md dark:bg-gray-800 lg:order-2 lg:h-60">
                    <h2 className="text-lg font-semibold capitalize text-gray-700 dark:text-white">Write Testimonial</h2>

                    <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                                name="user_name"
                                value={testimonialDataToCollect.user_name}
                                onChange={handleOnChangeOnFormData}
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="description">
                                Description
                            </label>
                            <input
                                id="description"
                                type="text"
                                className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                                name="description"
                                value={testimonialDataToCollect.description}
                                onChange={handleOnChangeOnFormData}
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={handleSaveTestimonialData}
                            className="transform rounded-md bg-secondary-color px-8 py-2.5 font-rubik-font font-semibold leading-5 text-white transition-colors duration-300 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
                        >
                            Save
                        </button>
                    </div>
                </section>
            </div>
            <div className="mt-16 font-open-sans-font text-base text-white">
                <span className="font-bold">Note - </span>
                Testimonials are only written by some Verified Member. Not everyone have permission to Write Them. Due to I will not adding Backend to
                this application that's why here I could't Restrict anyone to Write Testimonials.
            </div>
        </SectionElement>
    );
};

export default Testimonials;
