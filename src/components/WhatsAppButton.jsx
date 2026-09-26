import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    const phoneNumber = "916230044384"; // Bir Billing Guide's number
    const message = "Hi Bir Billing Guide team, I am interested in booking an adventure in Bir Billing...";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const handleChatClick = () => {
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="fixed bottom-6 left-6 z-[100] flex items-center">
            <motion.button
                onClick={handleChatClick}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 group"
                aria-label="Chat with us on WhatsApp"
            >
                {/* Ping Animation Rings */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

                {/* WhatsApp Logo */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7"
                >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.42 1.452 5.568 0 10.1-4.524 10.104-10.081.002-2.692-1.047-5.223-2.951-7.13-1.905-1.905-4.439-2.95-7.126-2.951-5.57 0-10.105 4.526-10.11 10.085-.002 1.934.504 3.824 1.467 5.426l-.963 3.516 3.6-.948zm10.18-5.326c-.28-.14-1.65-.815-1.906-.907-.255-.094-.441-.14-.626.14-.185.28-.714.907-.874 1.093-.16.186-.32.21-.6.07-1.157-.577-1.968-1.026-2.753-2.37-.2-.345.2-.32.572-1.065.06-.12.03-.223-.015-.315-.045-.091-.441-1.06-.604-1.453-.158-.38-.322-.33-.442-.336-.113-.005-.244-.006-.374-.006-.13 0-.342.049-.52.246-.178.197-.68.665-.68 1.621 0 .956.697 1.88.794 2.012.096.13 1.373 2.1 3.325 2.94.465.2.827.321 1.11.41.468.15.894.13 1.23.08.374-.055 1.65-.675 1.88-1.326.23-.65.23-1.207.16-1.325-.07-.11-.26-.2-.54-.34z" />
                </svg>

                {/* Tooltip on Hover */}
                <div className="absolute left-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-slate-800">
                    Book on WhatsApp
                    <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45 border-l border-b border-slate-800"></div>
                </div>
            </motion.button>
        </div>
    );
};

export default WhatsAppButton;
