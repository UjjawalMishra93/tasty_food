import React from 'react';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: 'Emily Davis',
        role: 'Food Blogger',
        rating: 5,
        text: 'Absolutely blown away by the flavors! The burger was juicy, perfectly cooked, and the fries were crispy perfection. A must-visit!',
        img: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        id: 2,
        name: 'Michael Brown',
        role: 'Regular Customer',
        rating: 5,
        text: 'Fast delivery and the food arrived hot. The packaging is premium too. Truly the best fast food experience in the city.',
        img: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        id: 3,
        name: 'Sarah Wilson',
        role: 'Chef',
        rating: 5,
        text: 'As a chef, I appreciate the fresh ingredients. You can really taste the quality in every bite. Highly recommended!',
        img: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent-yellow/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-red/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-primary-red font-bold tracking-wider uppercase text-sm">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-dark-gray mt-2 leading-tight">
                        What Our Customers <span className="text-primary-red">Say About Us</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-accent-yellow mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible pb-12 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                    {testimonials.map((t) => (
                        <div key={t.id} className="min-w-[85vw] md:min-w-0 snap-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative group border border-gray-100 flex flex-col justify-between">
                            <div>
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-8 text-6xl text-gray-100/50 group-hover:text-accent-yellow/20 transition-colors">
                                    <FaQuoteRight />
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 text-accent-yellow mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-sm" />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-text-gray text-lg leading-relaxed mb-8 font-medium">
                                    "{t.text}"
                                </p>
                            </div>

                            {/* User Info */}
                            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                                <img
                                    src={t.img}
                                    alt={t.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-gray-100"
                                />
                                <div>
                                    <h4 className="font-bold text-dark-gray text-lg">{t.name}</h4>
                                    <span className="text-sm text-primary-red font-semibold">{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
