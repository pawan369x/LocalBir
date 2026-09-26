import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Packages from '../components/Packages';
import AdventuresGrid from '../components/AdventuresGrid';
import { useOutletContext } from 'react-router-dom';

const PackagesPage = () => {
    const { onBookClick } = useOutletContext();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Custom schemas for key adventures offered by Local Bir
    const adventuresSchema = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Classic Tandem Paragliding in Bir Billing",
            "provider": {
                "@type": "LocalBusiness",
                "name": "Bir Billing Guide",
                "url": "https://birbillingguide.com"
            },
            "description": "Fly high in Bir Billing (World's 2nd highest site) with a certified pilot. Includes GoPro video recording and takeoff transportation.",
            "offers": {
                "@type": "Offer",
                "price": "3000.00",
                "priceCurrency": "INR"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Bungee Jumping in Bir Billing",
            "provider": {
                "@type": "LocalBusiness",
                "name": "Bir Billing Guide",
                "url": "https://birbillingguide.com"
            },
            "description": "Jump from the highest bungee station in Himachal Pradesh with experienced guides and 100% safety checks.",
            "offers": {
                "@type": "Offer",
                "price": "3500.00",
                "priceCurrency": "INR"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Sky Cycling in Bir Billing",
            "provider": {
                "@type": "LocalBusiness",
                "name": "Bir Billing Guide",
                "url": "https://birbillingguide.com"
            },
            "description": "Cycle in the air with high safety harness systems, overlooking the scenic valleys of Bir Billing.",
            "offers": {
                "@type": "Offer",
                "price": "2500.00",
                "priceCurrency": "INR"
            }
        }
    ];

    return (
        <article className="pt-20">
            <SEO
                title="Top Adventure Sports in Bir Billing - Booking & Prices"
                description="Explore Bungee Jumping, Sky Cycling, Waterfall Treks and Paragliding. Check prices and book instant slots in Bir Billing."
                keywords="Things to do in Bir, Bungee Jumping Price, Sky Cycling Cost, Hidden Waterfalls Bir, Trekking Guides, Bir Billing Guide Adventures"
                url="https://birbillingguide.com/adventures"
                schema={adventuresSchema}
            />
            <section aria-label="Adventures and Packages">
                <Packages onBookClick={onBookClick} />
            </section>

            <section aria-label="All Adventure Sports Grid">
                <AdventuresGrid onBookClick={onBookClick} />
            </section>
        </article>
    );
};

export default PackagesPage;
