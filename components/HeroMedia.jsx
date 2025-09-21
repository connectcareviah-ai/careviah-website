// components/HeroMedia.jsx
import { useEffect, useState } from "react";
import Image from "next/image";

// Use your four PNGs from /public/images/hero
const slides = [
    { src: "/images/hero/balcony.png", alt: "Caregiver and elder enjoying tea on a Kerala balcony" },
    { src: "/images/hero/smile.png", alt: "Caregiver smiling with an elder at home" },
    { src: "/images/hero/Normal.png", alt: "Comfortable conversation at home" },
    { src: "/images/hero/bp.png", alt: "Vitals check at home by a caregiver" },
];

export default function HeroMedia() {
    const [i, setI] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setI((p) => (p + 1) % slides.length), 9000); // 9s
        return () => clearInterval(id);
    }, []);

    return (
        <div className="heroMedia" aria-label="Careviah photo highlights">
            {slides.map((s, idx) => (
                <div key={s.src} className={`slide ${i === idx ? "isActive" : ""}`} aria-hidden={i !== idx}>
                    <Image
                        src={s.src}
                        alt={s.alt}
                        fill
                        sizes="(max-width: 900px) 100vw, 520px"
                        priority={idx === 0}
                    />
                </div>
            ))}

            <style jsx>{`
        .heroMedia {
          position: relative;
          aspect-ratio: 16/11;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 14px 44px rgba(2, 8, 23, 0.18);
          border: 1px solid rgba(15, 23, 42, 0.08);
          background: #0f172a10;
          isolation: isolate;
        }
        .slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 900ms ease;
        }
        .slide :global(img) {
          object-fit: cover;
          transform: scale(1.02);
        }
        .slide.isActive {
          opacity: 1;
          z-index: 1;
        }
        .slide.isActive :global(img) {
          animation: kenburns 18s ease-in-out forwards;
        }
        @keyframes kenburns {
          from { transform: scale(1.03) translate3d(0, 0, 0); }
          to   { transform: scale(1.08) translate3d(-1.5%, -1.5%, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .slide :global(img) { animation: none !important; transform: none !important; }
        }
      `}</style>
        </div>
    );
}
