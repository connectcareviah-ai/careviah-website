import Head from 'next/head'
import Image from 'next/image'


export default function Home(){
  return (<>
    <Head>
      <title>Careviah — Comprehensive Elder Care</title>
      <meta name="description" content="Healthcare at home, housekeeping, and daily living support near Pala, Kerala. Qualified doctors, nurses, physiotherapists & trained staff."/>
      <meta name="robots" content="noindex,nofollow"/>
      <link rel="icon" href="/assets/careviah-hero.jpg" />
    </Head>

    <header className="nav">
      <div className="container nav-inner">
        <div>
          <div className="brand">Careviah</div>
          <div className="tag">Near in Heart, Always in Care</div>
        </div>
        <nav>
          <a href="#services">Services</a>
          <a href="#why">Why Careviah</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <section className="hero">
      <div className="container wrap">
        <div>
          <span className="badge">Serving Near Pala, Kerala</span>
          <h1>Comprehensive Elder Care at Home</h1>
          <p>When life takes you far, Careviah stays near—supporting your parents with dignity and trust.</p>
          <div className="cta">
            <a className="btn primary" href="tel:+918547046536">Call: +91 85470 46536</a>
            <a className="btn" href="https://wa.me/918590722353" target="_blank" rel="noopener">WhatsApp: +91 85907 22353</a>
          </div>
          <p className="note">24×7 on-call assistance for urgent needs.</p>
        </div>
        <div>
          <Image src="/assets/careviah-hero.jpg" alt="Careviah elder care" width={1200} height={700} priority />
        </div>
      </div>
    </section>

    <section id="services" className="section">
      <div className="container">
        <h2>Our Core Services</h2>
        <p className="lead">Complete care solutions tailored to each family—delivered by qualified doctors, nurses, physiotherapists, social workers, and trained staff.</p>
        <div className="grid">
          <div className="card">
            <h3>Healthcare</h3>
            <p>Doctor visits for regular check-ups, in-home nursing, physiotherapy for recovery and mobility, and social work support to coordinate with families and providers.</p>
          </div>
          <div className="card">
            <h3>Housekeeping</h3>
            <p>Daily cleaning of rooms, kitchens, and bathrooms; responsible waste management; a safe, hygienic home environment for peace and dignity.</p>
            <ul className="list"><li>Specialized deep cleaning available as an add-on.</li></ul>
          </div>
          <div className="card">
            <h3>Daily Living Support</h3>
            <p>Groceries and medicines, delivery of household essentials, help with paying bills and running errands, hospital coordination &amp; ambulance assistance.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2>Add-On Services</h2>
        <div className="badges">
          <span className="badge">Laundry &amp; Ironing</span>
          <span className="badge">Gardening</span>
          <span className="badge">Plumbing &amp; Electrical</span>
          <span className="badge">Painting &amp; Maintenance</span>
          <span className="badge">Deep Cleaning</span>
          <span className="badge">Other Support on Request</span>
        </div>
      </div>
    </section>

    <section id="why" className="section">
      <div className="container">
        <h2>Why Choose Careviah</h2>
        <div className="grid">
          <div className="card"><h3>Comprehensive Care</h3><p>Healthcare, housekeeping, and daily living support—all under one trusted team.</p></div>
          <div className="card"><h3>Qualified Professionals</h3><p>Doctors, nurses, physiotherapists, social workers & trained staff focused on quality care.</p></div>
          <div className="card"><h3>Personalized Support</h3><p>Services tailored to the unique needs of each elder and family.</p></div>
          <div className="card"><h3>24×7 Availability</h3><p>Always just a call away in case of emergencies.</p></div>
          <div className="card"><h3>Compassion at the Core</h3><p>Beyond services—we provide care that feels like family.</p></div>
        </div>
      </div>
    </section>

    <section id="contact" className="section">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact">
          <div className="card">
            <h3>Talk to Us</h3>
            <p><strong>Phone:</strong> <a href="tel:+918547046536">+91 85470 46536</a><br/>
               <strong>Phone:</strong> <a href="tel:+918590722353">+91 85907 22353</a><br/>
               <strong>WhatsApp:</strong> Available on both numbers</p>
            <p><strong>Service Location:</strong> Near Pala, Kerala</p>
            <p className="note">With Careviah, support is never far away—just a call or message, anytime you need us.</p>
          </div>
          <div className="card">
            <h3>Share this Page</h3>
            <p>Send <a href="https://www.careviah.in" target="_blank" rel="noopener">www.careviah.in</a> to family or friends who may need help for their elders.</p>
            <p className="note">Search engines are asked not to index this page (noindex).</p>
          </div>
        </div>
      </div>
    </section>

    <footer className="footer">
      <div className="container">© 2025 Careviah — Near in Heart, Always in Care.</div>
    </footer>
  </>)
}
