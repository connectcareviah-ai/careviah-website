import Seo from "../components/Seo";
import HeroMedia from "../components/HeroMedia";

export default function Home() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    return (
        <>
            <Seo
                title="Comprehensive Elder Care at Home"
                description="Qualified nurses and trained caregivers coordinated through clear checklists and communication. We help your parents stay safe, dignified, and comfortable—at home."
                canonical={siteUrl ? `${siteUrl}/` : undefined}
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    name: "Careviah",
                    url: siteUrl || undefined,
                    areaServed: "Kerala, India",
                    telephone: "+918547046536",
                    sameAs: ["https://wa.me/918590722353"],
                }}
            />

            {/* ===== HERO ===== */}
            <section className="hero">
                <div className="wrap heroGrid">
                    <div className="heroCopy">
                        <span className="eyebrow">Serving families across Kerala</span>
                        <h1>Comprehensive Elder Care at Home</h1>
                        <p className="sub">
                            Qualified nurses and trained caregivers coordinated through clear
                            checklists and communication. We help your parents stay safe, dignified,
                            and comfortable—at home.
                        </p>

                        <div className="actions">
                            <a className="btn primary" href="tel:+918547046536">
                                Call: +91 85470 46536
                            </a>
                            <a className="btn ghost" href="https://wa.me/918590722353">
                                WhatsApp: +91 85907 22353
                            </a>
                        </div>

                        <div className="statbar">
                            <span className="stat">24×7 on-call assistance</span>
                            <span className="stat">Background-verified staff</span>
                            <span className="stat">Nurse-supervised care plans</span>
                        </div>
                    </div>

                    {/* Right column — slideshow */}
                    <HeroMedia />
                </div>
            </section>

            {/* ===== CORE SERVICES (warm background) ===== */}
            <section id="services" className="bandWarm">
                <div className="wrap">
                    <h2 className="h2">Our Core Services</h2>
                    <p className="lead">Complete, reliable support tailored to each family.</p>

                    <div className="grid">
                        <article className="card">
                            <div className="icon">🩺</div>
                            <h3>Healthcare Assistance</h3>
                            <p>
                                Vitals monitoring, medication reminders, post-procedure support, and
                                wound-care guidance (as per protocol).
                            </p>
                        </article>

                        <article className="card">
                            <div className="icon">🧹</div>
                            <h3>Housekeeping</h3>
                            <p>
                                Light cleaning, laundry, kitchen assistance, and hygiene routines to
                                keep home safe and comfortable.
                            </p>
                        </article>

                        <article className="card">
                            <div className="icon">🤝</div>
                            <h3>Daily Living Support</h3>
                            <p>
                                Meal prep, mobility help, companionship, and errands—aligned to your
                                loved one’s daily schedule.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* ===== WHY (bullets) ===== */}
            <section id="why" className="section">
                <div className="wrapSplit">
                    <div>
                        <h2 className="h2">Why Choose Careviah</h2>
                        <ul className="bullets">
                            <li>Professional process with clear scope and checklists</li>
                            <li>Transparent scheduling and regular communication</li>
                            <li>Flexible add-ons for evolving needs</li>
                            <li>Respect, safety, and consistency</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== ADD-ON SERVICES (warm background in cards) ===== */}
            <section id="addons" className="bandWarm">
                <div className="wrap">
                    <h2 className="h2">Add-On Services</h2>
                    <p className="lead">
                        Mix &amp; match extras as needs evolve—easy to add, pause, or swap.
                    </p>

                    <div className="grid">
                        <article className="card">
                            <div className="icon">🚑</div>
                            <h3>Ambulance Link</h3>
                            <p>Coordinated ambulance support for planned or urgent needs.</p>
                        </article>

                        <article className="card">
                            <div className="icon">🏥</div>
                            <h3>Hospital Assistance</h3>
                            <p>Help with admission support, documents, and basic coordination.</p>
                        </article>

                        <article className="card">
                            <div className="icon">🧺</div>
                            <h3>Laundry</h3>
                            <p>Regular laundry &amp; linen refresh to keep things fresh and hygienic.</p>
                        </article>

                        <article className="card">
                            <div className="icon">🌿</div>
                            <h3>Gardening</h3>
                            <p>Light garden upkeep for a pleasant, safe home environment.</p>
                        </article>

                        <article className="card">
                            <div className="icon">🧼</div>
                            <h3>Deep Cleaning</h3>
                            <p>Scheduled deep cleans for bathrooms, kitchen, and high-touch areas.</p>
                        </article>

                        <article className="card">
                            <div className="icon">🧰</div>
                            <h3>General Help</h3>
                            <p>Small tasks &amp; errands that make daily life easier for families.</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* ===== HOW IT WORKS (dark band) ===== */}
            <section id="how" className="bandDark">
                <div className="wrap">
                    <h2 className="h2 h2Light">How It Works</h2>

                    <div className="steps">
                        <article className="stepCard">
                            <div className="badge">1</div>
                            <h3>Call &amp; Fit Check</h3>
                            <p>We understand your needs and confirm service availability.</p>
                        </article>

                        <article className="stepCard">
                            <div className="badge">2</div>
                            <h3>Care Plan</h3>
                            <p>Scope, schedule, and safety checklist prepared by our team.</p>
                        </article>

                        <article className="stepCard">
                            <div className="badge">3</div>
                            <h3>Caregiver Onboarding</h3>
                            <p>Background-verified staff briefed and introduced.</p>
                        </article>

                        <article className="stepCard">
                            <div className="badge">4</div>
                            <h3>Ongoing Support</h3>
                            <p>Regular updates and supervision; add-ons as required.</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* ===== FAQS ===== */}
            <section id="faqs" className="section">
                <div className="wrap">
                    <h2 className="h2">FAQs</h2>
                    <div className="faqGrid">
                        <details className="faq">
                            <summary>Do you provide overnight or 24×7 support?</summary>
                            <p>
                                Yes. We schedule shifts based on need and availability, with oversight
                                from our nurse lead.
                            </p>
                        </details>

                        <details className="faq">
                            <summary>Are caregivers background-verified?</summary>
                            <p>
                                All staff are ID-verified and trained; references and checks are part of
                                onboarding.
                            </p>
                        </details>

                        <details className="faq">
                            <summary>Which locations do you cover?</summary>
                            <p>
                                Currently across Kerala with a focus on Kottayam / Pala and nearby
                                districts.
                            </p>
                        </details>

                        <details className="faq">
                            <summary>How do we start?</summary>
                            <p>
                                Call or WhatsApp us. We’ll do a quick fit check and share a simple care
                                plan.
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section id="contact" className="section">
                <div className="wrap">
                    <div className="cta">
                        <strong>Ready to talk?</strong>&nbsp;
                        <a href="tel:+918547046536">Call now</a>&nbsp;|&nbsp;
                        <a href="https://wa.me/918590722353">WhatsApp us</a>
                    </div>
                    <p className="email">
                        Prefer email? <a href="mailto:hello@careviah.com">hello@careviah.com</a>
                    </p>
                </div>
            </section>

            {/* ===== Styles (styled-jsx) ===== */}
            <style jsx>{`
        /* Palette */
        :root {
          --brand: #0e7490;
          --ink: #102a43;
          --inkDark: #0f172a;
          --muted: #475569;
          --bg: #f6f8fb;
          --butter: #fff4d9;
          --card: #ffffff;
          --ring: rgba(2, 8, 23, 0.12);
          --shadow: 0 10px 30px rgba(2, 8, 23, 0.08);
        }

        /* Layout helpers */
        .wrap {
          max-width: 1160px;
          margin-inline: auto;
          padding-inline: 20px;
          padding-block: 28px;
        }
        .section {
          padding-block: 56px;
          background: transparent;
        }
        .bandWarm {
          background: var(--butter);
          padding-block: 56px;
        }
        .bandDark {
          padding-block: 64px;
          background: radial-gradient(
              900px 520px at 15% -20%,
              rgba(14, 116, 144, 0.18) 0%,
              transparent 55%
            ),
            linear-gradient(180deg, #0f172a 0%, #0b2239 100%);
        }

        /* Hero */
        .hero {
          background:
            radial-gradient(1100px 520px at 85% -10%, rgba(14, 116, 144, 0.10) 0%, transparent 60%),
            linear-gradient(180deg, #f8fbff 0%, #f6f8fb 100%);
          border-bottom: 1px solid rgba(2, 8, 23, 0.05);
          padding-block: clamp(48px, 7vw, 96px);
        }
        .heroGrid {
          display: grid;
          gap: clamp(20px, 4vw, 40px);
          align-items: center;
          grid-template-columns: 1.15fr 0.85fr;
        }
        .heroCopy h1 {
          font-size: clamp(34px, 6vw, 56px);
          line-height: 1.06;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin: 6px 0 12px;
          font-weight: 800;
        }
        .eyebrow {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(246, 198, 83, 0.22);
          color: #7a5a00;
          font-weight: 700;
          border: 1px solid rgba(246, 198, 83, 0.45);
          margin-bottom: 8px;
        }
        .sub {
          color: var(--muted);
          max-width: 62ch;
          font-size: 18px;
          margin: 0 0 18px 0;
        }
        .actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin: 18px 0 10px;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          padding: 0 18px;
          border-radius: 999px;
          font-weight: 700;
          border: 1px solid transparent;
          transition: transform .05s ease, box-shadow .18s ease, background .18s ease;
          box-shadow: var(--shadow);
          text-decoration: none;
        }
        .btn:active { transform: translateY(1px); }
        .btn.primary { background: #0b5c73; color: #fff; }
        .btn.primary:hover { background: var(--brand); }
        .btn.ghost { background: #fff; color: #0b5c73; border-color: rgba(7, 89, 133, 0.25); border: 1px solid rgba(7, 89, 133, 0.25); }
        .btn.ghost:hover { border-color: rgba(7, 89, 133, 0.45); }
        .statbar {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 8px;
        }
        .stat {
          background: #fff;
          color: var(--muted);
          border-radius: 999px;
          padding: 8px 12px;
          border: 1px solid rgba(2, 8, 23, 0.06);
          box-shadow: var(--shadow);
          font-size: 13px;
        }

        /* Headings & text */
        .h2 {
          font-size: clamp(26px, 3.6vw, 38px);
          letter-spacing: -0.02em;
          color: var(--ink);
          margin: 0 0 12px;
          font-weight: 800;
        }
        .h2Light { color: #fff; }
        .lead { color: var(--muted); margin: 4px 0 24px; }

        /* Grids & cards */
        .grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 22px;
        }
        .card {
          grid-column: span 12;
          background: var(--card);
          border-radius: 18px;
          padding: 20px;
          box-shadow: var(--shadow);
          border: 1px solid rgba(2, 8, 23, 0.06);
        }
        .card h3 { margin: 6px 0 8px; font-size: 20px; color: var(--ink); }
        .card p { color: var(--muted); }
        .icon {
          width: 40px; height: 40px; border-radius: 12px;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(246, 198, 83, 0.20); color: #7a5a00; font-size: 22px;
          margin-bottom: 10px;
        }

        /* Why split */
        .wrapSplit {
          max-width: 1160px;
          margin-inline: auto;
          padding-inline: 20px;
        }
        .bullets { color: var(--muted); padding-left: 18px; }
        .bullets li { margin: 10px 0; }

        /* Steps on dark band */
        .steps {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 20px;
        }
        .stepCard {
          grid-column: span 12;
          background: #ffffff;
          border-radius: 16px;
          padding: 18px 18px 16px;
          box-shadow: var(--shadow);
          border: 1px solid rgba(2, 8, 23, 0.06);
        }
        .stepCard h3 { margin: 2px 0 6px; color: var(--ink); }
        .stepCard p { color: var(--muted); }
        .badge {
          width: 32px; height: 32px; border-radius: 999px;
          font-weight: 800; color: #7a4a00; background: #f6c653;
          display: inline-flex; align-items: center; justify-content: center;
          box-shadow: 0 6px 20px rgba(246, 198, 83, .35); margin-bottom: 8px;
        }

        /* FAQ */
        .faqGrid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 18px;
        }
        .faq {
          grid-column: span 12;
          background: #fff;
          border: 1px solid rgba(2, 8, 23, .06);
          border-radius: 14px;
          padding: 14px 18px;
          box-shadow: var(--shadow);
        }
        .faq summary { cursor: pointer; font-weight: 700; color: var(--ink); }
        .faq p { color: var(--muted); margin-top: 8px; }

        /* CTA */
        .cta {
          margin: 24px auto 8px;
          max-width: 900px;
          border: 1px solid rgba(2, 8, 23, .06);
          border-radius: 14px;
          padding: 16px;
          text-align: center;
          background: #fff;
          box-shadow: var(--shadow);
        }
        .email { color: var(--muted); text-align: center; margin: 8px 0 0; }

        /* Responsive */
        @media (min-width: 720px) {
          .grid > .card { grid-column: span 6; }
          .steps > .stepCard { grid-column: span 6; }
          .faqGrid > .faq { grid-column: span 6; }
        }
        @media (min-width: 1100px) {
          .grid > .card { grid-column: span 4; }
          .steps > .stepCard { grid-column: span 3; }
        }
        @media (max-width: 768px) {
          .heroGrid { grid-template-columns: 1fr; }
        }
        @media (min-width: 769px) {
          .heroGrid { grid-template-columns: 1.15fr 0.85fr; }
        }
      `}</style>
        </>
    );
}
