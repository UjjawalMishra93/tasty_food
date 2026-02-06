import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiUser, FiArrowRight } from 'react-icons/fi';

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName,
                    },
                },
            });

            if (error) throw error;

            // Check if email confirmation is required?
            // Usually Supabase requires email confirmation by default, but for dev it might be off.
            // I'll assume standard flow and just redirect or show a message.
            // But to keep it smooth, let's redirect to login or home.
            // "data.user" will be null if email confirmation is required and auto-confirm is off?
            // Actually, data.user is returned but session is null if email conf is required.

            if (data.session) {
                navigate('/');
            } else {
                // Assuming email confirmation is on, or just guide them to login
                alert('Registration successful! Please check your email to verify your account.');
                navigate('/login');
            }

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-900 relative overflow-hidden font-inter">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10"
            >
                <div className="p-8 md:p-10">
                    <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">Join Us</h2>
                    <p className="text-gray-400 mb-8">Start your culinary adventure today.</p>

                    {error && (
                        <div className="bg-red-500/20 text-red-200 text-sm p-3 rounded-lg mb-6 border border-red-500/30">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSignup} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
                            <div className="relative group">
                                <span className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-green-400 transition-colors">
                                    <FiUser size={20} />
                                </span>
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="w-full bg-black/20 text-white rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-green-400 focus:outline-none focus:bg-black/40 transition-all border border-transparent hover:border-white/10 placeholder-gray-600"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                            <div className="relative group">
                                <span className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-green-400 transition-colors">
                                    <FiMail size={20} />
                                </span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-black/20 text-white rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-green-400 focus:outline-none focus:bg-black/40 transition-all border border-transparent hover:border-white/10 placeholder-gray-600"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1">Password</label>
                            <div className="relative group">
                                <span className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-green-400 transition-colors">
                                    <FiLock size={20} />
                                </span>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-black/20 text-white rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-green-400 focus:outline-none focus:bg-black/40 transition-all border border-transparent hover:border-white/10 placeholder-gray-600"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-lg transform hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            <span>{loading ? 'Creating Account...' : 'Sign Up'}</span>
                            {!loading && <FiArrowRight className="group-hover:translate-x-1 transition-transform" />}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-gray-400 text-sm">
                            Already have an account?{' '}
                            <Link to="/login" className="text-green-400 hover:text-green-300 font-semibold hover:underline transition-all">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup;
