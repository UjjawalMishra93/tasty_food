import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AuthModal from '../components/AuthModal';
// import Categories from '../components/Categories'; // Not used in App.jsx currently but was imported? No, listed in open docs but not in App.jsx code I saw?
// Wait, looking at App.jsx viewed in Step 10:
// Categories was imported: import Categories from './components/Categories';
// But NOT used in the JSX?
// Ah, lines 4 & 5... Wait.
// Line 4: import Categories from './components/Categories';
// Line 17: useState("All Food")
// Line 22: <Hero ... />
// Line 26: <Offers />
// It seems Categories is NOT used in the JSX of App.jsx I saw in Step 10.
// I will check Step 10 again.
// Yes, Categories is imported but not used.
// However, PopularFoods uses selectedCategory.
// Maybe Categories is inside Hero? "Hero setSelectedCategory={setSelectedCategory}"
// Let's assume the code in App.jsx is correct as is.

import Offers from '../components/Offers';
import About from '../components/About';
import Delivery from '../components/Delivery';
import PopularFoods from '../components/PopularFoods';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

import RevealOnScroll from '../components/RevealOnScroll';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Food");
    const [authOpen, setAuthOpen] = useState(false);
    const [authMode, setAuthMode] = useState('login');

    const openAuth = (mode = 'login') => {
        setAuthMode(mode);
        setAuthOpen(true);
    };

    return (
        <div className="font-inter">
            <Navbar onOpenAuth={openAuth} />
            <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} initialMode={authMode} />
            <RevealOnScroll zIndex={20}>
                <Hero setSelectedCategory={setSelectedCategory} onOpenAuth={openAuth} />
            </RevealOnScroll>

            <RevealOnScroll>
                <Offers />
            </RevealOnScroll>

            <RevealOnScroll>
                <About />
            </RevealOnScroll>

            <RevealOnScroll>
                <Delivery />
            </RevealOnScroll>

            <RevealOnScroll>
                <PopularFoods selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </RevealOnScroll>

            <RevealOnScroll>
                <Testimonials />
            </RevealOnScroll>

            <RevealOnScroll>
                <Blog />
            </RevealOnScroll>

            <RevealOnScroll>
                <Gallery />
            </RevealOnScroll>

            <RevealOnScroll>
                <Footer />
            </RevealOnScroll>
        </div>
    );
}

export default Home;
