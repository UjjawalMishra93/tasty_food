import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        role: 'Food Blogger',
        rating: 5,
        text: 'The food was absolutely wonderful, from preparation to presentation, very pleasing.',
        img: 'https://i.pravatar.cc/150?img=11'
    },
    {
        id: 2,
        name: 'Sarah Smith',
        role: 'Chef',
        rating: 5,
        text: 'I highly recommend this restaurant. The food is delicious and the service is great.',
        img: 'https://i.pravatar.cc/150?img=5'
    },
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-light-gray torn-section">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold font-poppins text-center text-dark-gray mb-16">
                    Our Customer <span className="text-primary-red">Feedbacks</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-white p-8 rounded-2xl shadow-md relative hover:shadow-xl transition-shadow">
                            <FaQuoteLeft className="text-4xl text-yellow-100 absolute top-6 right-6" />
                            <div className="flex gap-1 text-accent-yellow mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className="text-text-gray italic mb-6 leading-relaxed">"{t.text}"</p>

                            <div className="flex items-center gap-4">
                                <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary-red" />
                                <div>
                                    <h4 className="font-bold text-dark-gray">{t.name}</h4>
                                    <span className="text-sm text-text-gray">{t.role}</span>
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
