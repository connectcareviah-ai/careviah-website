import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header className="siteHeader">
        <div className="container bar">
          <div className="brand">
            Careviah
            <small>Near in Heart, Always in Care</small>
          </div>
          <nav className="nav">
            <Link href="/">Home</Link>
            <a href="/#services">Services</a>
            <a href="/#why">Why Careviah</a>
            <a href="/#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">{children}</main>

      <footer className="siteFooter">
        <div className="container bar">
          <div>© {new Date().getFullYear()} Careviah • Kerala, India</div>
          <div>
            <a href="tel:+918547046536" className="btn ghost" style={{ marginRight: 8 }}>Call</a>
            <a href="https://wa.me/918590722353" className="btn primary">WhatsApp</a>
          </div>
        </div>
      </footer>
    </>
  );
}
