import React from "react";

const SingleTestimonial = ({ userName, description, image }) => {
    return (
        <div
            className={`single_card mx-2 flex h-56 w-[clamp(260px,100%,500px)] flex-col gap-5 rounded-xl bg-white p-4 py-4 pl-5 shadow-2xl transition-all duration-300 md:w-4/5 md:px-8 md:py-5`}
        >
            <div className="flex items-center gap-5">
                <img className="h-16 w-16 rounded-full border-4 border-secondary-color" src={image || "https://picsum.photos/64"} alt="" />
                <p className="name__ font-roboto-font text-xl font-bold text-secondary-color ">{userName}</p>
            </div>
            <p className="font-open-sans-font font-medium">{description}</p>
        </div>
    );
};

export default SingleTestimonial;
