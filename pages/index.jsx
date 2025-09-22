// pages/index.jsx
import Head from "next/head";
import HeroMedia from "../components/HeroMedia";

export default function Home() {
    return (
        <>
            <Head>
                <title>Careviah — Elder Care at Home</title>
                <meta
                    name="description"
                    content="Qualified nurses and trained caregivers coordinated through clear checklists and communication. We help your parents stay safe, dignified, and comfortable—at home."
                />
            </Head>

            {/* HERO */}
            <section className="hero">
                <div className="wrap heroGrid">
                    <div>
                        <span className="eyebrow">Serving families across Kerala</span>
                        <h1 className="h1">Comprehensive Elder Care at Home</h1>
                        <p className="sub">
                            Qualified nurses and trained caregivers coordinated through clear
                            checklists and communication. We help your parents stay safe,
                            dignified, and comfortable—at home.
                        </p>

                        <div className="actions">
                            <a className="btn primary" href="tel:+918547046536">
                                Call: +91 85470 46536
                            </a>
                            <a className="btn secondary" href="https://wa.me/918590722353">
                                WhatsApp: +91 85907 22353
                            </a>
                        </div>

                        <div className="statbar">
                            <span className="stat">24×7 on-call assistance</span>
                            <span className="stat">Background-verified staff</span>
                            <span className="stat">Nurse-supervised care plans</span>
                        </div>
                    </div>

                    {/* Slideshow on the right */}
                    <HeroMedia />
                </div>
            </section>

            {/* CORE SERVICES — dark band */}
            <section id="services" className="bandDark">
                <div className="wrap">
                    <h2 className="h2 h2Light">Our Core Services</h2>
                    <p className="lead onDark">
                        Complete, reliable support tailored to each family.
                    </p>

                    <div className="grid">
                        <article className="card">
                            <div className="icon">🩺</div>
                            <h3>Healthcare Assistance</h3>
                            <p>
                                Vitals monitoring, medication reminders, post-procedure support
                                and wound-care guidance (as per protocol).
                            </p>
                        </article>

                        <article className="card">
                            <div className="icon">🧹</div>
                            <h3>Housekeeping</h3>
                            <p>
                                Light cleaning, laundry, kitchen assistance, and hygiene routines
                                to keep home safe and comfortable.
                            </p>
                        </article>

                        <article className="card">
                            <div className="icon">🤝</div>
                            <h3>Daily Living Support</h3>
                            <p>
                                Meal prep, mobility help, companionship, and errands—aligned to
                                your loved one’s daily schedule.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* ADD-ON SERVICES — warm band */}
            <section id="addons" className="bandWarm">
                <div className="wrap">
                    <h2 className="h2">Add-On Services</h2>
                    <p className="lead">
                        Mix & match extras as needs evolve—easy to add, pause, or swap.
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
                            <p>
                                Help with admission support, documents, and basic coordination.
                            </p>
                        </article>

                        <article className="card">
                            <div className="icon">🧺</div>
                            <h3>Laundry</h3>
                            <p>
                                Regular laundry & linen refresh to keep things fresh and hygienic.
                            </p>
                        </article>

                        <article className="card">
                            <div className="icon">🌿</div>
                            <h3>Gardening</h3>
                            <p>Light garden upkeep for a pleasant, safe home environment.</p>
                        </article>

                        <article className="card">
                            <div className="icon">🧽</div>
                            <h3>Deep Cleaning</h3>
                            <p>
                                Scheduled deep cleans for bathrooms, kitchen, and high-touch
                                areas.
                            </p>
                        </article>

                        <article className="card">
                            <div className="icon">🧰</div>
                            <h3>General Help</h3>
                            <p>
                                Small tasks and errands that make daily life easier for families.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS — dark band */}
            <section id="how" className="bandDark">
                <div className="wrap">
                    <h2 className="h2 h2Light">How It Works</h2>
                    <div className="steps">
                        <article className="stepCard">
                            <span className="badge">1</span>
                            <h3>Call & Fit Check</h3>
                            <p>We understand your needs and confirm service availability.</p>
                        </article>
                        <article className="stepCard">
                            <span className="badge">2</span>
                            <h3>Care Plan</h3>
                            <p>Scope, schedule, and safety checklist prepared by our team.</p>
                        </article>
                        <article className="stepCard">
                            <span className="badge">3</span>
                            <h3>Caregiver Onboarding</h3>
                            <p>Background-verified staff briefed and introduced.</p>
                        </article>
                        <article className="stepCard">
                            <span className="badge">4</span>
                            <h3>Ongoing Support</h3>
                            <p>Regular updates & supervision; add-ons as required.</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="section">
                <div className="wrap">
                    <h2 className="h2">FAQs</h2>

                    <div className="faqGrid">
                        <details className="faq">
                            <summary>Do you provide overnight or 24×7 support?</summary>
                            <p>
                                Yes. We schedule shifts based on need and availability, with
                                oversight from our nurse lead.
                            </p>
                        </details>

                        <details className="faq">
                            <summary>Are caregivers background-verified?</summary>
                            <p>
                                All staff are ID-verified and trained; references and checks are
                                part of onboarding.
                            </p>
                        </details>

                        <details className="faq">
                            <summary>Which locations do you cover?</summary>
                            <p>
                                Currently across Kerala with a focus on Kottayam / Pala and
                                nearby districts.
                            </p>
                        </details>

                        <details className="faq">
                            <summary>How do we start?</summary>
                            <p>
                                Call or WhatsApp us. We’ll do a quick fit check and share a
                                simple care plan.
                            </p>
                        </details>
                    </div>

                    <div className="cta">
                        <strong>Ready to talk?</strong>&nbsp;
                        <a href="tel:+918547046536">Call now</a> |{" "}
                        <a href="https://wa.me/918590722353">WhatsApp us</a>
                        <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                            Prefer email?{" "}
                            <a href="mailto:hello@careviah.com">hello@careviah.com</a>
                        </p>
                    </div>
                </div>
            </section>

            {/* =========  STYLES  ========= */}
            <style jsx global>{`
        :root{
          --brand: #0e7490;     /* Teal */
          --accent: #f6c653;    /* Honey */
          --bg: #f6f8fb;        /* Page background */
          --ink: #102a43;       /* Headlines */
          --muted: #475569;     /* Body text */
          --inkDark: #0f172a;   /* Deep navy */
          --card: #ffffff;
          --shadow: 0 10px 30px rgba(2, 8, 23, 0.08);
          --ring: rgba(2, 8, 23, 0.12);
          --butter: #fff4d9;    /* warm band */
          --border: rgba(2,8,23,.06);
        }
        * { box-sizing: border-box }
        html, body { margin: 0; padding: 0; }
        body {
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          background: var(--bg);
          color: var(--ink);
        }
        a { color: var(--brand); text-decoration: none; }
        a:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; border-radius: 8px; }
      `}</style>

            <style jsx>{`
        /* layout */
        .wrap { max-width: 1160px; margin: 0 auto; padding: 28px 20px; }
        .section { padding: 48px 0; }
        .h2 { font-size: clamp(26px, 3.4vw, 38px); letter-spacing: -0.02em; margin: 4px 0 18px; }
        .h2Light { color: #fff; }
        .lead { color: var(--muted); margin-bottom: 20px; }
        .onDark { color: #cbd5e1; }

        /* hero */
        .hero {
          background:
            radial-gradient(1400px 600px at -10% -10%, #ffffff 0, transparent 60%),
            var(--bg);
          padding: 20px 0 56px;
        }
        .heroGrid {
          display: grid;
          gap: 28px;
          align-items: center;
          grid-template-columns: 1.1fr .9fr;
        }
        .eyebrow {
          display: inline-block; padding: 10px 16px; border-radius: 999px;
          background: rgba(246, 198, 83, 0.25); border: 1px solid rgba(246, 198, 83, 0.45);
          color: #7a5a00; font-weight: 600;
        }
        .h1 {
          font-size: clamp(36px, 6vw, 64px);
          line-height: 1.04; letter-spacing: -0.02em; margin: 14px 0 12px;
        }
        .sub { color: var(--muted); max-width: 62ch; font-size: 18px; }
        .actions { display: flex; gap: 14px; flex-wrap: wrap; margin: 18px 0 8px; }
        .btn {
          display: inline-flex; align-items: center; justify-content: center;
          height: 48px; padding: 0 18px; border-radius: 999px; font-weight: 700;
          border: 1px solid transparent; transition: transform .05s ease, box-shadow .2s ease;
          box-shadow: var(--shadow);
        }
        .btn:active { transform: translateY(1px); }
        .primary { background: #0b5c73; color: #fff; }
        .primary:hover { background: var(--brand); }
        .secondary { background: #fff; color: #0b5c73; border-color: rgba(7, 89, 133, 0.25); }
        .secondary:hover { border-color: rgba(7, 89, 133, 0.45); }
        .statbar { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 10px; }
        .stat { background: #fff; color: var(--muted); border-radius: 999px; padding: 10px 14px; border: 1px solid var(--border); box-shadow: var(--shadow); }

        /* bands */
        .bandWarm { padding-block: 64px; background: var(--butter); }
        .bandDark {
          padding-block: 64px;
          background:
            radial-gradient(900px 520px at 15% -20%, rgba(14,116,144,.18) 0%, transparent 55%),
            linear-gradient(180deg, #0f172a 0%, #0b2239 100%);
        }

        /* grids & cards */
        .grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 22px; }
        .card {
          grid-column: span 12; background: var(--card); border-radius: 18px; padding: 20px;
          box-shadow: var(--shadow); border: 1px solid var(--border);
        }
        .card h3 { margin: 6px 0 8px; font-size: 20px; }
        .card p { color: var(--muted); }
        .icon {
          width: 40px; height: 40px; border-radius: 12px; display: inline-flex;
          align-items: center; justify-content: center; background: rgba(246, 198, 83, 0.2);
          color: #7a5a00; font-size: 22px; margin-bottom: 10px;
        }

        /* steps */
        .steps { display: grid; grid-template-columns: repeat(12, 1fr); gap: 18px; }
        .stepCard {
          grid-column: span 12; background: #fff; border-radius: 16px; padding: 18px;
          box-shadow: var(--shadow);
        }
        .badge {
          width: 32px; height: 32px; border-radius: 999px; font-weight: 800;
          color: #7a4a00; background: var(--accent); display: inline-flex; align-items: center; justify-content: center;
          box-shadow: 0 6px 20px rgba(246, 198, 83, .35); margin-bottom: 8px;
        }

        /* faq */
        .faqGrid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 18px; }
        .faq { grid-column: span 12; background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 14px 18px; box-shadow: var(--shadow); }
        .faq summary { cursor: pointer; font-weight: 700; color: var(--ink); }
        .faq p { color: var(--muted); margin-top: 8px; }

        /* cta */
        .cta {
          margin: 24px auto 8px; max-width: 900px; border: 1px solid var(--border);
          border-radius: 14px; padding: 16px; text-align: center; background: #fff; box-shadow: var(--shadow);
        }

        /* responsive */
        @media (min-width: 720px) {
          .grid > .card { grid-column: span 6; }
          .steps > .stepCard { grid-column: span 3; }
          .faqGrid > .faq { grid-column: span 6; }
        }
        @media (min-width: 1100px) {
          .grid > .card { grid-column: span 4; }
        }
        @media (max-width: 1024px) {
          .heroGrid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .heroGrid { grid-template-columns: 1fr; }
        }
      `}</style>
        </>
    );
}

