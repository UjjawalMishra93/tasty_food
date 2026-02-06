import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar'; // Assuming we want the navbar here too
import Footer from '../components/Footer';
import { FaTrash, FaMinus, FaPlus, FaArrowRight, FaShoppingBag, FaArrowLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, cartTotal, isLoading, user } = useCart();

    // Tax and Delivery could be dynamic, hardcoded for now
    const deliveryFee = cartTotal > 50 ? 0 : 5.00;
    const tax = cartTotal * 0.08; // 8% tax
    const finalTotal = cartTotal + deliveryFee + tax;

    if (isLoading) {
        return (
            <div className="min-h-screen bg-light-gray flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-red"></div>
            </div>
        );
    }

    return (
        <div className="bg-light-gray min-h-screen font-inter flex flex-col">
            <Navbar />

            <main className="flex-grow container mx-auto px-4 md:px-8 pt-40 pb-20 md:pt-48 md:pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl md:text-4xl font-extrabold font-poppins text-dark-gray mb-8 flex items-center gap-3">
                        <span className="text-primary-red text-4xl"><FaShoppingBag /></span>
                        Your <span className="text-primary-red">Cart</span>
                    </h1>
                </motion.div>

                {!user ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <h2 className="text-2xl font-bold text-dark-gray mb-4">Please Login to View Cart</h2>
                        <p className="text-text-gray mb-8">You need to be logged in to manage your cart items.</p>
                        <Link to="/login" className="bg-primary-red text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-red-700 transition-all">
                            Login Now
                        </Link>
                    </motion.div>
                ) : cartItems.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center py-20 text-center"
                    >
                        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-5xl mb-6">
                            <FaShoppingBag />
                        </div>
                        <h2 className="text-2xl font-bold text-dark-gray mb-2">Your Cart is Empty</h2>
                        <p className="text-text-gray mb-8 max-w-md">Looks like you haven't added anything to your cart yet. Go ahead and explore our delicious menu!</p>
                        <Link to="/" className="flex items-center gap-2 bg-primary-red text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-red-700 transition-all btn-premium-click btn-shine">
                            Browse Menu <FaArrowRight />
                        </Link>
                    </motion.div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Cart Items List */}
                        <div className="flex-1">
                            <AnimatePresence>
                                <div className="space-y-6">
                                    {cartItems.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-white rounded-2xl p-4 md:p-6 shadow-md border border-transparent hover:border-gray-100 items-center grid grid-cols-12 gap-4"
                                        >
                                            {/* Image */}
                                            <div className="col-span-3 md:col-span-2 bg-gray-50 rounded-xl h-20 md:h-24 flex items-center justify-center p-2">
                                                <img
                                                    src={item.products?.image_url || '/food-burger.png'}
                                                    alt={item.products?.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            {/* Details */}
                                            <div className="col-span-9 md:col-span-5">
                                                <h3 className="font-bold text-lg text-dark-gray mb-1">{item.products?.name}</h3>
                                                <p className="text-xs text-text-gray mb-2">{item.products?.category}</p>
                                                <div className="text-primary-red font-bold md:hidden">
                                                    ${(item.products?.price * item.quantity).toFixed(2)}
                                                </div>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="col-span-6 md:col-span-3 flex items-center justify-start md:justify-center">
                                                <div className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-2 border border-gray-100">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        disabled={item.quantity <= 1}
                                                        className="w-6 h-6 flex items-center justify-center text-text-gray hover:text-primary-red disabled:opacity-30 transition-colors"
                                                    >
                                                        <FaMinus className="text-xs" />
                                                    </button>
                                                    <span className="font-bold text-dark-gray w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="w-6 h-6 flex items-center justify-center text-text-gray hover:text-primary-red transition-colors"
                                                    >
                                                        <FaPlus className="text-xs" />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Price & Remove (Desktop) */}
                                            <div className="col-span-6 md:col-span-2 flex flex-col items-end justify-between h-full">
                                                <div className="text-lg font-bold text-dark-gray hidden md:block">
                                                    ${(item.products?.price * item.quantity).toFixed(2)}
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors"
                                                    title="Remove Item"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </AnimatePresence>

                            <div className="mt-8">
                                <Link to="/" className="inline-flex items-center gap-2 text-text-gray font-bold hover:text-primary-red transition-colors">
                                    <FaArrowLeft /> Continue Shopping
                                </Link>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-96">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 sticky top-32"
                            >
                                <h3 className="text-2xl font-bold font-poppins text-dark-gray mb-6">Order Summary</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center text-text-gray">
                                        <span>Subtotal</span>
                                        <span className="font-semibold text-dark-gray">${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-text-gray">
                                        <span>Tax (8%)</span>
                                        <span className="font-semibold text-dark-gray">${tax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-text-gray">
                                        <span>Delivery Fee</span>
                                        <span className={`font-bold ${deliveryFee === 0 ? 'text-green-500' : 'text-dark-gray'}`}>
                                            {deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}
                                        </span>
                                    </div>

                                    <div className="h-px bg-gray-200 my-4"></div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold text-dark-gray">Total</span>
                                        <span className="text-2xl font-bold text-primary-red">${finalTotal.toFixed(2)}</span>
                                    </div>
                                </div>

                                <button className="w-full bg-primary-red text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-red-700 hover:shadow-xl transition-all btn-premium-click btn-shine">
                                    Proceed to Checkout
                                </button>

                                <div className="mt-6 text-center">
                                    <p className="text-xs text-text-gray">
                                        Secure Checkout - 100% Money Back Guarantee
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Cart;
