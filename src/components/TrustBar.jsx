import React from 'react';

const items = [
  { icon: '🪂', text: 'Paragliding in Bir Billing — Experience India\'s Highest Tandem Flights' },
  { icon: '✅', text: '100% Verified & Safe — Trusted by 15,000+ Happy Tourists' },
  { icon: '🏔️', text: 'Bir Billing\'s #1 Adventure Hub — Everything Under One Roof' },
  { icon: '🌊', text: 'Hidden Waterfalls • Trekking • Go-Karting • Sky Cycling' },
  { icon: '🛡️', text: 'Genuine Local Operators — Zero Fake Bookings, Zero Hassle' },
  { icon: '📞', text: 'Instant Booking • 24/7 Support — Your Local Guide in Bir' },
  { icon: '🏕️', text: 'Luxury Camping • Bungee Jumping • Local Stays — All in One Place' },
  { icon: '⭐', text: '4.9★ Rated Adventure Agency — Real Reviews, Real Experiences' },
];

const TrustBar = () => {
  // Duplicate items for seamless infinite scroll
  const allItems = [...items, ...items];

  return (
    <div
      style={{
        backgroundColor: '#0c1a2e',
        borderBottom: '1px solid rgba(14,165,233,0.25)',
        overflow: 'hidden',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 60,
      }}
    >
      {/* Fade edges */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px',
        background: 'linear-gradient(to right, #0c1a2e, transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px',
        background: 'linear-gradient(to left, #0c1a2e, transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      {/* Scrolling track */}
      <div style={{
        display: 'flex',
        animation: 'trustbar-scroll 45s linear infinite',
        whiteSpace: 'nowrap',
        willChange: 'transform',
      }}>
        {allItems.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginRight: '0',
              fontSize: '12.5px',
              fontWeight: 500,
              color: '#e2e8f0',
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              letterSpacing: '0.01em',
            }}
          >
            <span style={{ fontSize: '14px' }}>{item.icon}</span>
            <span>{item.text}</span>
            {/* Separator dot */}
            <span style={{
              display: 'inline-block',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: '#38bdf8',
              margin: '0 18px',
              flexShrink: 0,
              opacity: 0.7,
            }} />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes trustbar-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes trustbar-scroll {
            0%, 100% { transform: translateX(0); }
          }
        }
      `}</style>
    </div>
  );
};

export default TrustBar;
