import React from 'react';
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

function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />

      <Offers />
      <About />
      <Delivery />
      <PopularFoods />
      <Testimonials />
      <Blog />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
