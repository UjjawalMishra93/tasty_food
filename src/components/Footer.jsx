import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-light-gray pt-16 pb-8 border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-2xl shadow-lg relative -mt-32 mb-16 z-20">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold font-poppins text-dark-gray">
                            Tasty <span className="text-primary-red">Foods</span>
                        </h3>
                        <p className="text-text-gray text-sm">Subscribe Our Newsletter</p>
                    </div>
                    <div className="flex flex-1 max-w-md gap-2 w-full">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary-red bg-light-gray"
                        />
                        <button className="bg-dark-gray text-white px-6 py-3 rounded-full font-bold hover:bg-primary-red transition-colors flex items-center justify-center">
                            <span className="hidden sm:inline">Subscribe</span>
                            <FaPaperPlane className="sm:hidden" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-poppins text-dark-gray">
                            Tasty <span className="text-primary-red">Foods</span>
                        </h3>
                        <p className="text-text-gray text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aliquam at dignissim nunc, id maximus ex.
                            Etiam nec dignissim elit, at dig nissim enim.
                        </p>
                        <div className="flex gap-4">
                            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-dark-gray hover:bg-primary-red hover:text-white transition-colors">
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-dark-gray mb-6 text-lg">Usefull Links</h4>
                        <ul className="space-y-3 text-text-gray text-sm font-medium">
                            <li><a href="#" className="hover:text-primary-red transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-primary-red transition-colors">Menu</a></li>
                            <li><a href="#" className="hover:text-primary-red transition-colors">Testimonial</a></li>
                            <li><a href="#" className="hover:text-primary-red transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-primary-red transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* More Links */}
                    <div>
                        <h4 className="font-bold text-dark-gray mb-6 text-lg">Our Menu</h4>
                        <ul className="space-y-3 text-text-gray text-sm font-medium">
                            <li><a href="#" className="hover:text-primary-red transition-colors">Burgers</a></li>
                            <li><a href="#" className="hover:text-primary-red transition-colors">Pasta</a></li>
                            <li><a href="#" className="hover:text-primary-red transition-colors">Pizza</a></li>
                            <li><a href="#" className="hover:text-primary-red transition-colors">Cold Drinks</a></li>
                            <li><a href="#" className="hover:text-primary-red transition-colors">Desserts</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-dark-gray mb-6 text-lg">Contact Us</h4>
                        <ul className="space-y-4 text-text-gray text-sm">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-primary-red mt-1" />
                                <span>1234, Park Street Avenue,<br /> NewYork city.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhoneAlt className="text-primary-red" />
                                <span>+123 456 7890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-primary-red" />
                                <span>admin@tastyfoods.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary-red font-bold">Open: </span>
                                <span>09:00 AM - 09:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-gray">
                    <p>Copyright © 2024 TastyFoods. All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-primary-red">Terms & Conditions</a>
                        <a href="#" className="hover:text-primary-red">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
