import React from 'react';

const categories = [
    { id: 1, name: 'Burger', image: '/food-burger.png' },
    { id: 2, name: 'French Fry', image: '/food-fries.png' },
    { id: 3, name: 'Pasta', image: '/food-pasta.png' },
    { id: 4, name: 'Sandwich', image: '/food-sandwich.png' },
    { id: 5, name: 'Cold Drinks', image: '/food-coke.png' },
    { id: 6, name: 'Combo', image: '/food-combo.png' },
];

const Categories = () => {
    return (
        <div className="relative z-30 w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-6 lg:gap-16">
                    {categories.map((cat) => (
                        <div key={cat.id} className="group flex flex-col items-center gap-3 cursor-pointer">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border-4 border-white group-hover:border-primary-red relative overflow-hidden">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="font-extrabold text-dark-gray text-lg group-hover:text-primary-red transition-colors">{cat.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
