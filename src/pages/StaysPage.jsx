import React, { useEffect } from 'react';
import Stays from '../components/Stays';
import SEO from '../components/SEO';
import { useOutletContext } from 'react-router-dom';

const StaysPage = () => {
    const { onBookClick } = useOutletContext();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Stays list schema (Hotel Schema) to populate AI engines and search snippets
    const staysSchema = [
        {
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Shiva Guest House",
            "description": "A serene and affordable guest house offering a homely atmosphere and stunning views of the Dhauladhar mountains in Bir Colony.",
            "telephone": "+916230044384",
            "priceRange": "₹1200 - ₹1500",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bir Colony, Near Tibetan Colony",
                "addressLocality": "Bir",
                "addressRegion": "Himachal Pradesh",
                "postalCode": "176077",
                "addressCountry": "IN"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Flyers Paradise",
            "description": "Premium luxury rooms right next to the paragliding landing site. Watch gliders touch down right from your balcony.",
            "telephone": "+916230044384",
            "priceRange": "₹3500",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Landing Site Road",
                "addressLocality": "Bir",
                "addressRegion": "Himachal Pradesh",
                "postalCode": "176077",
                "addressCountry": "IN"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Pink Park",
            "description": "Well known for its panoramic mountain sunset views, rooftop cafe, power backup, and premium hospitality on Chaugan Road.",
            "telephone": "+916230044384",
            "priceRange": "₹3000",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Chaugan Road",
                "addressLocality": "Bir",
                "addressRegion": "Himachal Pradesh",
                "postalCode": "176077",
                "addressCountry": "IN"
            }
        }
    ];

    return (
        <article className="pt-20">
            <SEO
                title="Best Hotels, Hostels & Camping Stays in Bir Billing"
                description="Book handpicked premium and budget stays near Bir Billing landing site. Shiva Guest House (₹1200), Pink Park (₹3000) & Flyers Paradise options."
                keywords="Bir Billing stays, hotels in Bir Billing, hostels in Bir Billing, Shiva Guest House, Pink Park Bir Billing, Flyers Paradise, Bir Billing Guide Stays"
                url="https://birbillingguide.com/stays"
                schema={staysSchema}
            />
            <section aria-label="Available Stays and Accommodation Packages">
                <Stays onBookClick={onBookClick} />
            </section>
        </article>
    );
};

export default StaysPage;
