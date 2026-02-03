
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#F9FAFB] pt-24 pb-12 torn-paper-top relative z-10">
            <div className="container mx-auto px-6 md:px-12">

                {/* Newsletter Section - Floating */}
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-center relative -mt-40 mb-20 z-20 border border-gray-100">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h3 className="text-3xl font-bold font-poppins text-dark-gray mb-2">
                            Tasty <span className="text-primary-red">Foods</span>
                        </h3>
                        <p className="text-gray-500 font-medium">Subscribe Our Newsletter</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto min-w-[300px] lg:min-w-[400px]">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-full border border-gray-200 bg-gray-50 text-gray-700 outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all"
                        />
                        <button className="bg-[#1B1B1B] text-white px-8 py-4 rounded-full font-bold hover:bg-primary-red transition-colors shadow-lg transform hover:-translate-y-0.5 duration-200">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold font-poppins text-dark-gray">
                            Tasty <span className="text-primary-red">Foods</span>
                        </h3>
                        <p className="text-text-gray text-sm leading-relaxed max-w-xs">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aliquam at dignissim nunc, id maximus ex.
                            Etiam nec dignissim elit, at dig nissim enim.
                        </p>
                        <div className="flex gap-3">
                            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-dark-gray hover:bg-primary-red hover:text-white hover:border-primary-red transition-all duration-300 transform hover:scale-110">
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-dark-gray mb-6 text-lg">Usefull Links</h4>
                        <ul className="space-y-3 text-text-gray text-sm font-medium">
                            {['About', 'Menu', 'Testimonial', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-primary-red transition-colors flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-2 h-[2px] bg-primary-red transition-all duration-300"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Menu */}
                    <div>
                        <h4 className="font-bold text-dark-gray mb-6 text-lg">Our Menu</h4>
                        <ul className="space-y-3 text-text-gray text-sm font-medium">
                            {['Burgers', 'Pasta', 'Pizza', 'Cold Drinks', 'Desserts'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-primary-red transition-colors flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-2 h-[2px] bg-primary-red transition-all duration-300"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-dark-gray mb-6 text-lg">Contact Us</h4>
                        <ul className="space-y-4 text-text-gray text-sm">
                            <li className="flex items-start gap-4">
                                <FaMapMarkerAlt className="text-primary-red mt-1 shrink-0" size={16} />
                                <span className="leading-tight">1234, Park Street Avenue,<br /> NewYork city.</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <FaPhoneAlt className="text-primary-red shrink-0" size={14} />
                                <span>+123 456 7890</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <FaEnvelope className="text-primary-red shrink-0" size={14} />
                                <span>admin@tastyfoods.com</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-primary-red font-bold text-sm">Open:</span>
                                <span>09:00 AM - 09:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>Copyright © 2024 TastyFoods. All Rights Reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0 font-medium">
                        <a href="#" className="hover:text-primary-red transition-colors">Terms & Conditions</a>
                        <a href="#" className="hover:text-primary-red transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
