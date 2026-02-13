import React from 'react';
import { motion } from 'framer-motion';

const TulipSVG = ({ color = "#F9A8D4" }) => (
    <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 60V35" stroke="#10B981" strokeWidth="2" />
        <path d="M20 45C20 45 10 40 10 30C10 20 20 15 20 15C20 15 30 20 30 30C30 40 20 45 20 45Z" fill={color} />
        <path d="M20 15C15 18 12 25 12 30C12 35 15 40 20 42" stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeLinecap="round" />
    </svg>
);

const RoseSVG = ({ color = "#F472B6" }) => (
    <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 60V35" stroke="#059669" strokeWidth="2" />
        <circle cx="20" cy="25" r="15" fill={color} />
        <path d="M20 15C25 15 30 20 30 25C30 30 25 35 20 35C15 35 10 30 10 25C10 20 15 15 20 15Z" fill={color} />
        <path d="M20 20C22 20 25 22 25 25C25 28 22 30 20 30C18 30 15 28 15 25C15 22 18 20 20 20Z" fill="rgba(0,0,0,0.1)" />
    </svg>
);

const SideDecorations = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Left Side */}
            <div className="absolute left-0 top-0 bottom-0 w-24 flex flex-col justify-around items-center opacity-40 md:opacity-80">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={`left-${i}`}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.2, duration: 1 }}
                        className="relative"
                    >
                        {i % 2 === 0 ? <RoseSVG /> : <TulipSVG />}
                    </motion.div>
                ))}
            </div>

            {/* Right Side */}
            <div className="absolute right-0 top-0 bottom-0 w-24 flex flex-col justify-around items-center opacity-40 md:opacity-80">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={`right-${i}`}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.2 + 0.1, duration: 1 }}
                        className="relative"
                    >
                        {i % 2 === 0 ? <TulipSVG color="#FBCFE8" /> : <RoseSVG color="#FB7185" />}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SideDecorations;
