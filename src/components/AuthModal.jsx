import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';
import { FiMail, FiLock, FiUser, FiX, FiArrowRight } from 'react-icons/fi';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

import toast from 'react-hot-toast';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
    const [isLogin, setIsLogin] = useState(initialMode === 'login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Reset state when closing or switching
    React.useEffect(() => {
        if (isOpen) {
            setIsLogin(initialMode === 'login');
            setError(null);
            setEmail('');
            setPassword('');
            setFullName('');
        }
    }, [isOpen, initialMode]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;

                toast.success('Welcome back! Successfully logged in.', {
                    duration: 4000,
                    style: {
                        background: '#333',
                        color: '#fff',
                        fontWeight: 'bold',
                        borderRadius: '12px',
                        border: '1px solid #E63946',
                    },
                    iconTheme: {
                        primary: '#E63946',
                        secondary: '#fff',
                    },
                });
                onClose(); // Close modal on success
            } else {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: { full_name: fullName },
                    },
                });
                if (error) throw error;

                toast.success('Account created! Welcome to the family.', {
                    duration: 5000,
                    style: {
                        background: '#fff',
                        color: '#1B1B1B',
                        fontWeight: 'bold',
                        borderRadius: '12px',
                        border: '2px solid #F4D03F',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    },
                    icon: '🎉',
                });
                onClose(); // Auto-close on signup as requested
            }
        } catch (err) {
            setError(err.message);
            toast.error(err.message, {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
        } finally {
            setLoading(false);
        }
    };

    const toggleMode = () => {
        setIsLogin(!isLogin);
        setError(null);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Main Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative bg-white w-full max-w-[900px] h-[580px] rounded-3xl shadow-2xl overflow-hidden hidden md:flex"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-5 right-5 z-50 text-gray-500 hover:text-gray-800 transition-colors p-2 bg-white/50 rounded-full backdrop-blur-sm"
                        >
                            <FiX size={20} />
                        </button>

                        {/* Sign Up Form Container (Left Side - visible when !isLogin) -> Actually should be Right Side logic-wise for the slider pattern */}
                        <div
                            className={`absolute top-0 left-1/2 h-full w-1/2 flex flex-col items-center justify-center p-10 transition-all duration-700 ease-in-out ${isLogin ? 'opacity-0 z-10 translate-x-[20%]' : 'opacity-100 z-20 translate-x-0'}`}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">Create Account</h2>
                            <div className="flex gap-4 mb-6">
                                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"><FaGoogle /></button>
                                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"><FaFacebookF /></button>
                            </div>
                            <span className="text-gray-400 text-sm mb-6">or use your email for registration</span>

                            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                                <div className="bg-gray-100 p-3 rounded-lg flex items-center">
                                    <FiUser className="text-gray-400 mr-2" />
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        required={!isLogin}
                                    />
                                </div>
                                <div className="bg-gray-100 p-3 rounded-lg flex items-center">
                                    <FiMail className="text-gray-400 mr-2" />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required={!isLogin}
                                    />
                                </div>
                                <div className="bg-gray-100 p-3 rounded-lg flex items-center">
                                    <FiLock className="text-gray-400 mr-2" />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required={!isLogin}
                                    />
                                </div>
                                {error && <p className="text-red-500 text-xs text-center">{error}</p>}
                                <button type="submit" disabled={loading} className="mt-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all uppercase tracking-wider text-sm">
                                    {loading ? 'Signing Up...' : 'Sign Up'}
                                </button>
                            </form>
                        </div>

                        {/* Sign In Form Container (Right Side - visible when isLogin) */}
                        <div
                            className={`absolute top-0 left-0 h-full w-1/2 flex flex-col items-center justify-center p-10 transition-all duration-700 ease-in-out ${isLogin ? 'opacity-100 z-20 translate-x-0' : 'opacity-0 z-10 -translate-x-[20%]'}`}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign In</h2>
                            <div className="flex gap-4 mb-6">
                                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"><FaGoogle /></button>
                                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"><FaFacebookF /></button>
                            </div>
                            <span className="text-gray-400 text-sm mb-6">or use your account</span>

                            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                                <div className="bg-gray-100 p-3 rounded-lg flex items-center">
                                    <FiMail className="text-gray-400 mr-2" />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required={isLogin}
                                    />
                                </div>
                                <div className="bg-gray-100 p-3 rounded-lg flex items-center">
                                    <FiLock className="text-gray-400 mr-2" />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required={isLogin}
                                    />
                                </div>
                                <a href="#" className="text-xs text-gray-500 hover:text-gray-800 text-right w-full">Forgot your password?</a>

                                {error && <p className="text-red-500 text-xs text-center">{error}</p>}
                                <button type="submit" disabled={loading} className="mt-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all uppercase tracking-wider text-sm">
                                    {loading ? 'Signing In...' : 'Sign In'}
                                </button>
                            </form>
                        </div>

                        {/* Overlay Container (The Sliding Part) */}
                        <div
                            className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-[100] ${isLogin ? 'translate-x-0' : '-translate-x-full'}`}
                        >
                            <div className={`bg-primary-red relative -left-full h-full w-[200%] transition-transform duration-700 ease-in-out ${isLogin ? 'translate-x-0' : 'translate-x-1/2'}`}>

                                {/* Background Image for Texture */}
                                <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
                                    <img src="/hero-burger.png" className="w-full h-full object-cover scale-150 blur-[2px]" alt="Background Pattern" />
                                </div>
                                <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/40 to-transparent"></div>


                                {/* Overlay Left Panel (Shown when logic is Signup, prompts to Login) */}
                                <div className={`absolute top-0 flex flex-col items-center justify-center h-full w-1/2 px-10 text-center transition-transform duration-700 ease-in-out z-10 ${isLogin ? '-translate-x-[20%]' : 'translate-x-0'}`}>
                                    <h1 className="text-4xl font-extrabold text-white mb-4 font-poppins">Hungry for More?</h1>
                                    <p className="text-white/90 mb-8 leading-relaxed font-medium">
                                        Login to your account to order your favorite delicious food.
                                    </p>
                                    <button
                                        onClick={toggleMode}
                                        className="border-2 border-white text-white font-bold py-3 px-12 rounded-full uppercase tracking-wider hover:bg-white hover:text-primary-red transition-all shadow-lg"
                                    >
                                        Sign In
                                    </button>
                                </div>

                                {/* Overlay Right Panel (Shown when logic is Login, prompts to Signup) */}
                                <div className={`absolute top-0 right-0 flex flex-col items-center justify-center h-full w-1/2 px-10 text-center transition-transform duration-700 ease-in-out z-10 ${isLogin ? 'translate-x-0' : 'translate-x-[20%]'}`}>
                                    <h1 className="text-4xl font-extrabold text-white mb-4 font-poppins">Join the Feast!</h1>
                                    <p className="text-white/90 mb-8 leading-relaxed font-medium">
                                        Create an account and start your journey with the tastiest food in town.
                                    </p>
                                    <button
                                        onClick={toggleMode}
                                        className="border-2 border-white text-white font-bold py-3 px-12 rounded-full uppercase tracking-wider hover:bg-white hover:text-primary-red transition-all shadow-lg"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Floating Elements */}
                        <img src="/floating-tomato.png" className="absolute -bottom-10 -left-10 w-32 h-32 object-contain opacity-20 rotate-45 pointer-events-none z-0" alt="decoration" />
                        <img src="/floating-parsley.png" className="absolute -top-6 left-1/2 w-20 h-20 object-contain opacity-20 rotate-12 pointer-events-none z-0" alt="decoration" />
                        <img src="/floating-chili.png" className="absolute bottom-10 right-1/2 w-16 h-16 object-contain opacity-10 rotate-[120deg] pointer-events-none z-0" alt="decoration" />
                    </motion.div>

                    {/* Mobile Fallback - Simpler CardFlip or just Toggle */}
                    <div className="md:hidden relative w-full h-full max-w-sm mx-auto flex items-center justify-center">
                        <div className="bg-white p-8 rounded-2xl shadow-xl w-full">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-2xl font-bold text-gray-800">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
                                <button onClick={onClose} className="text-gray-500"><FiX size={24} /></button>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                {!isLogin && (
                                    <div className="bg-gray-100 p-3 rounded-lg flex items-center">
                                        <FiUser className="text-gray-400 mr-2" />
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            required={!isLogin}
                                        />
                                    </div>
                                )}
                                <div className="bg-gray-100 p-3 rounded-lg flex items-center">
                                    <FiMail className="text-gray-400 mr-2" />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="bg-gray-100 p-3 rounded-lg flex items-center">
                                    <FiLock className="text-gray-400 mr-2" />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                {error && <p className="text-red-500 text-xs">{error}</p>}

                                <button type="submit" disabled={loading} className="mt-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all uppercase tracking-wider text-sm">
                                    {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
                                </button>
                            </form>

                            <p className="mt-6 text-center text-sm text-gray-500">
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <button onClick={toggleMode} className="text-primary-red font-bold hover:underline">
                                    {isLogin ? 'Create one' : 'Sign in'}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AuthModal;
