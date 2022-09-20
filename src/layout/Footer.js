import React from "react";

// ✅ Icons ----------------------------------------------------------------------------------------------
import { BsInstagram } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex h-auto w-full flex-col items-center justify-between gap-6 bg-secondary-color py-5 px-28 font-open-sans-font text-lg font-semibold tracking-wider text-white md:flex-row">
            <p>Designed by Molik Singla</p>
            <div className="social_links flex h-full items-center gap-4">
                <a href="https://www.instagram.com/singlamolik/">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E4405F] shadow-xl transition-all duration-200 hover:-translate-y-[1px]">
                        <BsInstagram className="text-lg" />
                    </div>
                </a>
                <a href="https://github.com/Molik-Singla">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222222] shadow-xl transition-all duration-200 hover:-translate-y-[1px]">
                        <ImGithub className="text-lg" />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/molik-singla-604381224/">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1DA1F2] shadow-xl transition-all duration-200 hover:-translate-y-[1px]">
                        <FaLinkedinIn className="text-lg" />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Footer;
