import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaChevronDown, FaShoppingBag, FaBars, FaTimes, FaRegClock } from 'react-icons/fa';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed w-full z-50 transition-all duration-300">
            {/* Top Bar */}
            <div className={`hidden lg:flex w-full bg-primary-red transition-all duration-300 ${isScrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'h-auto py-3 opacity-100'}`}>
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center text-xs font-medium text-white">
                    <div className="flex items-center gap-2">
                        <FaRegClock />
                        <span>Mon-Fri:8am - 11pm, Sat-Sun:8am-12pm</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-accent-yellow transition-colors">About Us</a>
                        <span>|</span>
                        <a href="#" className="hover:text-accent-yellow transition-colors">Contact Us</a>
                        <span>|</span>
                        <a href="#" className="hover:text-accent-yellow transition-colors">Login/Register</a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-4'}`}>
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

                    {/* Logo */}
                    <div className="flex flex-col -mt-2">
                        <h1 className="text-4xl font-extrabold font-poppins text-primary-red leading-none">Tasty</h1>
                        <span className="text-dark-gray text-xs font-bold tracking-[0.2em] uppercase ml-1">FOODS</span>
                    </div>


                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        <a href="#" className="font-bold text-dark-gray hover:text-primary-red transition-colors">Home</a>
                        <a href="#" className="font-bold text-dark-gray hover:text-primary-red transition-colors flex items-center gap-1">Menu <FaChevronDown className="text-[10px]" /></a>
                        <a href="#" className="font-bold text-dark-gray hover:text-primary-red transition-colors">Order Food</a>
                        <a href="#" className="font-bold text-dark-gray hover:text-primary-red transition-colors flex items-center gap-1">Blog <FaChevronDown className="text-[10px]" /></a>
                        <a href="#" className="font-bold text-dark-gray hover:text-primary-red transition-colors flex items-center gap-1">Pages <FaChevronDown className="text-[10px]" /></a>
                    </div>

                    {/* Right Info & CTA */}
                    <div className="hidden lg:flex items-center gap-4 xl:gap-6">
                        {/* Phone */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-dark-gray text-sm hover:bg-primary-red hover:text-white transition-colors">
                                <FaPhoneAlt />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-xs text-gray-500 font-medium">Call us for Order</span>
                                <span className="font-bold text-accent-yellow text-sm">+1-555-157-5651</span>
                            </div>
                        </div>

                        {/* Cart */}
                        <div className="relative">
                            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-dark-gray hover:text-primary-red transition-colors"><FaShoppingBag /></button>
                            <span className="absolute -top-1 -right-1 bg-primary-red text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
                        </div>

                        {/* CTA */}
                        <button className="bg-primary-red text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200 uppercase text-xs tracking-wide">
                            Order Online
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="lg:hidden text-2xl text-dark-gray" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-xl py-6 px-6 flex flex-col gap-4 border-t border-gray-100">
                        <a href="#" className="font-bold text-dark-gray hover:text-primary-red">Home</a>
                        <a href="#" className="font-bold text-dark-gray hover:text-primary-red flex justify-between">Menu <FaChevronDown /></a>
                        <a href="#" className="font-bold text-dark-gray hover:text-primary-red">Order Food</a>
                        <a href="#" className="font-bold text-dark-gray hover:text-primary-red flex justify-between">Blog <FaChevronDown /></a>
                        <a href="#" className="font-bold text-dark-gray hover:text-primary-red flex justify-between">Pages <FaChevronDown /></a>

                        <div className="h-px bg-gray-100 my-2"></div>

                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-dark-gray text-xs">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <span className="text-xs text-gray-500 block">Call us for Order</span>
                                <span className="font-bold text-accent-yellow text-sm">+1-555-157-5651</span>
                            </div>
                        </div>

                        <button className="bg-primary-red text-white px-6 py-3 rounded-full font-bold w-full uppercase text-sm tracking-wide">
                            Order Online
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
