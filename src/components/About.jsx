import React from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Image Side */}
                    <div className="lg:w-[55%] flex justify-center">
                        <img src="/about-food-combo.png" alt="About Tasty Foods" className="w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-[45%] space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold font-poppins text-dark-gray leading-tight">
                            About Tasty <span className="text-primary-red">Foods</span>
                        </h2>
                        <p className="text-text-gray leading-relaxed">
                            Tasty Foods is a leading restaurant marketing itself as a "fast casual"
                            establishment. We serve delicious burgers, pasta, and healthy foods
                            with the best ingredients and fast delivery service.
                        </p>
                        <p className="text-text-gray leading-relaxed hidden md:block">
                            Our mission is to provide an improved food experience. We use
                            100% fresh ingredients and sustainable products.
                        </p>

                        <ul className="space-y-3 pt-2">
                            {[
                                "Delicious & Healthy Foods",
                                "Best Price & Offers",
                                "Made By Fresh Ingredients"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-primary-red flex items-center justify-center text-white text-xs">
                                        <FaCheck />
                                    </span>
                                    <span className="font-medium text-dark-gray">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-4 pt-6">
                            <button className="bg-accent-yellow text-dark-gray px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-md">
                                Order Now
                            </button>
                            <button className="bg-white text-dark-gray border border-gray-300 px-8 py-3 rounded-full font-bold hover:border-primary-red hover:text-primary-red transition-colors">
                                Read More
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
