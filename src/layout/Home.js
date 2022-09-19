import React from "react";

// ✅ Icons  -------------------------------------------------------------------------------------------
import { TiTick } from "react-icons/ti";

const Home = () => {
    return (
        <div className="hero_section box-border w-full bg-white md:h-[clamp(37rem,100vh,44rem)]">
            <div className="little_bit_translate section_background_gradient relative box-border flex h-full w-full flex-col gap-3 px-5 pt-16 md:flex-row md:px-10">
                <div className="flex w-full flex-col items-center justify-center gap-3 py-6 font-open-sans-font md:w-1/2 md:py-14">
                    <p className="text-center text-2xl font-bold text-white md:text-3.5xl">Savings to Set Your Website in Motion</p>
                    <p className="text-center text-5xl font-bold text-white md:text-5xl">₹ 149.00/mo</p>
                    <p className="text-center text-white">Make moves with a free domain and SSL included with a four-year subscription.</p>
                    <button className="mt-8 box-border max-w-max rounded-full border-2 border-transparent bg-secondary-color px-12 py-2 font-rubik-font text-lg font-medium text-white transition-all duration-300 hover:border-2 hover:border-white hover:bg-transparent hover:text-white">
                        Get Started
                    </button>
                    <p className="flex items-center gap-2 text-center font-medium text-white">
                        <TiTick className="text-2xl text-green-600" /> Get exclusive 30-day money-back guarantee
                    </p>
                </div>
                <div className="mt-2 flex h-[80vh]  w-full items-center justify-center pb-8 md:w-1/2">
                    {/* <iframe className="h-full w-full md:h-4/5 md:w-4/5" src="https://embed.lottiefiles.com/animation/89111"></iframe> */}
                    <lottie-player
                        src="https://assets3.lottiefiles.com/packages/lf20_isd8rnbz.json"
                        background="transparent"
                        speed="0.8"
                        style={{ width: "100%", height: "100%" }}
                        loop
                        autoplay
                    ></lottie-player>
                </div>
            </div>
        </div>
    );
};

export default Home;
