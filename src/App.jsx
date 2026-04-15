import React, { useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Routes, Route, Outlet } from 'react-router-dom';
import DirectDialer from './components/DirectDialer';
import Navbar from './components/Navbar';
import TrustBar from './components/TrustBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// --- Lazy Load Pages & Components ---
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PackagesPage = lazy(() => import('./pages/PackagesPage'));
const TripPlannerPage = lazy(() => import('./pages/TripPlannerPage'));
const GuidePage = lazy(() => import('./pages/GuidePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const StaysPage = lazy(() => import('./pages/StaysPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const BookingModal = lazy(() => import('./components/BookingModal'));

// Premium Page Loader Component
const PageLoader = () => (
  <div className="fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center">
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative flex flex-col items-center"
    >
      <div className="w-24 h-24 mb-8 relative">
        <div className="absolute inset-0 border-4 border-slate-100 rounded-full" />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="absolute inset-0 border-4 border-sky-500 border-t-transparent rounded-full shadow-[0_0_15px_rgba(14,165,233,0.3)]"
        />
      </div>
      <motion.p 
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-slate-400 font-bold tracking-widest text-[10px] uppercase"
      >
        Loading Bir Co-op Experience...
      </motion.p>
    </motion.div>
  </div>
);

const Layout = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);

  const handleBookClick = (data = null) => {
    setBookingInitialData(data);
    setIsBookingOpen(true);
  };

  return (
    <div className="bg-white dark:bg-slate-950 dark:text-slate-100 min-h-screen font-sans selection:bg-sky-200 selection:text-sky-900 text-gray-900 flex flex-col transition-colors duration-500">
      {/* Trust Marquee Bar */}
      <TrustBar />
      {/* Header Overlay */}
      <Navbar onBookClick={() => handleBookClick()} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Outlet context={{ onBookClick: handleBookClick }} />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer onBookClick={() => handleBookClick()} />

      {/* Booking Modal */}
      <Suspense fallback={null}>
        {isBookingOpen && (
          <BookingModal
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
            initialData={bookingInitialData}
          />
        )}
      </Suspense>

      {/* Direct One Tap Dialer */}
      <DirectDialer />
    </div>
  );
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="adventures" element={<PackagesPage />} /> {/* Alias */}
          <Route path="plan-trip" element={<TripPlannerPage />} />
          <Route path="stays" element={<StaysPage />} />

          <Route path="guide" element={<GuidePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="about" element={<AboutPage />} />
          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
