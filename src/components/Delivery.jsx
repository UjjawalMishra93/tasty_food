import React from 'react';
import { FaClock } from 'react-icons/fa';

const Delivery = () => {
    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Content Side */}
                    <div className="md:w-1/2 space-y-8 relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h2 className="text-4xl md:text-6xl font-extrabold font-poppins text-dark-gray leading-tight tracking-tight">
                            Fastest Delivery <br />
                            <span className="text-primary-red">On The Planet</span>
                        </h2>
                        <p className="text-text-gray text-lg leading-relaxed max-w-lg">
                            We deliver your food fresh and hot, faster than you can imagine.
                            Our express delivery agents are always ready to serve you.
                        </p>

                        {/* Fast Delivery Card */}
                        <div className="bg-white p-5 rounded-2xl shadow-xl border border-gray-100 inline-flex items-center gap-5 transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="bg-accent-yellow/20 p-4 rounded-full flex-shrink-0">
                                <FaClock className="text-2xl text-accent-yellow" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-dark-gray">Fast Delivery</h4>
                                <p className="text-sm text-gray-500 font-medium">Delivery in 30 min</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="md:w-1/2 relative flex justify-center md:justify-end animate-slide-in-right">

                        {/* Floating Badge */}
                        <div className="absolute top-10 right-10 md:right-20 bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-2xl transform rotate-6 z-30 animate-float border border-white/50">
                            <span className="font-bold text-primary-red text-lg md:text-xl block">Order Online</span>
                            <span className="text-sm md:text-base text-gray-600 font-medium">and Get Fast Delivery</span>
                        </div>

                        {/* Floating Food Elements (Decorations) */}
                        <img
                            src="/floating-tomato.png"
                            alt="Tomato"
                            className="absolute -top-10 left-10 w-16 md:w-20 drop-shadow-lg z-20 animate-float"
                            style={{ animationDelay: '0s' }}
                        />
                        <img
                            src="/floating-chili.png"
                            alt="Chili"
                            className="absolute bottom-10 -left-5 w-12 md:w-16 drop-shadow-md z-20 animate-float"
                            style={{ animationDelay: '1.5s' }}
                        />
                        <img
                            src="/floating-parsley.png"
                            alt="Parsley"
                            className="absolute top-1/2 right-0 w-12 md:w-24 drop-shadow-lg z-0 opacity-80 animate-float"
                            style={{ animationDelay: '1s' }}
                        />

                        {/* Main Image */}
                        <div className="relative z-10 w-full flex justify-end">
                            {/* Decorative Blob/Shadow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-yellow/10 rounded-full blur-3xl -z-10"></div>

                            {/* Speed Lines Effect (SVG) */}
                            <svg className="absolute top-1/2 -left-20 -translate-y-1/2 w-40 h-full z-0 opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0 20 L100 20" stroke="black" strokeWidth="2" strokeDasharray="10 20" />
                                <path d="M10 40 L90 40" stroke="black" strokeWidth="1" strokeDasharray="5 15" />
                                <path d="M0 60 L100 60" stroke="black" strokeWidth="2" strokeDasharray="15 25" />
                                <path d="M20 80 L80 80" stroke="black" strokeWidth="1" strokeDasharray="8 12" />
                            </svg>

                            <img
                                src="/delivery-guy-3d.png"
                                alt="Delivery Guy on Scooter"
                                className="w-full max-w-xl object-contain hover:scale-105 transition-transform duration-500 ease-in-out drop-shadow-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Delivery;
