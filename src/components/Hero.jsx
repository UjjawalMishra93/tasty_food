import React from 'react';
import Categories from './Categories';

const Hero = ({ setSelectedCategory }) => {
    return (
        <section className="relative bg-[#FAFAFA] pt-40 pb-32 lg:pt-52 lg:pb-48">
            {/* Background Wrapper with Overflow Hidden */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Background Texture/Splash */}
                <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full opacity-30 mix-blend-multiply flex items-center justify-center">
                    <img src="/hero-splash.png" className="w-[120%] h-[120%] object-contain opacity-50 absolute -right-20 top-0 text-gray-200" style={{ filter: 'grayscale(100%) opacity(0.2)' }} alt="" />
                </div>

                {/* Top Left Floating Chili */}
                <div className="absolute top-32 -left-10 w-24 h-24 rotate-45 blur-[1px] opacity-90 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
                    <img src="/floating-chili.png" alt="" className="w-full object-contain" />
                </div>

                {/* Top Left Floating Parsley (Small) */}
                <div className="absolute top-40 left-10 w-16 h-16 rotate-12 blur-[0.5px] opacity-80 hidden lg:block animate-float">
                    <img src="/floating-parsley.png" alt="" className="w-full object-contain" />
                </div>
            </div>


            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="lg:w-1/2 space-y-8 text-center lg:text-left relative z-20">
                        <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-dark-gray leading-[1.1]">
                            Welcome To <br />
                            Our Tasty <span className="text-primary-red relative inline-block">
                                Foods
                                {/* Yellow underline brush stroke */}
                                <svg className="absolute w-[110%] h-4 -bottom-2 -left-1 text-accent-yellow" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.00025 6.99997C25.7509 2.15582 120.257 -3.42866 195.539 2.50346" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-text-gray text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium opacity-80">
                            Egestas amet facilisis cras suspendisse orci volutpat.
                            Enim ut et amet vitae facilisi vel odio nisl. Pellentesque
                            malesuada massa proin cursus elit amet iaculis.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 pt-2 w-full sm:w-auto">
                            <button className="w-full sm:w-auto bg-accent-yellow text-dark-gray px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-transform hover:scale-105 shadow-[0_10px_20px_-5px_rgba(244,208,63,0.4)]">
                                Order Now
                            </button>
                            <button className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-dark-gray border border-gray-300 hover:border-dark-gray transition-colors bg-white">
                                Book a Table
                            </button>
                        </div>

                        {/* Bottom Left Floating Chili (Blurrier) */}
                        <div className="absolute bottom-0 -left-20 w-32 h-32 rotate-[120deg] blur-[2px] opacity-80 -z-10 hidden lg:block">
                            <img src="/floating-chili.png" alt="" className="w-full object-contain" />
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-1/2 relative perspective-1000 group">
                        {/* Background Splash/Grunge behind Burger */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 opacity-60">
                            <img src="/hero-splash.png" alt="" className="w-full h-full object-contain opacity-20 scale-125 lg:scale-150 rotate-12" />
                        </div>

                        {/* Main Burger */}
                        <div className="relative z-10 animate-float drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out">
                            <img
                                src="/hero-burger.png"
                                alt="Tasty Burger"
                                className="w-full max-w-[550px] mx-auto"
                            />
                        </div>

                        {/* Floating Tomato */}
                        <div className="absolute top-0 left-0 w-24 h-24 -translate-y-1/2 -translate-x-1/4 z-0 animate-float" style={{ animationDelay: '0.5s', animationDuration: '4s' }}>
                            <img src="/floating-tomato.png" alt="" className="w-full object-contain drop-shadow-lg rotate-[-15deg]" />
                        </div>

                        {/* Floating Chili Right */}
                        <div className="absolute bottom-20 -right-10 w-28 h-28 z-20 animate-float" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}>
                            <img src="/floating-chili.png" alt="" className="w-full object-contain drop-shadow-xl rotate-[30deg]" />
                        </div>

                        {/* Floating Parsley Bottom Left */}
                        <div className="absolute -bottom-10 left-10 w-24 h-24 z-20 animate-float" style={{ animationDelay: '2s', animationDuration: '5s' }}>
                            <img src="/floating-parsley.png" alt="" className="w-full object-contain drop-shadow-md rotate-[-45deg]" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Categories Section - Integrated */}
            <div className="absolute -bottom-12 w-full z-40 left-0">
                <Categories setSelectedCategory={setSelectedCategory} />
            </div>

            {/* Bottom Torn Paper Effect */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
                <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
