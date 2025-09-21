// pages/index.jsx
import Seo from '../components/Seo';

export default function Home() {
    const SHOW_HERO_IMAGE = true; // set false if you want to hide the poster
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    return (
        <>
            <Seo
                title="Careviah — Professional Home Care Services"
                description="Compassionate, professional home care: healthcare assistance, housekeeping, and daily living support—coordinated by nurse-led plans."
                canonical={siteUrl ? `${siteUrl}/` : undefined}
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Careviah",
                    "url": siteUrl || undefined,
                    "areaServed": "Kerala, India",
                    "telephone": "+918547046536",
                    "sameAs": ["https://wa.me/918590722353"]
                }}
            />

            {/* HERO (full-bleed background, content constrained in .container) */}
            <section className="hero">
                <div className="container">
                    <span className="badge eyebrow">Serving families across Kerala</span>

                    <div className="heroGrid">
                        <div>
                            <h1>Comprehensive Elder Care at Home</h1>
                            <p className="sub">
                                Qualified nurses and trained caregivers coordinated through clear
                                checklists and communication. We help your parents stay safe,
                                dignified, and comfortable—at home.
                            </p>

                            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
                                <a className="btn primary" href="tel:+918547046536">Call: +91 85470 46536</a>
                                <a className="btn ghost" href="https://wa.me/918590722353">WhatsApp: +91 85907 22353</a>
                            </div>

                            <div className="statbar">
                                <span className="stat">24×7 on-call assistance</span>
                                <span className="stat">Background-verified staff</span>
                                <span className="stat">Nurse-supervised care plans</span>
                            </div>
                        </div>

                        {SHOW_HERO_IMAGE && (
                            <div className="heroMedia">
                                <img className="poster" src="/assets/careviah-hero.jpg" alt="Careviah elder care at home" />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section id="services" className="section">
                <div className="container">
                    <h2 style={{ marginTop: 0, marginBottom: 14 }}>Our Core Services</h2>
                    <p style={{ color: '#475569', margin: '0 0 20px 0' }}>Complete, reliable support tailored to each family.</p>

                    <div className="autogrid">
                        <article className="card">
                            <h3>Healthcare Assistance</h3>
                            <p>Vitals monitoring, medication reminders, post-procedure support, wound-care guidance (as per protocol).</p>
                        </article>

                        <article className="card">
                            <h3>Housekeeping</h3>
                            <p>Light cleaning, laundry, kitchen assistance, and hygiene routines to keep home safe and comfortable.</p>
                        </article>

                        <article className="card">
                            <h3>Daily Living Support</h3>
                            <p>Meal prep, mobility help, companionship, and errands—aligned to your loved one’s daily schedule.</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* WHY + ADD-ONS (split) */}
            <section id="why" className="section">
                <div className="container split">
                    <div>
                        <h2 style={{ marginTop: 0 }}>Why Choose Careviah</h2>
                        <ul style={{ color: '#475569', lineHeight: 1.75, paddingLeft: '1.1em' }}>
                            <li>Professional process with clear scope and checklists</li>
                            <li>Transparent scheduling and regular communication</li>
                            <li>Flexible add-ons for evolving needs</li>
                            <li>Respect, safety, and consistency</li>
                        </ul>
                    </div>

                    <div className="card">
                        <strong style={{ display: 'block', marginBottom: 8 }}>Add-Ons</strong>
                        <p style={{ color: '#475569', margin: 0 }}>
                            Ambulance &amp; hospital link, laundry, gardening, deep cleaning, and more.
                        </p>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="section">
                <div className="container">
                    <h2 style={{ marginTop: 0 }}>How It Works</h2>

                    <div className="steps">
                        <div className="card step">
                            <div><span className="num">1</span><strong>Call &amp; Fit Check</strong></div>
                            <p>We understand your needs and confirm service availability.</p>
                        </div>
                        <div className="card step">
                            <div><span className="num">2</span><strong>Care Plan</strong></div>
                            <p>Scope, schedule, and safety checklist prepared by our team.</p>
                        </div>
                        <div className="card step">
                            <div><span className="num">3</span><strong>Caregiver Onboarding</strong></div>
                            <p>Background-verified staff briefed and introduced.</p>
                        </div>
                        <div className="card step">
                            <div><span className="num">4</span><strong>Ongoing Support</strong></div>
                            <p>Regular updates and supervision; add-ons as required.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ (compact, 4 items) */}
            <section className="section">
                <div className="container">
                    <h2 style={{ marginTop: 0 }}>FAQs</h2>

                    <div className="faq faqGrid">
                        <details open>
                            <summary>Do you provide overnight or 24×7 support?</summary>
                            <p>Yes. We schedule shifts based on need and availability, with oversight from our nurse lead.</p>
                        </details>
                        <details>
                            <summary>Are caregivers background-verified?</summary>
                            <p>All staff are ID-verified and trained; references and checks are part of onboarding.</p>
                        </details>
                        <details>
                            <summary>Which locations do you cover?</summary>
                            <p>Currently across Kerala with a focus on Kottayam / Pala and nearby districts.</p>
                        </details>
                        <details>
                            <summary>How do we start?</summary>
                            <p>Call or WhatsApp us. We’ll do a quick fit check and share a simple care plan.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="section">
                <div className="container">
                    <div className="cta">
                        <strong>Ready to talk?</strong>&nbsp;
                        <a href="tel:+918547046536">Call now</a>&nbsp;|&nbsp;
                        <a href="https://wa.me/918590722353">WhatsApp us</a>
                        <p style={{ color: '#475569', marginTop: 8 }}>
                            Prefer email? <a href="mailto:hello@careviah.com">hello@careviah.com</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
