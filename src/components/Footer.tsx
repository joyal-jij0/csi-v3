import React from "react";
import {
    FaEnvelope,
    FaInstagram,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhone,
} from "react-icons/fa";
import ShimmerButton from "./magicui/ShimmerButton";

function Footer() {
    return (
        <div>
            <div className="mt-20 text-white md:mt-40 flex flex-col md:flex-row justify-between mx-10 items-start mb-12 px-4 md:px-10 lg:px-20">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h3 className="text-xl md:text-2xl font-bold mb-6">
                        CONTACT US
                    </h3>
                    <div className="flex items-center mb-4">
                        <FaMapMarkerAlt className="mr-2" />
                        <p className="text-sm md:text-base">
                            Maharaja Agrasen Institute <br></br> Of Technology
                        </p>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaEnvelope className="mr-2" />
                        <p className="text-sm md:text-base">Email@Gmail.Com</p>
                    </div>
                    <div className="flex items-center">
                        <FaPhone className="mr-2" />
                        <p className="text-sm md:text-base">+91 9871010872</p>
                    </div>
                </div>
                <div className="w-full md:w-1/6">
                    <h3 className="text-lg md:text-xl font-bold mb-4">
                        FOLLOW US ON
                    </h3>
                    <div className="flex space-x-4">
                        <FaInstagram size={20} className="md:text-2xl" />
                        <FaLinkedin size={20} className="md:text-2xl" />
                    </div>
                    <hr className="border my-4 md:my-5"></hr>
                    <div className="mt-6 md:mt-8">
                        <h3 className="text-lg md:text-xl font-bold mb-4">
                            FOR MORE UPDATES
                        </h3>

                        <a
                            href="#"
                            className="inline-flex items-center  focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 text-white rounded-md transition duration-300 text-sm md:text-base"
                        >
                            {/* <svg
                                    className="w-8 h-8 fill-current mr-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M21.9 5.9c-.2-.7-.7-1.2-1.4-1.4C18.3 4 12 4 12 4s-6.3 0-8.5.5c-.7.2-1.2.7-1.4 1.4C2 8.1 2 12 2 12s0 3.9.5 5.1c.2.7.7 1.2 1.4 1.4 2.2.5 8.5.5 8.5.5s6.3 0 8.5-.5c.7-.2 1.2-.7 1.4-1.4.5-1.2.5-5.1.5-5.1s0-3.9-.5-5.1zM9.5 15.5V8.5l6.5 3z" />
                                </svg>
                                <span>Subscribe</span> */}

                            <ShimmerButton
                                borderRadius="15px"
                                className="shadow-2xl"
                                shimmerColor="red"
                            >
                                <svg
                                        className="w-8 text-red-600 h-8 fill-current mr-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M21.9 5.9c-.2-.7-.7-1.2-1.4-1.4C18.3 4 12 4 12 4s-6.3 0-8.5.5c-.7.2-1.2.7-1.4 1.4C2 8.1 2 12 2 12s0 3.9.5 5.1c.2.7.7 1.2 1.4 1.4 2.2.5 8.5.5 8.5.5s6.3 0 8.5-.5c.7-.2 1.2-.7 1.4-1.4.5-1.2.5-5.1.5-5.1s0-3.9-.5-5.1zM9.5 15.5V8.5l6.5 3z" />
                                    </svg>
                                <span className="whitespace-pre-wrap text-center  font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                    SUBSCRIBE
                                </span>
                            </ShimmerButton>

                            {/* <Button
                                    className="text-[0.7rem]  md:text-lg"
                                    containerClassName="w-20  lg:w-40 lg:h-12"
                                    borderClassName='red'
                                >
                                    <svg
                                        className="w-8 h-8 fill-current mr-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M21.9 5.9c-.2-.7-.7-1.2-1.4-1.4C18.3 4 12 4 12 4s-6.3 0-8.5.5c-.7.2-1.2.7-1.4 1.4C2 8.1 2 12 2 12s0 3.9.5 5.1c.2.7.7 1.2 1.4 1.4 2.2.5 8.5.5 8.5.5s6.3 0 8.5-.5c.7-.2 1.2-.7 1.4-1.4.5-1.2.5-5.1.5-5.1s0-3.9-.5-5.1zM9.5 15.5V8.5l6.5 3z" />
                                    </svg>
                                    <span>Subscribe</span>
                                </Button> */}
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <hr className="border my-2"></hr>
            <footer className="text-white text-center py-2">
                <div className="flex-grow mt-3"></div>
                <p className="text-sm md:text-base">
                    COPYRIGHT © 2024 CSI-INNOVATION
                </p>
                {/* <div className="flex-grow"></div> */}
            </footer>
        </div>
    );
}

export default Footer;
