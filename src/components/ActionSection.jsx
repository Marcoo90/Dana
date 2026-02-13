import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Gift, Heart } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { CONFIG } from '../config';

const ActionSection = () => {
    const downloadPDF = () => {
        const doc = new jsPDF();

        // Add some "romantic" styling to PDF
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor(244, 114, 182); // romantic-pink-dark
        doc.text("Para mi hermosa Damarys", 105, 40, { align: "center" });

        doc.setFont("helvetica", "normal");
        doc.setFontSize(14);
        doc.setTextColor(50, 50, 50);

        const message = [
            "Hoy celebramos el amor, y no hay nadie con quien preferiría",
            "celebrarlo que contigo. Eres la chica con la que quiero estar.",
            "",
            "Este es un pequeño detalle de lo que siento por ti.",
            "Siempre estaré aquí para ti.",
            "",
            "Con todo mi cariño,",
            "Marco"
        ];

        let y = 60;
        message.forEach(line => {
            doc.text(line, 105, y, { align: "center" });
            y += 10;
        });

        doc.save("Recuerdo_Para_Dana.pdf");
    };

    return (
        <section className="py-32 px-4 bg-romantic-cream relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 p-10 opacity-10">
                <Heart size={200} fill="#F9A8D4" />
            </div>
            <div className="absolute bottom-0 left-0 p-10 opacity-10">
                <Heart size={150} fill="#F9A8D4" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border-b-8 border-romantic-mint"
                >
                    <h2 className="text-4xl md:text-5xl font-romance text-romantic-pink-dark mb-6">
                        ¿Quieres salir conmigo hoy?
                    </h2>
                    <p className="text-gray-600 font-modern text-lg mb-12 max-w-lg mx-auto leading-relaxed">
                        He planeado algo especial para nosotros. Haz clic abajo para ver a dónde iremos o para guardar esta sorpresita.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={CONFIG.googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto px-8 py-4 bg-romantic-mint-dark text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
                        >
                            <MapPin size={22} />
                            Ver ubicación de la cita
                        </motion.a>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={downloadPDF}
                            className="w-full md:w-auto px-8 py-4 bg-white border-2 border-romantic-pink text-romantic-pink-dark rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
                        >
                            <Download size={22} />
                            Descargar Recuerdo
                        </motion.button>
                    </div>

                    <div className="mt-12 flex justify-center gap-4 text-romantic-pink opacity-50">
                        <Gift size={24} />
                        <Heart size={24} fill="currentColor" />
                        <Star size={24} />
                    </div>
                </motion.div>

                <footer className="mt-20 text-gray-400 font-modern text-sm">
                    <p>Hecho con ❤️ para Damarys — 2026 @marco</p>
                </footer>
            </div>
        </section>
    );
};

const Star = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

export default ActionSection;
