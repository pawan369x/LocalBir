import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import BannerCarousel from '../components/BannerCarousel';
import WhyChooseUs from '../components/WhyChooseUs';
import JourneyRoadmap from '../components/JourneyRoadmap';
import FlightDashboard from '../components/FlightDashboard';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
    const { onBookClick } = useOutletContext();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // FAQPage schema to feed AI search engines like Gemini and ChatGPT
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is Paragliding safe for beginners in Bir Billing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! You will be flying in tandem with a government-certified, highly experienced pilot who controls everything. You just need to sit back, run a few steps at takeoff, and enjoy the view. Bir Billing Guide maintains a 100% safety record."
                }
            },
            {
                "@type": "Question",
                "name": "What is the weight limit for paragliding in Bir Billing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The standard weight limit for paragliding is between 15kg and 95kg. This is dependent on wind conditions. If you weigh more than 95kg, please inform us in advance so we can arrange a specialized heavy-duty glider for your safety."
                }
            },
            {
                "@type": "Question",
                "name": "Can I carry my phone or camera during the flight?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We highly recommend not holding your phone during the flight as it can easily slip and get lost in the forest. We provide safe, hands-free 4K GoPro recording so you can capture the experience safely."
                }
            },
            {
                "@type": "Question",
                "name": "How do I reach Bir Billing, Himachal Pradesh?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can take a direct overnight Volvo bus from Delhi or Chandigarh to Bir. If traveling by air, the nearest airport is Kangra Gaggal Airport (DHM) in Dharamshala, which is a 2-hour taxi ride from Bir."
                }
            },
            {
                "@type": "Question",
                "name": "What happens to my paragliding booking if the weather is bad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Safety is our priority #1. If weather conditions (rain, heavy winds) are not safe for flying, your flight will be postponed to the next available safe slot. If you cannot fly due to this, we provide a 100% refund."
                }
            }
        ]
    };

    return (
        <>
            <SEO
                title="Best Paragliding & Adventure Booking in Bir Billing"
                description="Book the safest Paragliding in Bir Billing starting @₹3000. We offer Bungee Jumping, Sky Cycling, Trekking, and Local Stays with a 100% Safety Record."
                keywords="Paragliding in Bir Billing, Bir Billing Paragliding Cost, Bungee Jumping Bir, Sky Cycling Himachal, Bir Billing Hotels, Adventure Sports India, Bir Billing Guide"
                url="https://birbillingguide.com/"
                schema={faqSchema}
            />
            <article>
                <header>
                    <BannerCarousel />
                </header>
                
                <section aria-label="Live Flight Conditions">
                    <FlightDashboard onBookClick={onBookClick} />
                </section>
                
                <section aria-label="Why Choose Bir Billing Guide">
                    <WhyChooseUs />
                </section>
                
                <section aria-label="Your Journey Roadmap">
                    <JourneyRoadmap onBookClick={onBookClick} />
                </section>
                
                <section aria-label="Client Testimonials">
                    <Testimonials />
                </section>
                
                <section aria-label="Frequently Asked Questions">
                    <FAQ />
                </section>
            </article>
        </>
    );
};

export default Home;
