import React, { useState } from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const foodData = [
    { id: 1, name: 'Spicy Burger', price: '$8.50', category: 'Burger', rating: 5, img: '/food-burger.png' },
    { id: 2, name: 'French Fry', price: '$5.50', category: 'French Fry', rating: 4, img: '/food-fries.png' },
    { id: 3, name: 'Italian Pasta', price: '$10.50', category: 'Pasta', rating: 5, img: '/food-pasta.png' },
    { id: 4, name: 'Club Sandwich', price: '$6.50', category: 'Sandwich', rating: 5, img: '/food-sandwich.png' },
    { id: 5, name: 'Cold Drink', price: '$2.50', category: 'Cold Drinks', rating: 4, img: '/food-coke.png' },
    { id: 6, name: 'Combo Pack', price: '$15.50', category: 'Combo', rating: 5, img: '/food-combo.png' },
    { id: 7, name: 'Double Cheese Burger', price: '$11.50', category: 'Burger', rating: 5, img: '/hero-burger.png' },
    { id: 8, name: 'Crispy Chicken Burger', price: '$9.50', category: 'Burger', rating: 5, img: '/offer-burger.png' },
    { id: 9, name: 'Creamy Alfredo', price: '$12.50', category: 'Pasta', rating: 5, img: '/offer-pasta.png' },
    { id: 10, name: 'Mega Family Combo', price: '$19.50', category: 'Combo', rating: 5, img: '/offer-combo.png' },
];

const categories = ["All Food", "Burger", "French Fry", "Pasta", "Sandwich", "Cold Drinks", "Combo"];

const PopularFoods = ({ selectedCategory = "All Food", setSelectedCategory }) => {
    // const [activeCategory, setActiveCategory] = useState("All Food"); // Removed internal state

    const filteredFoods = selectedCategory === "All Food"
        ? foodData
        : foodData.filter(item => item.category === selectedCategory);

    return (
        <section id="popular-foods" className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold font-poppins text-center text-dark-gray mb-4">
                    Our Popular Tasty <span className="text-primary-red">Foods</span>
                </h2>
                <p className="text-center text-text-gray max-w-2xl mx-auto mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
                </p>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory ? setSelectedCategory(cat) : null}
                            className={`px-6 py-2 rounded-full border transition-all ${selectedCategory === cat
                                ? 'bg-primary-red text-white border-primary-red shadow-lg'
                                : 'bg-white text-text-gray border-gray-200 hover:border-primary-red hover:text-primary-red'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredFoods.map((item) => (
                        <div key={item.id} className="bg-white p-6 rounded-2xl shadow-lg border border-transparent hover:border-light-gray hover:shadow-xl transition-all group">
                            <div className="relative mb-4 h-40 flex items-center justify-center">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                                {/* Wishlist icon could go here */}
                            </div>

                            <div className="text-center">
                                <div className="flex justify-center text-accent-yellow mb-2 space-x-1 text-sm">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={i < item.rating ? "" : "text-gray-300"} />
                                    ))}
                                </div>
                                <h3 className="font-bold text-xl text-dark-gray mb-2">{item.name}</h3>
                                <p className="text-text-gray text-sm mb-4">Tasty Food</p>

                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-primary-red font-bold text-xl">{item.price}</span>
                                    <button className="flex items-center gap-2 bg-text-gray/10 hover:bg-primary-red hover:text-white px-4 py-2 rounded-full transition-colors text-sm font-bold text-dark-gray">
                                        <FaShoppingCart /> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-primary-red text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-red-700 transition-colors">
                        View All Products
                    </button>
                </div>

            </div>
        </section>
    );
};

export default PopularFoods;
