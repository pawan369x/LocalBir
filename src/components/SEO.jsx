import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, schema }) => {
    const formattedTitle = title && title.includes("Bir Billing Guide") ? title : `${title} | Bir Billing Guide`;
    // Default highly-detailed LocalBusiness Schema for Local Bir to feed AI Search Engines (GEO)
    const baseLocalBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Bir Billing Guide",
        "image": "https://birbillingguide.com/adventure.png",
        "logo": "https://birbillingguide.com/Main-Logo1.png",
        "@id": "https://birbillingguide.com",
        "url": "https://birbillingguide.com",
        "telephone": "+916230044384",
        "priceRange": "₹1500 - ₹15000",
        "founder": {
            "@type": "Person",
            "name": "Abhi"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Village Bir, Billing Landing Site",
            "addressLocality": "Bir",
            "addressRegion": "Himachal Pradesh",
            "postalCode": "176077",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 32.0435,
            "longitude": 76.7214
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
        },
        "sameAs": [
            "https://www.facebook.com/birbillingguide",
            "https://www.instagram.com/birbillingguide",
            "https://twitter.com/birbillingguide"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "480",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": [
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Anjali Sharma"
                },
                "datePublished": "2026-05-15",
                "reviewBody": "Absolutely insane paragliding flight! The pilot made me feel so safe. Best adventure experience of my life in Bir Billing!",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                }
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Rahul Verma"
                },
                "datePublished": "2026-05-20",
                "reviewBody": "The GoPro footage quality was stunning and the camping bonfire night was magical. Best adventure agency in Bir Billing.",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                }
            }
        ]
    };

    // Consolidating all schemas into an array
    const allSchemas = [baseLocalBusinessSchema];
    if (schema) {
        if (Array.isArray(schema)) {
            allSchemas.push(...schema);
        } else {
            allSchemas.push(schema);
        }
    }

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{formattedTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Indexing instructions for Web & AI Crawlers (Gemini, ChatGPT bots) */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />

            {/* Facebook / WhatsApp / LinkedIn (Open Graph) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={formattedTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content="https://birbillingguide.com/adventure.png" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={formattedTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="https://birbillingguide.com/adventure.png" />

            {/* JSON-LD Structured Data */}
            {allSchemas.map((sch, idx) => (
                <script key={idx} type="application/ld+json">
                    {JSON.stringify(sch)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;
