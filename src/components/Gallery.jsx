import React from 'react';

const images = [
    '/gallery-1.png',
    '/gallery-2.png',
    '/gallery-3.png',
    '/gallery-4.png',
];

const Gallery = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold font-poppins text-center text-dark-gray mb-12">
                    Foods <span className="text-primary-red">Gallery</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img, idx) => (
                        <div key={idx} className="overflow-hidden rounded-xl h-64 relative group">
                            <img
                                src={img}
                                alt="Gallery"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold text-xl">+</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
