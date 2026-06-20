import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        id: 1,
        image: "/banner-paragliding.jpg",
        subtitle: "Welcome to Bir Billing",
        title: "Touch the Sky at 8,000ft",
        desc: "Experience the thrill of the World's 2nd Highest Paragliding Site."
    },
    {
        id: 2,
        image: "/banner-hills.jpg",
        subtitle: "Peace & Bonfires",
        title: "Sleep Under a Billion Stars",
        desc: "Premium camping experiences in the heart of the Himalayas."
    },
    {
        id: 3,
        image: "/hero-mist.jpg",
        subtitle: "Hidden Gems",
        title: "Explore the Unseen Trails",
        desc: "Guided treks to secret waterfalls and sunset points."
    }
];

const BannerCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 8000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full h-[550px] md:h-[750px] overflow-hidden bg-black group/carousel">
            {/* Sliding Container with Framer Motion for Native Swipe */}
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ 
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(_, info) => {
                        if (info.offset.x < -100) nextSlide();
                        if (info.offset.x > 100) prevSlide();
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    <div className="relative w-full h-full flex-shrink-0">
                        {/* Background Image with optimized overlay */}
                        <div className="absolute inset-0 bg-black/40 z-[1]" />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-[1]" />

                        <img
                            src={slides[currentIndex].image}
                            alt={slides[currentIndex].title}
                            className="w-full h-full object-cover transition-transform duration-[10s] ease-linear scale-110 group-hover/carousel:scale-100"
                        />

                        {/* Text Content - Responsive & Polished */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
                            <motion.span 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 backdrop-blur-md shadow-lg"
                            >
                                {slides[currentIndex].subtitle}
                            </motion.span>

                            <motion.h1 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-3xl md:text-7xl lg:text-8xl font-black text-white mb-6 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] leading-[1.1] tracking-tight max-w-5xl"
                            >
                                {slides[currentIndex].title}
                            </motion.h1>

                            <motion.p 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="text-white/80 text-base md:text-2xl max-w-2xl font-medium drop-shadow-lg leading-relaxed"
                            >
                                {slides[currentIndex].desc}
                            </motion.p>

                            <motion.div 
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="mt-8 h-1 w-20 bg-sky-500 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.5)]" 
                            />
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Premium Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-white/5 hover:bg-white/20 text-white rounded-full backdrop-blur-xl transition-all duration-300 border border-white/10 z-20 group active:scale-90"
            >
                <ChevronLeft size={24} className="md:w-[28px] group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-white/5 hover:bg-white/20 text-white rounded-full backdrop-blur-xl transition-all duration-300 border border-white/10 z-20 group active:scale-90"
            >
                <ChevronRight size={24} className="md:w-[28px] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Polished Indicator Dots */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`group relative h-2 transition-all duration-500 rounded-full ${index === currentIndex
                            ? "bg-white w-12"
                            : "bg-white/30 w-3 hover:bg-white/50"
                            }`}
                    >
                        {/* Hidden tooltip-like label or just bigger click area */}
                        <span className="absolute -inset-2 block" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BannerCarousel;