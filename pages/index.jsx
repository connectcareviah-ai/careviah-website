import Seo from '../components/Seo';
import styles from '../styles/home.module.css';

export default function Home() {
    const SHOW_HERO_IMAGE = true;
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
                    "name": "Careviah",
                    "url": siteUrl || undefined,
                    "areaServed": "Kerala, India",
                    "telephone": "+918547046536",
                    "sameAs": ["https://wa.me/918590722353"]
                }}
            />

            {/* HERO */}
            <section className={`${styles.wrap} ${styles.hero}`}>
                <div className={styles.heroGrid}>
                    <div>
                        <span className={styles.eyebrow}>Serving families across Kerala</span>
                        <h1 className={styles.h1}>Comprehensive Elder Care at Home</h1>
                        <p className={styles.sub}>
                            Qualified nurses and trained caregivers coordinated through clear
                            checklists and communication. We help your parents stay safe,
                            dignified, and comfortable—at home.
                        </p>
                        <div className={styles.actions}>
                            <a className={`${styles.btn} ${styles.primary}`} href="tel:+918547046536">Call: +91 85470 46536</a>
                            <a className={`${styles.btn} ${styles.secondary}`} href="https://wa.me/918590722353">WhatsApp: +91 85907 22353</a>
                        </div>
                        <div className={styles.statbar}>
                            <span className={styles.stat}>24×7 on-call assistance</span>
                            <span className={styles.stat}>Background-verified staff</span>
                            <span className={styles.stat}>Nurse-supervised care plans</span>
                        </div>
                    </div>

                    {SHOW_HERO_IMAGE && (
                        <div className={styles.heroMedia}>
                            <img className={styles.poster} src="/assets/careviah-hero.jpg" alt="Careviah elder care at home" />
                        </div>
                    )}
                </div>
            </section>

            {/* SERVICES */}
            <section id="services" className={styles.section}>
                <h2 className={styles.h2}>Our Core Services</h2>
                <p style={{ color: "#475569", margin: "0 0 14px" }}>Complete, reliable support tailored to each family.</p>
                <div className={styles.grid}>
                    <article className={styles.card}><h3>Healthcare Assistance</h3><p>Vitals monitoring, medication reminders, post-procedure support, wound-care guidance (as per protocol).</p></article>
                    <article className={styles.card}><h3>Housekeeping</h3><p>Light cleaning, laundry, kitchen assistance, and hygiene routines to keep home safe and comfortable.</p></article>
                    <article className={styles.card}><h3>Daily Living Support</h3><p>Meal prep, mobility help, companionship, and errands—aligned to your loved one’s daily schedule.</p></article>
                </div>
            </section>

            {/* WHY + ADD-ONS */}
            <section id="why" className={`${styles.section} ${styles.split}`}>
                <div>
                    <h2 className={styles.h2}>Why Choose Careviah</h2>
                    <ul>
                        <li>Professional process with clear scope and checklists</li>
                        <li>Transparent scheduling and regular communication</li>
                        <li>Flexible add-ons for evolving needs</li>
                        <li>Respect, safety, and consistency</li>
                    </ul>
                </div>
                <div className={styles.card}>
                    <strong>Add-Ons</strong>
                    <p style={{ marginTop: 8 }}>Ambulance &amp; hospital link, laundry, gardening, deep cleaning, and more.</p>
                </div>
            </section>

            {/* PROCESS */}
            <section className={styles.section}>
                <h2 className={styles.h2}>How It Works</h2>
                <div className={styles.process}>
                    <div className={styles.step}>
                        <div><span className={styles.num}>1</span><strong>Call & Fit Check</strong></div>
                        <p style={{ marginTop: 8 }}>We understand your needs and confirm service availability.</p>
                    </div>
                    <div className={styles.step}>
                        <div><span className={styles.num}>2</span><strong>Care Plan</strong></div>
                        <p style={{ marginTop: 8 }}>Scope, schedule, and safety checklist prepared by our team.</p>
                    </div>
                    <div className={styles.step}>
                        <div><span className={styles.num}>3</span><strong>Caregiver Onboarding</strong></div>
                        <p style={{ marginTop: 8 }}>Background-verified staff briefed and introduced.</p>
                    </div>
                    <div className={styles.step}>
                        <div><span className={styles.num}>4</span><strong>Ongoing Support</strong></div>
                        <p style={{ marginTop: 8 }}>Regular updates and supervision; add-ons as required.</p>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className={styles.section}>
                <h2 className={styles.h2}>What Families Say</h2>
                <div className={styles.testis}>
                    <figure className={styles.quote}>
                        <blockquote>“Very professional and kind. The regular updates gave us complete peace of mind.”</blockquote>
                        <small>— R. Menon, Kochi</small>
                    </figure>
                    <figure className={styles.quote}>
                        <blockquote>“Nurse-supervised plan made recovery at home smooth for my father.”</blockquote>
                        <small>— A. Varghese, Kottayam</small>
                    </figure>
                    <figure className={styles.quote}>
                        <blockquote>“Flexible and dependable. Caregiver was punctual and respectful.”</blockquote>
                        <small>— S. Thomas, Thrissur</small>
                    </figure>
                </div>
            </section>

            {/* FAQ */}
            <section className={styles.section}>
                <h2 className={styles.h2}>FAQs</h2>
                <div className={styles.faq}>
                    <details className={styles.faqItem}>
                        <summary>Do you provide overnight or 24×7 support?</summary>
                        <p>Yes. We schedule shifts based on need and availability, with oversight from our nurse lead.</p>
                    </details>
                    <details className={styles.faqItem}>
                        <summary>Are caregivers background-verified?</summary>
                        <p>All staff are ID-verified and trained; references and checks are part of onboarding.</p>
                    </details>
                    <details className={styles.faqItem}>
                        <summary>Which locations do you cover?</summary>
                        <p>Currently across Kerala with a focus on Kottayam / Pala and nearby districts.</p>
                    </details>
                    <details className={styles.faqItem}>
                        <summary>How do we start?</summary>
                        <p>Call or WhatsApp us. We’ll do a quick fit check and share a simple care plan.</p>
                    </details>
                </div>
            </section>

            {/* CONTACT CTA */}
            <section id="contact" className={styles.section}>
                <div className={styles.cta}>
                    <strong>Ready to talk?</strong>&nbsp;
                    <a href="tel:+918547046536">Call now</a>&nbsp;|&nbsp;
                    <a href="https://wa.me/918590722353">WhatsApp us</a>
                </div>
                <p style={{ color: "#475569", textAlign: "center" }}>
                    Prefer email? <a href="mailto:hello@careviah.com">hello@careviah.com</a>
                </p>
            </section>
        </>
    );
}
