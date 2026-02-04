import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Offers from './components/Offers';
import About from './components/About';
import Delivery from './components/Delivery';
import PopularFoods from './components/PopularFoods';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

import RevealOnScroll from './components/RevealOnScroll';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Food");
  return (
    <div className="font-inter">
      <Navbar />
      <RevealOnScroll zIndex={20}>
        <Hero setSelectedCategory={setSelectedCategory} />
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

export default App;
