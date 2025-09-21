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
            <section className={`${styles.bandHero}`}>
                <div className={styles.wrap}>
                    <div className={styles.heroGrid}>
                        <div>
                            <span className={styles.eyebrow}>Serving families across Kerala</span>
                            <h1 className={styles.h1}>Comprehensive Elder Care at Home</h1>
                            <p className={styles.sub}>
                                Qualified nurses and trained caregivers coordinated through clear checklists and communication.
                                We help your parents stay safe, dignified, and comfortable—at home.
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
                </div>
            </section>

            {/* CORE SERVICES — tinted band like Samarth */}
            <section id="services" className={`${styles.band} ${styles.servicesBand}`}>
                <div className={styles.wrap}>
                    <h2 className={styles.h2}>Our Core Services</h2>
                    <p className={styles.kicker}>Complete, reliable support tailored to each family.</p>

                    <div className={styles.serviceGrid}>
                        <article className={styles.card}>
                            <div className={styles.cardIcon} aria-hidden>🩺</div>
                            <h3>Healthcare Assistance</h3>
                            <p>Vitals monitoring, medication reminders, post-procedure support, and wound-care guidance (as per protocol).</p>
                        </article>

                        <article className={styles.card}>
                            <div className={styles.cardIcon} aria-hidden>🧹</div>
                            <h3>Housekeeping</h3>
                            <p>Light cleaning, laundry, kitchen assistance, and hygiene routines to keep home safe and comfortable.</p>
                        </article>

                        <article className={styles.card}>
                            <div className={styles.cardIcon} aria-hidden>🤝</div>
                            <h3>Daily Living Support</h3>
                            <p>Meal prep, mobility help, companionship, and errands—aligned to your loved one’s daily schedule.</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* WHY */}
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

                    <div className={styles.card}>
                        <strong>Add-Ons</strong>
                        <p className={styles.mt8}>
                            Ambulance &amp; hospital link, laundry, gardening, deep cleaning, and more.
                        </p>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className={styles.section}>
                <div className={styles.wrap}>
                    <h2 className={styles.h2}>How It Works</h2>
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <span className={styles.badge}>1</span>
                            <div>
                                <h3>Call &amp; Fit Check</h3>
                                <p>We understand your needs and confirm service availability.</p>
                            </div>
                        </div>

                        <div className={styles.step}>
                            <span className={styles.badge}>2</span>
                            <div>
                                <h3>Care Plan</h3>
                                <p>Scope, schedule, and safety checklist prepared by our team.</p>
                            </div>
                        </div>

                        <div className={styles.step}>
                            <span className={styles.badge}>3</span>
                            <div>
                                <h3>Caregiver Onboarding</h3>
                                <p>Background-verified staff briefed and introduced.</p>
                            </div>
                        </div>

                        <div className={styles.step}>
                            <span className={styles.badge}>4</span>
                            <div>
                                <h3>Ongoing Support</h3>
                                <p>Regular updates and supervision; add-ons as required.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQS (kept simple, no expanders) */}
            <section className={styles.section}>
                <div className={styles.wrap}>
                    <h2 className={styles.h2}>FAQs</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faq}>
                            <h4>Do you provide overnight or 24×7 support?</h4>
                            <p>Yes. We schedule shifts based on need and availability, with oversight from our nurse lead.</p>
                        </div>
                        <div className={styles.faq}>
                            <h4>Are caregivers background-verified?</h4>
                            <p>All staff are ID-verified and trained; references and checks are part of onboarding.</p>
                        </div>
                        <div className={styles.faq}>
                            <h4>Which locations do you cover?</h4>
                            <p>Currently across Kerala with a focus on Kottayam / Pala and nearby districts.</p>
                        </div>
                        <div className={styles.faq}>
                            <h4>How do we start?</h4>
                            <p>Call or WhatsApp us. We’ll do a quick fit check and share a simple care plan.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className={styles.section}>
                <div className={styles.wrap}>
                    <div className={styles.cta}>
                        <strong>Ready to talk?</strong>&nbsp;
                        <a href="tel:+918547046536">Call now</a>&nbsp;|&nbsp;
                        <a href="https://wa.me/918590722353">WhatsApp us</a>
                    </div>
                    <p className={styles.emailLine}>
                        Prefer email? <a href="mailto:hello@careviah.com">hello@careviah.com</a>
                    </p>
                </div>
            </section>

            {/* sticky mobile bar */}
            <div className={styles.bottomBar} role="region" aria-label="Quick contact">
                <a className={`${styles.btn} ${styles.ghost}`} href="tel:+918547046536">Call</a>
                <a className={`${styles.btn} ${styles.primary}`} href="https://wa.me/918590722353">WhatsApp</a>
            </div>
        </>
    );
}
