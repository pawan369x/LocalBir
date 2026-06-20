import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import WhyChooseUs from '../components/WhyChooseUs';
import JourneyRoadmap from '../components/JourneyRoadmap';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';

const AboutPage = () => {
    const { onBookClick } = useOutletContext();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // FAQ schema mapping to the support FAQs rendered on this page
    const aboutFaqSchema = {
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
        <article className="pt-20">
            <SEO
                title="About Us - Local Guides & Paragliding Experts in Bir"
                description="Learn more about Bir Billing Guide. We provide certified local guides, paragliding pilots, and handpicked stays in Bir Billing, Himachal Pradesh."
                keywords="Bir Billing Guide, paragliding guides, safety record Bir Billing, local experts Bir, adventure agency"
                url="https://birbillingguide.com/about"
                schema={aboutFaqSchema}
            />

            {/* Semantic Page Header */}
            <header className="bg-slate-50 dark:bg-slate-950 pt-16 pb-8 text-center border-b border-slate-100 dark:border-slate-800 transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-4">
                    <span className="text-sky-500 font-bold tracking-wider uppercase text-xs">Who We Are</span>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-3">About Bir Billing Guide</h1>
                </div>
            </header>

            <section aria-label="Why Choose Us Features">
                <WhyChooseUs />
            </section>

            <section aria-label="Our Adventure Journey Itinerary">
                <JourneyRoadmap onBookClick={onBookClick} />
            </section>

            <section aria-label="Support Center and FAQs">
                <FAQ />
            </section>
        </article>
    );
};

export default AboutPage;
