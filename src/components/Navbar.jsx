import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaChevronDown, FaShoppingBag, FaBars, FaTimes, FaRegClock, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { supabase } from '../lib/supabaseClient';
import { useCart } from '../context/CartContext';

const Navbar = ({ onOpenAuth }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [profileOpen, setProfileOpen] = useState(false);
    const navigate = useNavigate();
    const { cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Check active session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
        });

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            subscription.unsubscribe();
        };
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setProfileOpen(false);
        setMobileMenuOpen(false);
        navigate('/');
    };

    const handleCartClick = (e) => {
        if (!user) {
            e.preventDefault();
            setMobileMenuOpen(false);
            if (onOpenAuth) onOpenAuth('login');
        } else {
            setMobileMenuOpen(false);
        }
    };

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
                        {user ? (
                            <button onClick={handleLogout} className="hover:text-accent-yellow transition-colors">Logout</button>
                        ) : (
                            <button onClick={() => onOpenAuth && onOpenAuth('login')} className="hover:text-accent-yellow transition-colors font-medium">Login/Register</button>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-4'}`}>
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" className="flex flex-col -mt-2 group">
                        <h1 className="text-4xl font-extrabold font-poppins text-primary-red leading-none group-hover:scale-105 transition-transform">Tasty</h1>
                        <span className="text-dark-gray text-xs font-bold tracking-[0.2em] uppercase ml-1">FOODS</span>
                    </Link>


                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        <Link to="/" className="font-bold text-dark-gray hover:text-primary-red transition-colors">Home</Link>
                        <a href="#popular-foods" className="font-bold text-dark-gray hover:text-primary-red transition-colors">Menu</a>
                        <a href="#popular-foods" className="font-bold text-dark-gray hover:text-primary-red transition-colors">Order Food</a>
                        <a href="#blog" className="font-bold text-dark-gray hover:text-primary-red transition-colors">Blog</a>

                        {/* Pages Dropdown */}
                        <div className="relative group/pages">
                            <button className="font-bold text-dark-gray hover:text-primary-red transition-colors flex items-center gap-1">
                                Pages <FaChevronDown className="text-[10px] group-hover/pages:rotate-180 transition-transform" />
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl py-2 opacity-0 invisible group-hover/pages:opacity-100 group-hover/pages:visible transition-all duration-300 transform translate-y-2 group-hover/pages:translate-y-0 z-50 border border-gray-100">
                                <a href="#about" className="block px-4 py-2 text-sm font-bold text-dark-gray hover:text-primary-red hover:bg-gray-50 transition-colors">About Us</a>
                                <a href="#gallery" className="block px-4 py-2 text-sm font-bold text-dark-gray hover:text-primary-red hover:bg-gray-50 transition-colors">Gallery</a>
                                <a href="#testimonials" className="block px-4 py-2 text-sm font-bold text-dark-gray hover:text-primary-red hover:bg-gray-50 transition-colors">Testimonials</a>
                            </div>
                        </div>
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
                        <Link to="/cart" onClick={handleCartClick} className="relative cursor-pointer group">
                            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-dark-gray group-hover:bg-primary-red group-hover:text-white transition-colors">
                                <FaShoppingBag />
                            </div>
                            <span className="absolute -top-1 -right-1 bg-primary-red text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white group-hover:border-primary-red transition-all">
                                {cartCount}
                            </span>
                        </Link>

                        {/* CTA / User Profile */}
                        {user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setProfileOpen(!profileOpen)}
                                    className="flex items-center gap-2 bg-white border border-gray-200 pr-4 pl-2 py-1.5 rounded-full hover:shadow-md transition-all"
                                >
                                    <div className="w-8 h-8 rounded-full bg-primary-red text-white flex items-center justify-center text-sm font-bold">
                                        {user.email?.charAt(0).toUpperCase() || <FaUserCircle />}
                                    </div>
                                    <span className="text-sm font-bold text-dark-gray max-w-[100px] truncate">{user.user_metadata?.full_name || user.email?.split('@')[0]}</span>
                                    <FaChevronDown className={`text-xs text-gray-400 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {profileOpen && (
                                    <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 border border-gray-100 flex flex-col z-50 animate-in fade-in zoom-in-95 duration-200">
                                        <div className="px-4 py-2 border-b border-gray-100 mb-1">
                                            <p className="text-xs text-gray-500">Signed in as</p>
                                            <p className="text-sm font-bold text-dark-gray truncate">{user.email}</p>
                                        </div>
                                        <button className="text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-red font-medium transition-colors btn-premium-click btn-shine">
                                            My Profile
                                        </button>
                                        <button className="text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-red font-medium transition-colors btn-premium-click btn-shine">
                                            Orders
                                        </button>
                                        <button
                                            onClick={handleLogout}
                                            className="text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 font-medium transition-colors flex items-center gap-2 btn-premium-click btn-shine"
                                        >
                                            <FaSignOutAlt /> Sign Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button onClick={() => onOpenAuth && onOpenAuth('login')} className="bg-primary-red text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200 uppercase text-xs tracking-wide flex items-center justify-center btn-premium-click btn-shine">
                                Order Online
                            </button>
                        )}
                    </div>

                    {/* Mobile Cart & Toggle */}
                    <div className="flex items-center gap-4 lg:hidden">
                        {/* Mobile Cart */}
                        <Link to="/cart" onClick={handleCartClick} className="relative cursor-pointer text-dark-gray text-xl">
                            <FaShoppingBag />
                            <span className="absolute -top-2 -right-2 bg-primary-red text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                                {cartCount}
                            </span>
                        </Link>

                        {/* Mobile Toggle */}
                        <button className="text-2xl text-dark-gray" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-xl py-6 px-6 flex flex-col gap-4 border-t border-gray-100 max-h-[80vh] overflow-y-auto">

                        {user && (
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg mb-2">
                                <div className="w-10 h-10 rounded-full bg-primary-red text-white flex items-center justify-center text-lg font-bold">
                                    {user.email?.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex flex-col overflow-hidden">
                                    <span className="text-sm font-bold text-dark-gray truncate">{user.user_metadata?.full_name || 'User'}</span>
                                    <span className="text-xs text-gray-500 truncate">{user.email}</span>
                                </div>
                            </div>
                        )}

                        <Link to="/" className="font-bold text-dark-gray hover:text-primary-red" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        <a href="#popular-foods" className="font-bold text-dark-gray hover:text-primary-red" onClick={() => setMobileMenuOpen(false)}>Menu</a>
                        <a href="#popular-foods" className="font-bold text-dark-gray hover:text-primary-red" onClick={() => setMobileMenuOpen(false)}>Order Food</a>
                        <Link to="/cart" className="font-bold text-dark-gray hover:text-primary-red flex justify-between" onClick={handleCartClick}>
                            Cart <span className="bg-primary-red text-white text-xs px-2 py-0.5 rounded-full">{cartCount}</span>
                        </Link>
                        <a href="#blog" className="font-bold text-dark-gray hover:text-primary-red" onClick={() => setMobileMenuOpen(false)}>Blog</a>

                        <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100 mt-1">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Pages</span>
                            <a href="#about" className="font-bold text-dark-gray hover:text-primary-red text-sm" onClick={() => setMobileMenuOpen(false)}>About Us</a>
                            <a href="#gallery" className="font-bold text-dark-gray hover:text-primary-red text-sm" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
                            <a href="#testimonials" className="font-bold text-dark-gray hover:text-primary-red text-sm" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
                        </div>

                        <div className="h-px bg-gray-100 my-2"></div>

                        {user ? (
                            <>
                                <button className="font-bold text-dark-gray hover:text-primary-red text-left">My Profile</button>
                                <button className="font-bold text-dark-gray hover:text-primary-red text-left">My Orders</button>
                                <button onClick={handleLogout} className="font-bold text-red-500 text-left flex items-center gap-2"><FaSignOutAlt /> Sign Out</button>
                            </>
                        ) : (
                            <button onClick={() => { setMobileMenuOpen(false); onOpenAuth && onOpenAuth('login'); }} className="font-bold text-dark-gray hover:text-primary-red text-left">Login / Register</button>
                        )}

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

                        {!user && (
                            <button onClick={() => { setMobileMenuOpen(false); onOpenAuth && onOpenAuth('login'); }} className="bg-primary-red text-white px-6 py-3 rounded-full font-bold w-full uppercase text-sm tracking-wide flex items-center justify-center">
                                Order Online
                            </button>
                        )}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
