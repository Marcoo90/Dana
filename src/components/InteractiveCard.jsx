import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Victorian Origami Letter Component - 3 Phases
const InteractiveCard = () => {
    const [phase, setPhase] = useState(0); // 0: Closed, 1: Star, 2: Full Open

    const handleClick = () => {
        setPhase((prev) => (prev + 1) % 3);
    };

    return (
        <section
            id="card"
            className="relative py-32 bg-gradient-to-b from-romantic-cream to-romantic-mint-light/20 px-4 overflow-visible"
            style={{ minHeight: phase === 2 ? '1200px' : '900px' }}
        >
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <h2 className="text-5xl font-romance text-romantic-pink-dark mb-4">
                    {phase === 0 ? "Un Secreto Sellado" : phase === 1 ? "Un paso mas para revelar" : "Una muestra de lo que siento por ti."}
                </h2>
                <p className="text-gray-600 italic font-modern">
                    {phase === 0 ? "Toca para abrir el sobre..." : phase === 1 ? "Toca para desplegar completamente..." : "Toca para volver a cerrar"}
                </p>
            </motion.div>

            {/* Main Origami Container */}
            <div className="flex items-center justify-center">
                <motion.div
                    layout
                    animate={{
                        width: phase === 0 ? 350 : phase === 1 ? 550 : 900,
                        height: phase === 0 ? 350 : phase === 1 ? 550 : 900,
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="relative cursor-pointer"
                    style={{ transformStyle: 'preserve-3d', perspective: '2000px' }}
                    onClick={handleClick}
                >
                    {/* PHASE 2: FULLY OPEN SHEET */}
                    <AnimatePresence>
                        {phase === 2 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6 }}
                                className="absolute inset-0 bg-[#F5EFE7] border-8 border-[#8B7355] shadow-2xl overflow-hidden"
                                style={{
                                    backgroundImage: `
                    linear-gradient(90deg, rgba(139,115,85,0.03) 1px, transparent 1px),
                    linear-gradient(rgba(139,115,85,0.03) 1px, transparent 1px)
                  `,
                                    backgroundSize: '20px 20px'
                                }}
                            >
                                {/* Ornate Border */}
                                <div className="absolute inset-4 border-4 border-double border-[#8B7355]/30 pointer-events-none" />
                                <div className="absolute inset-8 border border-[#8B7355]/20 pointer-events-none" />

                                {/* Top Left: Castle */}
                                <svg className="absolute top-12 left-12 w-32 h-32 opacity-40" viewBox="0 0 100 100">
                                    <path d="M20 80V50L30 40L40 50V80M60 80V40L70 30L80 40V80M30 40V20L35 15L40 20V40" fill="#2D1B13" />
                                    <rect x="25" y="60" width="10" height="20" fill="#1A1A1A" />
                                    <circle cx="85" cy="25" r="12" fill="#D4AF37" opacity="0.3" />
                                </svg>

                                {/* Top Right: Roses */}
                                <div className="absolute top-12 right-12 grid grid-cols-3 gap-2">
                                    {[...Array(6)].map((_, i) => (
                                        <svg key={i} className="w-10 h-10" viewBox="0 0 40 40">
                                            <circle cx="20" cy="20" r="8" fill="#8B0000" opacity="0.6" />
                                            <circle cx="20" cy="20" r="5" fill="#A52A2A" opacity="0.8" />
                                            <path d="M20 12C25 12 28 15 28 20" stroke="#5D1F1F" strokeWidth="1" fill="none" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Left Side: Anatomical Heart */}
                                <svg className="absolute left-8 top-1/2 -translate-y-1/2 w-24 h-24 opacity-30" viewBox="0 0 100 100">
                                    <path d="M50 85C40 75 25 60 25 45C25 35 32 28 40 28C45 28 48 31 50 35C52 31 55 28 60 28C68 28 75 35 75 45C75 60 60 75 50 85Z"
                                        fill="#8B0000" stroke="#5D1F1F" strokeWidth="2" />
                                    <path d="M50 40L50 70M45 50L55 50" stroke="#FFF" strokeWidth="2" opacity="0.4" />
                                </svg>

                                {/* Right Side: Anatomical Heart (mirrored) */}
                                <svg className="absolute right-8 top-1/2 -translate-y-1/2 w-24 h-24 opacity-30 scale-x-[-1]" viewBox="0 0 100 100">
                                    <path d="M50 85C40 75 25 60 25 45C25 35 32 28 40 28C45 28 48 31 50 35C52 31 55 28 60 28C68 28 75 35 75 45C75 60 60 75 50 85Z"
                                        fill="#8B0000" stroke="#5D1F1F" strokeWidth="2" />
                                </svg>

                                {/* Bottom Left: Bats */}
                                <div className="absolute bottom-12 left-12 flex gap-3">
                                    {[...Array(3)].map((_, i) => (
                                        <svg key={i} className="w-12 h-12 opacity-20" viewBox="0 0 40 40">
                                            <path d="M20 20C15 15 5 15 2 25C5 25 10 22 15 25C15 28 20 30 20 30C20 30 25 28 25 25C30 22 35 25 38 25C35 15 25 15 20 20Z"
                                                fill="#1A1A1A" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Bottom Right: More Roses */}
                                <div className="absolute bottom-12 right-12 flex gap-2">
                                    {[...Array(4)].map((_, i) => (
                                        <svg key={i} className="w-12 h-12" viewBox="0 0 40 40">
                                            <circle cx="20" cy="20" r="9" fill="#8B0000" opacity="0.5" />
                                            <circle cx="20" cy="20" r="6" fill="#A52A2A" opacity="0.7" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Central Message Area */}
                                <div className="absolute inset-0 flex items-center justify-center p-20">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="max-w-2xl text-center bg-white/40 backdrop-blur-sm p-12 rounded-3xl border-2 border-[#8B7355]/20"
                                    >
                                        {/* Decorative Heart at Top */}
                                        <svg className="w-16 h-16 mx-auto mb-6" viewBox="0 0 100 100">
                                            <path d="M50 85C40 75 25 60 25 45C25 35 32 28 40 28C45 28 48 31 50 35C52 31 55 28 60 28C68 28 75 35 75 45C75 60 60 75 50 85Z"
                                                fill="#F9A8D4" stroke="#8B0000" strokeWidth="2" />
                                        </svg>

                                        <h3 className="font-romance text-6xl text-[#8B0000] mb-8 italic">
                                            Para Damarys
                                        </h3>

                                        <div className="space-y-6 font-romance text-2xl text-gray-800 leading-relaxed">
                                            <p className="italic">"En cada pliegue de esta carta,</p>
                                            <p className="italic">he guardado un pedazo de mi alma."</p>
                                            <p className="mt-8">"Eres la llave que abre mi corazón,</p>
                                            <p>el castillo donde habita mi amor,</p>
                                            <p>y la rosa que florece en mi jardín eterno."</p>
                                        </div>

                                        <div className="mt-12 pt-8 border-t-2 border-[#8B7355]/20">
                                            <p className="font-romance text-xl text-gray-600">con mucho cariño,</p>
                                            <p className="font-romance text-3xl text-[#8B0000] mt-2">princesa hermosa</p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Corner Decorations */}
                                <svg className="absolute top-4 left-4 w-16 h-16 opacity-30" viewBox="0 0 40 40">
                                    <path d="M0 0L20 0C20 10 10 20 0 20Z" fill="#8B7355" />
                                </svg>
                                <svg className="absolute top-4 right-4 w-16 h-16 opacity-30 rotate-90" viewBox="0 0 40 40">
                                    <path d="M0 0L20 0C20 10 10 20 0 20Z" fill="#8B7355" />
                                </svg>
                                <svg className="absolute bottom-4 left-4 w-16 h-16 opacity-30 -rotate-90" viewBox="0 0 40 40">
                                    <path d="M0 0L20 0C20 10 10 20 0 20Z" fill="#8B7355" />
                                </svg>
                                <svg className="absolute bottom-4 right-4 w-16 h-16 opacity-30 rotate-180" viewBox="0 0 40 40">
                                    <path d="M0 0L20 0C20 10 10 20 0 20Z" fill="#8B7355" />
                                </svg>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* PHASE 1: STAR/CROSS SHAPE */}
                    <AnimatePresence>
                        {phase >= 1 && phase < 2 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                className="absolute inset-0"
                            >
                                {/* Center Square with Heart */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-3/5 h-3/5 bg-[#F5EFE7] border-4 border-[#8B7355] shadow-xl flex items-center justify-center">
                                        <svg className="w-32 h-32" viewBox="0 0 100 100">
                                            <path d="M50 85C40 75 25 60 25 45C25 35 32 28 40 28C45 28 48 31 50 35C52 31 55 28 60 28C68 28 75 35 75 45C75 60 60 75 50 85Z"
                                                fill="#8B0000" stroke="#5D1F1F" strokeWidth="2" />
                                            <rect x="48" y="50" width="4" height="12" rx="2" fill="#D4AF37" />
                                            <circle cx="50" cy="48" r="3" fill="#D4AF37" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Four Triangle Flaps */}
                                {/* Top Flap */}
                                <TriangleFlap
                                    position="top"
                                    isOpen={phase >= 1}
                                    decoration={
                                        <svg className="w-16 h-16" viewBox="0 0 40 40">
                                            <path d="M20 20C15 15 5 15 2 25C5 25 10 22 15 25C15 28 20 30 20 30C20 30 25 28 25 25C30 22 35 25 38 25C35 15 25 15 20 20Z"
                                                fill="#1A1A1A" opacity="0.4" />
                                        </svg>
                                    }
                                />

                                {/* Right Flap */}
                                <TriangleFlap
                                    position="right"
                                    isOpen={phase >= 1}
                                    decoration={
                                        <svg className="w-16 h-16" viewBox="0 0 40 40">
                                            <circle cx="20" cy="20" r="8" fill="#8B0000" opacity="0.6" />
                                            <circle cx="20" cy="20" r="5" fill="#A52A2A" opacity="0.8" />
                                        </svg>
                                    }
                                />

                                {/* Bottom Flap */}
                                <TriangleFlap
                                    position="bottom"
                                    isOpen={phase >= 1}
                                    decoration={
                                        <svg className="w-16 h-16" viewBox="0 0 40 40">
                                            <path d="M20 20C15 15 5 15 2 25C5 25 10 22 15 25C15 28 20 30 20 30C20 30 25 28 25 25C30 22 35 25 38 25C35 15 25 15 20 20Z"
                                                fill="#1A1A1A" opacity="0.4" />
                                        </svg>
                                    }
                                />

                                {/* Left Flap */}
                                <TriangleFlap
                                    position="left"
                                    isOpen={phase >= 1}
                                    decoration={
                                        <svg className="w-16 h-16" viewBox="0 0 40 40">
                                            <circle cx="20" cy="20" r="8" fill="#8B0000" opacity="0.6" />
                                            <circle cx="20" cy="20" r="5" fill="#A52A2A" opacity="0.8" />
                                        </svg>
                                    }
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* PHASE 0: CLOSED ENVELOPE */}
                    <AnimatePresence>
                        {phase === 0 && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0, rotateY: 15 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 bg-[#E8DCC8] border-4 border-[#8B7355] shadow-2xl"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B7355' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                                }}
                            >
                                {/* Ornate Key in Center */}
                                <div className="absolute inset-0 flex items-center justify-center rotate-45">
                                    <svg className="w-48 h-48 opacity-70" viewBox="0 0 100 100">
                                        {/* Key Circle */}
                                        <circle cx="35" cy="35" r="15" fill="none" stroke="#5D4037" strokeWidth="3" />
                                        <circle cx="35" cy="35" r="8" fill="none" stroke="#5D4037" strokeWidth="2" />
                                        <line x1="35" y1="27" x2="35" y2="43" stroke="#5D4037" strokeWidth="1.5" />
                                        <line x1="27" y1="35" x2="43" y2="35" stroke="#5D4037" strokeWidth="1.5" />

                                        {/* Key Shaft */}
                                        <rect x="48" y="32" width="35" height="6" fill="#5D4037" rx="1" />

                                        {/* Key Teeth */}
                                        <rect x="70" y="38" width="4" height="6" fill="#5D4037" />
                                        <rect x="78" y="38" width="4" height="8" fill="#5D4037" />
                                    </svg>
                                </div>

                                {/* Decorative Corners */}
                                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#8B7355]/40" />
                                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#8B7355]/40" />
                                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#8B7355]/40" />
                                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#8B7355]/40" />

                                {/* "Open Me" Text */}
                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-romance text-xl text-[#5D4037] opacity-60">
                                    Abre el Secreto
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Phase Indicator */}
            <motion.div
                className="text-center mt-16 font-romance text-lg text-romantic-pink-dark/60 tracking-widest"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                {phase === 0 ? "• FASE I •" : phase === 1 ? "• FASE II •" : "• FASE III •"}
            </motion.div>
        </section>
    );
};

// Triangle Flap Component for Star Phase
const TriangleFlap = ({ position, isOpen, decoration }) => {
    const getTransform = () => {
        switch (position) {
            case 'top': return { rotateX: isOpen ? -180 : 0, originY: '100%' };
            case 'bottom': return { rotateX: isOpen ? 180 : 0, originY: '0%' };
            case 'left': return { rotateY: isOpen ? -180 : 0, originX: '100%' };
            case 'right': return { rotateY: isOpen ? 180 : 0, originX: '0%' };
            default: return {};
        }
    };

    const getClipPath = () => {
        switch (position) {
            case 'top': return 'polygon(0 0, 100% 0, 50% 100%)';
            case 'bottom': return 'polygon(0 100%, 100% 100%, 50% 0)';
            case 'left': return 'polygon(0 0, 0 100%, 100% 50%)';
            case 'right': return 'polygon(100% 0, 100% 100%, 0 50%)';
            default: return '';
        }
    };

    const getPosition = () => {
        switch (position) {
            case 'top': return 'top-0 left-0 right-0 h-1/2';
            case 'bottom': return 'bottom-0 left-0 right-0 h-1/2';
            case 'left': return 'left-0 top-0 bottom-0 w-1/2';
            case 'right': return 'right-0 top-0 bottom-0 w-1/2';
            default: return '';
        }
    };

    return (
        <motion.div
            animate={getTransform()}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`absolute ${getPosition()} bg-[#E8DCC8] border-2 border-[#8B7355] flex items-center justify-center`}
            style={{
                clipPath: getClipPath(),
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden'
            }}
        >
            <div className="opacity-60">
                {decoration}
            </div>
        </motion.div>
    );
};

export default InteractiveCard;
