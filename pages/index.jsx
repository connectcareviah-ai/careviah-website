import Head from 'next/head';
import styles from '../styles/home.module.css';

export default function Home() {
    const SHOW_HERO_IMAGE = true; // set to false if you don't want an image yet

    return (
        <>
            <Head>
                <title>Careviah — Professional Home Care Services</title>
                <meta
                    name="description"
                    content="Compassionate home care with professional standards—healthcare assistance, housekeeping, and daily living support."
                />
            </Head>

            <section className={styles.wrap}>
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
                            <img
                                className={styles.poster}
                                src="/careviah-hero.jpg"   // change to /assets/careviah-hero.jpg if that's your path
                                alt="Careviah elder care at home"
                            />
                        </div>
                    )}
                </div>
            </section>

            <section id="services" className={styles.section}>
                <h2 className={styles.h2}>Our Core Services</h2>
                <p style={{ color: "#475569", margin: "0 0 14px" }}>Complete, reliable support tailored to each family.</p>
                <div className={styles.grid}>
                    <article className={styles.card}>
                        <h3>Healthcare Assistance</h3>
                        <p>Vitals monitoring, medication reminders, post-procedure support, wound care guidance (as per protocol).</p>
                    </article>
                    <article className={styles.card}>
                        <h3>Housekeeping</h3>
                        <p>Light cleaning, laundry, kitchen assistance, and hygiene routines to keep home safe and comfortable.</p>
                    </article>
                    <article className={styles.card}>
                        <h3>Daily Living Support</h3>
                        <p>Meal prep, mobility help, companionship, and errands—aligned to your loved one’s daily schedule.</p>
                    </article>
                </div>
            </section>

            <section id="why" className={`${styles.section} ${styles.split}`}>
                <div>
                    <h2 className={styles.h2}>Why Choose Careviah</h2>
                    <ul>
                        <li>Professional process with clear scope and checklists</li>
                        <li>Transparent scheduling and regular communication updates</li>
                        <li>Flexible add-ons for evolving needs</li>
                        <li>Respect, safety, and consistency at the center of care</li>
                    </ul>
                </div>
                <div className={styles.card}>
                    <strong>Add-Ons</strong>
                    <p style={{ marginTop: 8 }}>
                        Ambulance &amp; hospital link, laundry, gardening, deep cleaning, and other household support as needed.
                    </p>
                </div>
            </section>

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

