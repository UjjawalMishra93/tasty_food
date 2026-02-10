import React, { useState, useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
    { src: '/gallery-1.png', span: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2', alt: 'Delicious Burger' },
    { src: '/food-pasta.png', span: 'col-span-1', alt: 'Italian Pasta' },
    { src: '/gallery-2.png', span: 'col-span-1', alt: 'Crispy Fries' },
    { src: '/gallery-3.png', span: 'col-span-1 md:col-span-2', alt: 'Family Combo' },
    { src: '/gallery-4.png', span: 'col-span-1', alt: 'Dessert' },
    { src: '/hero-burger.png', span: 'col-span-1', alt: 'Signature Burger' },
];

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openLightbox = (index) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const nextImage = (e) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    return (
        <section id="gallery" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary-red font-bold tracking-wider uppercase text-sm">Our Gallery</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-dark-gray mt-2">
                        Food <span className="text-primary-red">Moments</span>
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-lg mx-auto">
                        Peek inside our kitchen and see the love we put into every dish.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {galleryImages.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer ${item.span}`}
                            onClick={() => openLightbox(index)}
                            layoutId={`gallery-img-${index}`}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.alt}
                                </h3>
                                <div className="h-1 w-12 bg-accent-yellow rounded-full mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-[100000] focus:outline-none backdrop-blur-sm group border border-white/10"
                            onClick={closeLightbox}
                        >
                            <FaTimes className="text-2xl group-hover:scale-110 transition-transform" />
                        </button>

                        {/* Prev Button */}
                        <button
                            className="absolute left-4 md:left-8 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-50 focus:outline-none backdrop-blur-sm border border-white/10 hidden md:block"
                            onClick={prevImage}
                        >
                            <FaChevronLeft className="text-2xl" />
                        </button>

                        {/* Image Container */}
                        <div className="relative max-w-6xl max-h-[90vh] w-full flex items-center justify-center p-2" onClick={(e) => e.stopPropagation()}>
                            <motion.img
                                key={selectedIndex}
                                src={galleryImages[selectedIndex].src}
                                alt={galleryImages[selectedIndex].alt}
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(e, { offset, velocity }) => {
                                    if (offset.x > 100) {
                                        prevImage(e);
                                    } else if (offset.x < -100) {
                                        nextImage(e);
                                    }
                                }}
                            />
                            <div className="absolute -bottom-12 left-0 w-full text-center text-white/90">
                                <h3 className="text-xl font-bold tracking-wide">{galleryImages[selectedIndex].alt}</h3>
                            </div>
                        </div>

                        {/* Next Button */}
                        <button
                            className="absolute right-4 md:right-8 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-50 focus:outline-none backdrop-blur-sm border border-white/10 hidden md:block"
                            onClick={nextImage}
                        >
                            <FaChevronRight className="text-2xl" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
