import React from 'react';

const Delivery = () => {
    return (
        <section className="py-16 md:py-24 bg-light-gray torn-section">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

                    {/* Content Side */}
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold font-poppins text-dark-gray leading-tight">
                            Choose your <br />
                            favourite food
                        </h2>
                        <p className="text-text-gray leading-relaxed max-w-md">
                            super delicious burger with fresh ingredients and amazing taste.
                            Get your food delivered to your doorstep quickly.
                        </p>

                        <div className="bg-white p-6 rounded-2xl shadow-sm inline-block mt-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-accent-yellow p-3 rounded-full">
                                    <img src="/delivery-icon-box.png" alt="Box" className="w-8 h-8 object-contain opacity-50" />
                                    {/* Fallback to text/shape if image missing */}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-dark-gray">Fast Delivery</h4>
                                    <p className="text-sm text-gray-500">Delivery in 30 min</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="lg:w-1/2 relative">
                        <div className="absolute top-0 right-10 bg-white p-4 rounded-xl shadow-lg transform rotate-12 z-20 animate-bounce">
                            <span className="font-bold text-primary-red">Order Online</span> <br />
                            <span className="text-sm text-dark-gray">and Get Fast Delivery</span>
                        </div>

                        <img src="/delivery-scooter.png" alt="Delivery Scooter" className="w-full max-w-lg mx-auto drop-shadow-xl relative z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Delivery;
