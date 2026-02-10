import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const posts = [
    {
        id: 1,
        title: 'How to make a perfect burger at home',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat...',
        img: '/blog-1.png'
    },
    {
        id: 2,
        title: 'The secret ingredient in our pasta',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat...',
        img: '/blog-2.png'
    },
    {
        id: 3,
        title: 'Top 5 delicious pizza recipes',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat...',
        img: '/blog-3.png'
    },
];

const Blog = () => {
    return (
        <section id="blog" className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold font-poppins text-center text-dark-gray mb-12">
                    Our Latest Foods <span className="text-primary-red">News</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div key={post.id} className="group cursor-pointer">
                            <div className="overflow-hidden rounded-2xl mb-4 relative h-60">
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-dark-gray mb-2 group-hover:text-primary-red transition-colors">{post.title}</h3>
                                <p className="text-text-gray text-sm mb-3">{post.desc}</p>
                                <button className="text-primary-red font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                    Read More <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
