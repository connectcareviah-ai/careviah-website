// components/HeroMedia.jsx
import { useEffect, useState } from "react";

export default function HeroMedia() {
    // Update file names here if your case is different
    const slides = [
        "/images/hero/balcony.png",
        "/images/hero/smile.png",
        "/images/hero/Normal.png",
        "/images/hero/bp.png",
    ];

    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setIdx(i => (i + 1) % slides.length), 3500);
        return () => clearInterval(t);
    }, [slides.length]);

    return (
        <>
            <figure className="heroMedia">
                <div className="frame">
                    {/* Cross-fade layer */}
                    <div
                        className="slide"
                        key={idx}
                        style={{ backgroundImage: `url(${slides[idx]})` }}
                    />
                </div>
            </figure>

            <style jsx>{`
        .heroMedia { justify-self: end; }
        .frame {
          width: min(520px, 100%);
          aspect-ratio: 4 / 3;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(2, 8, 23, 0.08);
          box-shadow: 0 20px 50px rgba(2, 8, 23, 0.18);
          background: #fff;
          position: relative;
        }
        .slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          animation: fade .6s ease-out, zoom 6s ease-in-out both;
        }
        @keyframes fade { from { opacity: .15 } to { opacity: 1 } }
        @keyframes zoom { from { transform: scale(1.04)} to { transform: scale(1)} }

        @media (max-width: 768px) {
          .heroMedia { justify-self: start; }
          .frame { width: 100%; }
        }
      `}</style>
        </>
    );
}
