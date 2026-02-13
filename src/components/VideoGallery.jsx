import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoGallery = ({ videos }) => {
    return (
        <section id="gallery" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-romance text-romantic-pink-dark mb-4">Recuerdos que llevo</h2>
                    <div className="h-1 w-20 bg-romantic-mint mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white p-4 rounded-[2rem] shadow-lg border border-romantic-pink-light overflow-hidden"
                        >
                            <div className="aspect-[9/16] relative rounded-2xl overflow-hidden bg-romantic-cream">
                                <video
                                    src={video}
                                    className="w-full h-full object-cover"
                                    controls
                                    playsInline
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
                                    <div className="bg-white/30 p-4 rounded-full backdrop-blur-sm">
                                        <Play className="text-white fill-white" size={32} />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <p className="font-romance text-xl text-romantic-pink-dark">Momento #{index + 1}</p>
                                <p className="text-sm text-gray-500 font-modern italic">Un recuerdo especial...</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoGallery;
