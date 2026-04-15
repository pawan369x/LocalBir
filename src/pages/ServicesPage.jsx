import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind, Tent, Mountain, Bike, Home, CheckCircle, ArrowRight, X, User, Users, Calendar } from 'lucide-react';

const services = [
    // --- NEW / TOP SERVICES ---
    {
        id: 11,
        category: "Adventure",
        title: "Bangoru Waterfall Trek",
        price: "₹400",
        unit: "per person",
        icon: <Mountain size={24} />,
        features: ["Hidden Waterfall", "Guided Trek", "Perfect for Nature Lovers"],
        popular: true,
        calculationType: "per-person"
    },

    // --- ADVENTURE (Per Person) ---
    {
        id: 1,
        category: "Adventure",
        title: "Paragliding (Classic)",
        price: "₹3,000",
        unit: "per person",
        icon: <Wind size={24} />,
        features: ["15-20 Mins Flight", "GoPro Available", "Landing Site Pickup"],
        popular: true,
        calculationType: "per-person"
    },
    {
        id: 2,
        category: "Adventure",
        title: "Bungee Jumping",
        price: "₹3,500",
        unit: "per person",
        icon: <CheckCircle size={24} />,
        features: ["Highest Safety Standards", "Video Included", "Thrilling Experience"],
        calculationType: "per-person"
    },
    {
        id: 3,
        category: "Adventure",
        title: "Full Day Trekking",
        price: "Discussed",
        unit: "per group",
        icon: <Mountain size={24} />,
        features: ["Customized Route", "Expert Guide", "Meal Options Available"],
        calculationType: "fixed" // Price will be discussed
    },
    {
        id: 4,
        category: "Adventure",
        title: "Sky Cycling",
        price: "₹1,500",
        unit: "per person",
        icon: <Wind size={24} />,
        features: ["Safety Harness", "Valley View", "Unique Photo Op"],
        calculationType: "per-person"
    },

    // --- STAYS (Fixed Rate) ---
    {
        id: 5,
        category: "Stays",
        title: "Camping (4 Pax Tent)",
        price: "₹2,000",
        unit: "per night",
        icon: <Tent size={24} />,
        features: ["Bonfire", "Cozy Tents", "Music & Vibes (Food Extra)"],
        calculationType: "per-night"
    },
    {
        id: 6,
        category: "Stays",
        title: "Budget Room",
        price: "₹1,500",
        unit: "per night",
        icon: <Home size={24} />,
        features: ["Clean Bed", "Hot Water", "Near Landing Site"],
        calculationType: "per-night"
    },
    {
        id: 7,
        category: "Stays",
        title: "Standard Room",
        price: "₹2,500",
        unit: "per night",
        icon: <Home size={24} />,
        features: ["Balcony View", "WiFi", "Room Service"],
        calculationType: "per-night"
    },
    {
        id: 8,
        category: "Stays",
        title: "Premium Family Suite",
        price: "₹4,000",
        unit: "per night",
        icon: <Home size={24} />,
        features: ["Luxury Interiors", "Best View", "King Size Bed"],
        calculationType: "per-night"
    },

    // --- RENTALS (Per Bike = Per Unit) ---
    {
        id: 9,
        category: "Rentals",
        title: "Scooty Rental",
        price: "₹700",
        unit: "per day",
        icon: <Bike size={24} />,
        features: ["Good Condition", "Helmet Included", "No Deposit"],
        calculationType: "per-day"
    },
    {
        id: 10,
        category: "Rentals",
        title: "Bike Rental (Himalayan)",
        price: "₹1,500",
        unit: "per day",
        icon: <Bike size={24} />,
        features: ["Mountain Ready", "Helmet Included", "Well Maintained"],
        calculationType: "per-day"
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

const Services = () => {
    const PHONE_NUMBER = "919999999999";

    // State for Modal
    const [selectedService, setSelectedService] = useState(null);
    const [name, setName] = useState("");
    const [guests, setGuests] = useState(1);
    const [duration, setDuration] = useState(1); // Days or Nights
    const [date, setDate] = useState("");

    // Helper to get numeric price
    const getNumericPrice = (priceStr) => {
        if (priceStr === "Discussed") return 0;
        return parseInt(priceStr.replace(/[^0-9]/g, '')) || 0;
    };

    const handleOpenModal = (service) => {
        setSelectedService(service);
        setGuests(1);
        setDuration(1);
        setName("");
        setDate("");
    };

    const handleCloseModal = () => {
        setSelectedService(null);
    };

    const handleFinalBook = () => {
        if (!name) {
            alert("Please enter your name!");
            return;
        }

        const basePrice = getNumericPrice(selectedService.price);
        let multiplier = 1;
        let unitLabel = "Guests";

        switch (selectedService.calculationType) {
            case "per-person":
                multiplier = guests;
                unitLabel = "Guests";
                break;
            case "per-day":
                multiplier = duration;
                unitLabel = "Days";
                break;
            case "per-night":
                multiplier = duration;
                unitLabel = "Nights";
                break;
            case "per-group":
            case "fixed":
                multiplier = 1;
                unitLabel = "Group";
                break;
            default:
                multiplier = 1;
        }

        const totalPrice = basePrice * multiplier;

        const message = `
*NEW BOOKING REQUEST* 🚀
-------------------------
👤 *Name:* ${name}
📦 *Service:* ${selectedService.title}
👥 *Quantity:* ${multiplier} ${unitLabel} ${selectedService.calculationType === 'per-person' ? `(${guests} Guests)` : ''}
📅 *Date:* ${date || "Not Specified"}
💰 *Base Rate:* ${selectedService.price}
💵 *Est. Total:* ${totalPrice > 0 ? `₹${totalPrice.toLocaleString()}` : "Price to be discussed"}
-------------------------
Hi Pawan, please confirm availability.
        `.trim();

        window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
        handleCloseModal();
    };

    return (
        <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 overflow-hidden relative transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-sky-100 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-bold uppercase tracking-wider mb-4 border border-sky-200/50 dark:border-sky-500/20">
                        Everything in Bir
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                        Adventure. Stays. <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Rentals.</span>
                    </h2>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className={`relative bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl border transition-all duration-300 group ${service.popular ? 'border-sky-500/40 shadow-sky-500/10' : 'border-white/50 dark:border-slate-800 shadow-slate-200/50 dark:shadow-none'}`}
                        >
                            {service.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-4 rounded-2xl transition-colors ${service.popular ? 'bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-slate-900 dark:group-hover:bg-sky-500 group-hover:text-white transition-all duration-300'}`}>
                                    {service.icon}
                                </div>
                                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full border border-slate-200/50 dark:border-slate-700">
                                    {service.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-3xl font-black text-slate-900 dark:text-white">{service.price}</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">/ {service.unit}</span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 font-medium">
                                        <CheckCircle size={16} className="text-sky-500 dark:text-sky-400" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleOpenModal(service)}
                                className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 ${service.popular ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white hover:shadow-sky-500/40 hover:translate-y-[-2px]' : 'bg-slate-900 dark:bg-sky-500 text-white hover:bg-slate-800 dark:hover:bg-sky-600'}`}
                            >
                                Book Now <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* POPUP MODAL */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleCloseModal}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            className="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl p-6 shadow-2xl overflow-visible border border-white/20 dark:border-slate-800"
                        >
                            {/* Header Gradient Background */}
                            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-br from-sky-500 to-indigo-600 z-0 rounded-t-3xl" />

                            <button
                                onClick={handleCloseModal}
                                className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/40 transition-colors border border-white/20"
                            >
                                <X size={20} />
                            </button>

                            <div className="relative z-10 pt-2">
                                <div className="bg-white/10 backdrop-blur-md inline-block px-4 py-1.5 rounded-full text-white/90 text-[10px] font-black uppercase tracking-widest mb-4 border border-white/20">
                                    {selectedService.category}
                                </div>
                                <h3 className="text-3xl font-black text-white mb-2 leading-tight">{selectedService.title}</h3>
                                <p className="text-white/80 text-sm font-medium mb-10 flex items-center gap-2">
                                    <span className="bg-white/20 px-2 py-0.5 rounded-lg text-xs tracking-wide">{selectedService.price}</span>
                                    <span>/ {selectedService.unit}</span>
                                </p>

                                <div className="bg-white dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-2 space-y-4 shadow-xl border border-white dark:border-slate-700/50">

                                    <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-100 dark:focus-within:ring-sky-500/20 transition-all">
                                        <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase flex items-center gap-1 mb-1">
                                            <User size={12} /> Your Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Ex: Amit Sharma"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full bg-transparent font-bold text-slate-800 dark:text-white outline-none placeholder:font-normal placeholder:text-slate-400"
                                        />
                                    </div>

                                    <div className="flex gap-4">
                                        {/* Dynamic Quantity Input based on calculationType */}
                                        {selectedService.calculationType === "per-person" ? (
                                            <div className="flex-1 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-100 dark:focus-within:ring-sky-500/20 transition-all">
                                                <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase flex items-center gap-1 mb-1">
                                                    <Users size={12} /> Guests
                                                </label>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={guests}
                                                    onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                                                    className="w-full bg-transparent font-bold text-slate-800 dark:text-white outline-none"
                                                />
                                            </div>
                                        ) : (selectedService.calculationType === "per-day" || selectedService.calculationType === "per-night") ? (
                                            <div className="flex-1 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-100 dark:focus-within:ring-sky-500/20 transition-all">
                                                <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase flex items-center gap-1 mb-1">
                                                    <Calendar size={12} /> {selectedService.calculationType === "per-day" ? "Days" : "Nights"}
                                                </label>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={duration}
                                                    onChange={(e) => setDuration(parseInt(e.target.value) || 1)}
                                                    className="w-full bg-transparent font-bold text-slate-800 dark:text-white outline-none"
                                                />
                                            </div>
                                        ) : (
                                            <div className="flex-1 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800 opacity-60">
                                                <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase flex items-center gap-1 mb-1">
                                                    <Users size={12} /> Guests
                                                </label>
                                                <input
                                                    type="number"
                                                    value={guests}
                                                    onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                                                    className="w-full bg-transparent font-bold text-slate-800 dark:text-white outline-none"
                                                />
                                            </div>
                                        )}

                                        <div className="flex-1 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-100 dark:focus-within:ring-sky-500/20 transition-all">
                                            <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase flex items-center gap-1 mb-1">
                                                <Calendar size={12} /> Date
                                            </label>
                                            <input
                                                type="date"
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                                className="w-full bg-transparent font-bold text-slate-800 dark:text-white outline-none text-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Total Price Calculation Logic */}
                                    <div className="bg-indigo-50 dark:bg-indigo-500/10 p-4 rounded-xl flex justify-between items-center border border-indigo-100 dark:border-indigo-500/20 mt-4">
                                        <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">Estimated Total</span>
                                        <span className="text-2xl font-black text-indigo-700 dark:text-indigo-300">
                                            {selectedService.calculationType === 'fixed' ? (
                                                "Discussed"
                                            ) : (
                                                "₹" + (
                                                    getNumericPrice(selectedService.price) *
                                                    (selectedService.calculationType === 'per-person' ? guests :
                                                        (selectedService.calculationType === 'per-day' || selectedService.calculationType === 'per-night' ? duration : 1))
                                                ).toLocaleString()
                                            )}
                                        </span>
                                    </div>

                                    <button
                                        onClick={handleFinalBook}
                                        className="w-full py-4 rounded-xl bg-slate-900 dark:bg-sky-500 text-white font-bold text-lg shadow-xl hover:bg-sky-500 dark:hover:bg-sky-600 transition-colors flex items-center justify-center gap-2 mt-4"
                                    >
                                        Confirm on WhatsApp <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;