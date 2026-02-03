import React from 'react';

const offers = [
    {
        id: 1,
        title: 'Pasta',
        desc: 'Super Delicious',
        discount: '25% OFF',
        price: '$10.90',
        color: 'bg-primary-red',
        textColor: 'text-white',
        img: '/offer-pasta.png'
    },
    {
        id: 2,
        title: 'Burger',
        desc: 'Super Delicious',
        discount: '50% OFF',
        price: '$12.90',
        color: 'bg-dark-gray',
        textColor: 'text-white',
        img: '/offer-burger.png'
    },
    {
        id: 3,
        title: 'Combo',
        desc: 'Super Delicious',
        discount: '20% OFF',
        price: '$18.90',
        color: 'bg-accent-yellow',
        textColor: 'text-dark-gray',
        img: '/offer-combo.png'
    }
];

const Offers = () => {
    return (
        <section className="pt-32 pb-16 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {offers.map((offer) => (
                        <div
                            key={offer.id}
                            className={`${offer.color} rounded-2xl p-6 relative overflow-visible h-48 md:h-56 flex flex-col justify-center shadow-lg transition-transform hover:-translate-y-2`}
                        >
                            {/* Content */}
                            <div className="relative z-10 w-2/3">
                                <h3 className={`text-3xl font-bold font-poppins mb-1 ${offer.textColor}`}>{offer.title}</h3>
                                <p className={`text-sm mb-2 opacity-90 ${offer.textColor}`}>Get {offer.discount}</p>
                                <p className={`text-sm mb-4 opacity-75 ${offer.textColor}`}>Starting From</p>
                                <span className={`text-2xl font-bold ${offer.textColor}`}>{offer.price}</span>
                            </div>

                            {/* Image */}
                            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48">
                                <img
                                    src={offer.img}
                                    alt={offer.title}
                                    className="w-full h-full object-contain drop-shadow-xl hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offers;
