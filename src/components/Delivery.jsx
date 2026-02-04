import React from 'react';
import { FaClock } from 'react-icons/fa';

const Delivery = () => {
    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8">

                    {/* Left Side Content */}
                    <div className="md:w-[28%] text-center md:text-left space-y-6 animate-fade-in-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-dark-gray leading-tight">
                            Choose your <br />
                            <span className="text-primary-red">favourite food</span>
                        </h2>
                        <p className="text-text-gray text-lg leading-relaxed">
                            Browse our menu of burgers, sides, and drinks. Find your craving in seconds.
                        </p>
                    </div>

                    {/* Center Image Side */}
                    <div className="md:w-[44%] relative flex justify-center items-center">
                        {/* Blob Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-yellow/10 rounded-full blur-3xl -z-10"></div>

                        <img
                            src="/delivery-guy-3d.png"
                            alt="Delivery Guy on Scooter"
                            className="w-full max-w-md md:max-w-2xl object-contain hover:scale-105 transition-transform duration-500 ease-in-out drop-shadow-2xl relative z-10"

                        />

                        {/* Floating Badge (Express Delivery) */}
                        <div className="absolute top-0 right-10 md:right-0 bg-white p-4 rounded-full shadow-xl border-2 border-dashed border-gray-200 animate-float z-20">
                            <div className="text-center leading-tight">
                                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Express Delivery</span>
                                <span className="block text-xl font-extrabold text-primary-red">30 min</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Content */}
                    <div className="md:w-[28%] text-center md:text-right space-y-6 animate-fade-in-right">
                        <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-dark-gray leading-tight">
                            Order Online <br />
                            and Get Fast <br />
                            <span className="text-primary-red">Delivery</span>
                        </h2>
                        <p className="text-text-gray text-lg leading-relaxed">
                            Get hot, fresh food delivered to your door in record time.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Delivery;
