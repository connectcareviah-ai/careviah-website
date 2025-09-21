import Seo from '../components/Seo';
import styles from '../styles/home.module.css';

export default function Home() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const core = [
        {
            icon: '🩺',
            title: 'Healthcare Assistance',
            body:
                'Vitals monitoring, medication reminders, post-procedure support, and wound-care guidance (as per protocol).',
        },
        {
            icon: '🧹',
            title: 'Housekeeping',
            body:
                'Light cleaning, laundry, kitchen assistance, and hygiene routines to keep home safe and comfortable.',
        },
        {
            icon: '🤝',
            title: 'Daily Living Support',
            body:
                'Meal prep, mobility help, companionship, and errands—aligned to your loved one’s daily schedule.',
        },
    ];

    const addons = [
        {
            icon: '🚑',
            title: 'Ambulance Link',
            body: 'Coordinated ambulance support for planned or urgent needs.',
        },
        {
            icon: '🧳',
            title: 'Hospital Assistance',
            body: 'Admission support, documents, and basic coordination.',
        },
        {
            icon: '🧺',
            title: 'Laundry',
            body: 'Regular laundry & linen refresh to keep things fresh and hygienic.',
        },
        {
            icon: '🌿',
            title: 'Gardening',
            body: 'Light garden upkeep for a pleasant, safe home environment.',
        },
        {
            icon: '🧼',
            title: 'Deep Cleaning',
            body: 'Scheduled deep cleans for bathrooms, kitchen, and high-touch areas.',
        },
        {
            icon: '👜',
            title: 'General Help',
            body: 'Small tasks and errands that make daily life easier for families.',
        },
    ];

    const steps = [
        {
            num: 1,
            title: 'Call & Fit Check',
            body:
                'We understand your needs and confirm service availability.',
        },
        {
            num: 2,
            title: 'Care Plan',
            body:
                'Scope, schedule, and safety checklist prepared by our team.',
        },
        {
            num: 3,
            title: 'Caregiver Onboarding',
            body:
                'Background-verified staff briefed and introduced.',
        },
        {
            num: 4,
            title: 'Ongoing Support',
            body:
                'Regular updates and supervision; add-ons as required.',
        },
    ];

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
            <section className={`${styles.section} ${styles.hero}`} id="home">
                <div className={styles.wrap}>
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
                                <a className={`${styles.btn} ${styles.primary}`} href="tel:+918547046536">
                                    Call: +91 85470 46536
                                </a>
                                <a className={`${styles.btn} ${styles.secondary}`} href="https://wa.me/918590722353">
                                    WhatsApp: +91 85907 22353
                                </a>
                            </div>

                            <div className={styles.statbar}>
                                <span className={styles.stat}>24×7 on-call assistance</span>
                                <span className={styles.stat}>Background-verified staff</span>
                                <span className={styles.stat}>Nurse-supervised care plans</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE SERVICES */}
            <section className={`${styles.section} ${styles.bandWarm}`} id="services">
                <div className={styles.wrap}>
                    <h2 className={styles.h2}>Our Core Services</h2>
                    <p className={styles.lead}>
                        Complete, reliable support tailored to each family.
                    </p>
                    <div className={styles.grid}>
                        {core.map((c, i) => (
                            <article key={i} className={styles.card}>
                                <span className={styles.icon} aria-hidden>{c.icon}</span>
                                <h3>{c.title}</h3>
                                <p>{c.body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY + ADD-ONS SUMMARY */}
            <section className={styles.section} id="why">
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
                        <strong>Add-Ons Summary</strong>
                        <p style={{ marginTop: 8 }}>
                            Ambulance &amp; hospital link, laundry, gardening, deep cleaning, and more.
                        </p>
                    </div>
                </div>
            </section>

            {/* ADD-ON SERVICES */}
            <section className={`${styles.section} ${styles.bandWarm}`} id="addons">
                <div className={styles.wrap}>
                    <h2 className={styles.h2}>Add-On Services</h2>
                    <p className={styles.lead}>
                        Mix &amp; match extras as needs evolve—easy to add, pause, or swap.
                    </p>
                    <div className={styles.grid}>
                        {addons.map((a, i) => (
                            <article key={i} className={styles.card}>
                                <span className={styles.icon} aria-hidden>{a.icon}</span>
                                <h3>{a.title}</h3>
                                <p>{a.body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS (DARK BAND) */}
            <section className={`${styles.section} ${styles.bandDark}`} id="how">
                <div className={styles.wrap}>
                    <h2 className={`${styles.h2} ${styles.h2Light}`}>How It Works</h2>
                    <div className={styles.steps}>
                        {steps.map((s) => (
                            <article key={s.num} className={styles.stepCard}>
                                <span className={styles.badge}>{s.num}</span>
                                <h3>{s.title}</h3>
                                <p>{s.body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className={styles.section} id="faq">
                <div className={styles.wrap}>
                    <h2 className={styles.h2}>FAQs</h2>
                    <div className={styles.faqGrid}>
                        <details className={styles.faq} open>
                            <summary>Do you provide overnight or 24×7 support?</summary>
                            <p>Yes. We schedule shifts based on need and availability, with oversight from our nurse lead.</p>
                        </details>
                        <details className={styles.faq} open>
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

                    <div className={styles.cta} id="contact">
                        <strong>Ready to talk?</strong>&nbsp;
                        <a href="tel:+918547046536">Call now</a>&nbsp;|&nbsp;
                        <a href="https://wa.me/918590722353">WhatsApp us</a>
                        <p style={{ color: 'var(--muted)', margin: '8px 0 0' }}>
                            Prefer email? <a href="mailto:hello@careviah.com">hello@careviah.com</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
