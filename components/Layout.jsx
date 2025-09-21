import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header className="siteHeader">
        <div className="container bar">
          <a href="/" className="brand">
            Careviah
            <small>Near in Heart, Always in Care</small>
          </a>

          <nav className="nav">
            {/* Use Link for internal pages */}
            <Link href="/">Home</Link>
            {/* Hash links can stay as <a> */}
            <a href="/#services">Services</a>
            <a href="/#why">Why Careviah</a>
            <a href="/#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">{children}</main>

      <footer className="siteFooter">
        <div className="container bar">
          <span>© {new Date().getFullYear()} Careviah • Kerala, India</span>
          <div className="nav">
            <a href="tel:+918547046536">Call</a>
            <a href="https://wa.me/918590722353">WhatsApp</a>
          </div>
        </div>
      </footer>

      {/* Mobile quick actions (hidden on desktop via CSS) */}
      <div className="bottombar">
        <a className="primary" href="tel:+918547046536">Call</a>
        <a href="https://wa.me/918590722353">WhatsApp</a>
      </div>
    </>
  );
}


