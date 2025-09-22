import Seo from '../components/Seo';
import styles from '../styles/home.module.css';

export default function Home() {
    const SHOW_HERO_IMAGE = false; // image hidden per your preference
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
                            <a className={`${styles.btn} ${styles.primary}`} href="tel:+918547046536" aria-label="Call Careviah">
                                Call: +91 85470 46536
                            </a>
                            <a className={`${styles.btn} ${styles.secondary}`} href="https://wa.me/918590722353" aria-label="Chat on WhatsApp">
                                WhatsApp: +91 85907 22353
                            </a>
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

            {/* SERVICES — dark ink band */}
            <section id="services" className={`${styles.section} ${styles.bandInk}`}>
                <div className={styles.wrap}>
                    <h2 className={`${styles.h2} ${styles.h2Light}`}>Our Core Services</h2>
                    <p className={styles.leadLight}>Complete, reliable support tailored to each family.</p>

                    <div className={styles.grid}>
                        <article className={`${styles.card} ${styles.cardOnDark}`}>
                            <span className={`${styles.icon} ${styles.iconOnDark}`}>🧬</span>
                            <h3>Healthcare Assistance</h3>
                            <p>
                                Vitals monitoring, medication reminders, post-procedure support, and wound-care
                                guidance (as per protocol).
                            </p>
                        </article>

                        <article className={`${styles.card} ${styles.cardOnDark}`}>
                            <span className={`${styles.icon} ${styles.iconOnDark}`}>🧹</span>
                            <h3>Housekeeping</h3>
                            <p>
                                Light cleaning, laundry, kitchen assistance, and hygiene routines to keep home safe and
                                comfortable.
                            </p>
                        </article>

                        <article className={`${styles.card} ${styles.cardOnDark}`}>
                            <span className={`${styles.icon} ${styles.iconOnDark}`}>🤝</span>
                            <h3>Daily Living Support</h3>
                            <p>
                                Meal prep, mobility help, companionship, and errands—aligned to your loved one’s daily
                                schedule.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* WHY — no Add-Ons Summary */}
            <section id="why" className={styles.section}>
                <div className={styles.wrapSplit}>
                    <div>
                        <h2 className={styles.h2}>Why Choose Careviah</h2>
                        <ul className={styles.bullets}>
                            <li>Professional process with clear scope and checklists</li>
                            <li>Transparent scheduling and regular communication</li>
                            <li>Flexible add-ons for evolving needs</li>
                            <li>Respect, safety, and consistency</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ADD-ON SERVICES — warm band */}
            <section className={`${styles.section} ${styles.bandWarm}`}>
                <div className={styles.wrap}>
                    <h2 className={styles.h2}>Add-On Services</h2>
                    <p className={styles.lead}>
                        Mix &amp; match extras as needs evolve—easy to add, pause, or swap.
                    </p>

                    <div className={styles.grid}>
                        <article className={styles.card}>
                            <span className={styles.icon}>🚑</span>
                            <h3>Ambulance Link</h3>
                            <p>Coordinated ambulance support for planned or urgent needs.</p>
                        </article>
                        <article className={styles.card}>
                            <span className={styles.icon}>🏥</span>
                            <h3>Hospital Assistance</h3>
                            <p>Admission support, documents, and coordination.</p>
                        </article>
                        <article className={styles.card}>
                            <span className={styles.icon}>🧺</span>
                            <h3>Laundry</h3>
                            <p>Regular laundry &amp; linen refresh to keep things hygienic.</p>
                        </article>
                        <article className={styles.card}>
                            <span className={styles.icon}>🌿</span>
                            <h3>Gardening</h3>
                            <p>Light garden upkeep for a pleasant, safe home environment.</p>
                        </article>
                        <article className={styles.card}>
                            <span className={styles.icon}>🧼</span>
                            <h3>Deep Cleaning</h3>
                            <p>Scheduled deep cleans for bathrooms, kitchen, and high-touch areas.</p>
                        </article>
                        <article className={styles.card}>
                            <span className={styles.icon}>🎒</span>
                            <h3>General Help</h3>
                            <p>Small tasks and errands that make daily life easier for families.</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS — dark gradient band */}
            <section className={`${styles.section} ${styles.bandDark}`}>
                <div className={styles.wrap}>
                    <h2 className={`${styles.h2} ${styles.h2Light}`}>How It Works</h2>
                    <div className={styles.steps}>
                        <article className={styles.stepCard}>
                            <span className={styles.badge}>1</span>
                            <h3>Call &amp; Fit Check</h3>
                            <p>We understand your needs and confirm service availability.</p>
                        </article>
                        <article className={styles.stepCard}>
                            <span className={styles.badge}>2</span>
                            <h3>Care Plan</h3>
                            <p>Scope, schedule, and safety checklist prepared by our team.</p>
                        </article>
                        <article className={styles.stepCard}>
                            <span className={styles.badge}>3</span>
                            <h3>Caregiver Onboarding</h3>
                            <p>Background-verified staff briefed and introduced.</p>
                        </article>
                        <article className={styles.stepCard}>
                            <span className={styles.badge}>4</span>
                            <h3>Ongoing Support</h3>
                            <p>Regular updates and supervision; add-ons as required.</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className={styles.section}>
                <div className={styles.wrap}>
                    <h2 className={styles.h2}>FAQs</h2>
                    <div className={styles.faqGrid}>
                        <details className={styles.faq}>
                            <summary>Do you provide overnight or 24×7 support?</summary>
                            <p>Yes. We schedule shifts based on need and availability, with oversight from our nurse lead.</p>
                        </details>
                        <details className={styles.faq}>
                            <summary>Are caregivers background-verified?</summary>
                            <p>All staff are ID-verified and trained; references and checks are part of onboarding.</p>
                        </details>
                        <details className={styles.faq}>
                            <summary>Which locations do you cover?</summary>
                            <p>Currently across Kerala with a focus on Kottayam / Pala and nearby districts.</p>
                        </details>
                        <details className={styles.faq}>
                            <summary>How do we start?</summary>
                            <p>Call or WhatsApp us. We’ll do a quick fit check and share a simple care plan.</p>
                        </details>
                    </div>

                    <div className={styles.cta}>
                        <strong>Ready to talk?</strong>&nbsp;
                        <a href="tel:+918547046536">Call now</a>&nbsp;|&nbsp;
                        <a href="https://wa.me/918590722353">WhatsApp us</a>
                        <p style={{ color: '#475569', margin: '8px 0 0' }}>
                            Prefer email? <a href="mailto:hello@careviah.com">hello@careviah.com</a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Mobile sticky bar */}
            <div className={styles.mobileBar}>
                <a className={`${styles.btn} ${styles.primary}`} href="tel:+918547046536">Call</a>
                <a className={`${styles.btn} ${styles.secondary}`} href="https://wa.me/918590722353">WhatsApp</a>
            </div>
        </>
    );
}



