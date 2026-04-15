import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url }) => {
    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title} | Local Bir</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Facebook / WhatsApp / LinkedIn (Open Graph) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            {/* Placeholder image, update later as per user request */}
            <meta property="og:image" content="https://localbir.com/og-image.jpg" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Local Bir",
                    "image": "https://localbir.com/og-image.jpg",
                    "@id": "https://localbir.com",
                    "url": "https://localbir.com",
                    "telephone": "+916230044384",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Village Bir, Billing Landing Site",
                        "addressLocality": "Bir",
                        "addressRegion": "HP",
                        "postalCode": "176077",
                        "addressCountry": "IN"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 32.0497,
                        "longitude": 76.7177
                    },
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                            "Sunday"
                        ],
                        "opens": "00:00",
                        "closes": "23:59"
                    }
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
