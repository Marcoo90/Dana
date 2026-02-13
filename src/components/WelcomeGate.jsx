import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Lock, Unlock } from 'lucide-react';
import { CONFIG } from '../config';

const WelcomeGate = ({ onUnlock }) => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [showHint, setShowHint] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const normalizedInput = name.trim().toLowerCase();
        const normalizedTarget = CONFIG.correctName.toLowerCase();
        const normalizedSecondary = CONFIG.secondaryName.toLowerCase();

        if (normalizedInput === normalizedTarget || normalizedInput === normalizedSecondary) {
            setError('');
            setIsExiting(true);
            setTimeout(() => onUnlock(), 1000);
        } else {
            setAttempts(prev => prev + 1);
            setError(CONFIG.messages.error);
            if (attempts + 1 >= 2) {
                setShowHint(true);
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-romantic-cream px-4 overflow-hidden"
        >
            {/* Background Petals (Simple CSS Animation) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            top: -20,
                            left: Math.random() * 100 + '%',
                            rotate: 0
                        }}
                        animate={{
                            top: '110%',
                            left: (Math.random() * 100 - 10) + '%',
                            rotate: 360
                        }}
                        transition={{
                            duration: 5 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute text-romantic-pink-light opacity-60"
                    >
                        <Heart size={20 + Math.random() * 20} fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border-4 border-romantic-pink-light relative z-10 text-center"
            >
                <div className="flex justify-center mb-6">
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="p-4 bg-romantic-pink-light rounded-full"
                    >
                        {isExiting ? (
                            <Unlock className="text-romantic-pink-dark" size={32} />
                        ) : (
                            <Lock className="text-romantic-pink-dark" size={32} />
                        )}
                    </motion.div>
                </div>

                <h1 className="text-3xl font-romance text-romantic-pink-dark mb-4 drop-shadow-sm">
                    {CONFIG.messages.welcome}
                </h1>
                <p className="text-gray-600 mb-8 font-modern">
                    {CONFIG.messages.prompt}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Escribe tu nombre..."
                            className="w-full px-6 py-4 bg-romantic-cream border-2 border-transparent focus:border-romantic-pink rounded-2xl outline-none transition-all text-center text-lg font-modern text-gray-700 placeholder:text-gray-400"
                            disabled={isExiting}
                            autoFocus
                        />
                    </div>

                    <AnimatePresence mode="wait">
                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-romantic-pink-dark text-sm font-medium"
                            >
                                {error}
                            </motion.p>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {showHint && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-romantic-mint-light p-3 rounded-xl border border-romantic-mint text-romantic-mint-dark text-xs"
                            >
                                <span className="font-bold">Pista:</span> {CONFIG.hints[attempts % CONFIG.hints.length]}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={!name.trim() || isExiting}
                        className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${isExiting
                                ? 'bg-romantic-mint-dark text-white'
                                : 'bg-romantic-pink hover:bg-romantic-pink-dark text-white'
                            } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                        {isExiting ? CONFIG.messages.success : 'Abrir Sorpresa'}
                        {!isExiting && <Heart size={18} fill="currentColor" />}
                    </motion.button>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default WelcomeGate;
