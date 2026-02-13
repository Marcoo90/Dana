import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeGate from './components/WelcomeGate';
import VideoGallery from './components/VideoGallery';
import InteractiveCard from './components/InteractiveCard';
import ActionSection from './components/ActionSection';
import SideDecorations from './components/SideDecorations';
import { CONFIG } from './config';
import { Heart, ChevronDown } from 'lucide-react';

function App() {
    const [isUnlocked, setIsUnlocked] = useState(false);

    useEffect(() => {
        // Check if previously unlocked in this session
        const unlocked = sessionStorage.getItem('dana_unlocked');
        if (unlocked) setIsUnlocked(true);
    }, []);

    const handleUnlock = () => {
        setIsUnlocked(true);
        sessionStorage.setItem('dana_unlocked', 'true');
    };

    return (
        <div className="relative min-h-screen bg-romantic-cream selection:bg-romantic-pink selection:text-white">
            <AnimatePresence>
                {!isUnlocked && (
                    <WelcomeGate key="gate" onUnlock={handleUnlock} />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isUnlocked && (
                    <motion.main
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-full"
                    >
                        {/* Floating Heart Indicator */}
                        <SideDecorations />
                        <div className="fixed top-6 right-6 z-40">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="bg-white/50 backdrop-blur-sm p-2 rounded-full shadow-sm"
                            >
                                <Heart className="text-romantic-pink-dark" fill="#F472B6" size={24} />
                            </motion.div>
                        </div>

                        {/* HERO SECTION */}
                        <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-4 text-center overflow-hidden">
                            <BackgroundPetals />

                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative z-10"
                            >
                                <h2 className="text-romantic-pink font-romance text-2xl md:text-3xl mb-2">
                                    {CONFIG.messages.heroTitle}
                                </h2>
                                <h1 className="text-5xl md:text-7xl font-romance text-romantic-pink-dark mb-6 drop-shadow-md">
                                    {CONFIG.messages.heroSubtitle}
                                </h1>

                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100px" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-1 bg-romantic-gold mx-auto mb-8 rounded-full"
                                />

                                <p className="max-w-xl mx-auto text-gray-700 text-lg md:text-xl font-modern leading-relaxed italic mb-10">
                                    "{CONFIG.messages.typewriterRef}"
                                </p>

                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => document.getElementById('message').scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-romantic-pink text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 mx-auto"
                                >
                                    Comenzar <ChevronDown size={20} />
                                </motion.button>
                            </motion.div>
                        </section>

                        {/* MESSAGE SECTION */}
                        <section id="message" className="py-32 px-4 bg-white/40">
                            <div className="max-w-3xl mx-auto text-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border-t-8 border-romantic-pink-light relative"
                                >
                                    <Heart className="absolute -top-6 left-1/2 -translate-x-1/2 text-romantic-pink bg-white rounded-full p-2 border-4 border-romantic-cream" size={50} fill="#F9A8D4" />

                                    <h3 className="text-3xl font-romance text-romantic-pink-dark mb-8">Mi Mensaje para Ti</h3>

                                    <div className="space-y-6 text-gray-700 text-lg md:text-xl font-modern leading-relaxed">
                                        <p>
                                            Quería crear algo especial para ti, algo que pudieras visitar siempre que quieras recordar lo mucho que significas para mí.
                                            y no solo para recordar hoy, si no todos los dias de tu vida.
                                        </p>
                                        <p>
                                            si me preguntas cuantas veces viniste a mi mente, diria solo una vez,porque llegaste y nunca te fuiste.
                                        </p>
                                        <p className="font-romance text-3xl text-romantic-pink pt-4">
                                            siempre te elegiré a tí, Damarys.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </section>

                        {/* VIDEO GALLERY SECTION */}
                        <VideoGallery videos={CONFIG.videos} />

                        {/* INTERACTIVE CARD SECTION */}
                        <InteractiveCard />

                        {/* FINAL ACTION SECTION */}
                        <ActionSection />

                    </motion.main>
                )}
            </AnimatePresence>
        </div>
    );
}

const BackgroundPetals = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(50)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        top: -50,
                        left: Math.random() * 100 + '%',
                        rotate: 0,
                        opacity: 0
                    }}
                    animate={{
                        top: '110%',
                        left: (Math.random() * 100 - 15) + '%',
                        rotate: 720,
                        opacity: [0, 1, 1, 0.8, 0]
                    }}
                    transition={{
                        duration: 6 + Math.random() * 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                    className="absolute"
                >
                    <div
                        className="w-5 h-8 rounded-full shadow-sm"
                        style={{
                            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                            backgroundColor: i % 2 === 0 ? '#F472B6' : '#F9A8D4', // Vibrant Pinks
                            filter: 'blur(0.3px)'
                        }}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default App;
