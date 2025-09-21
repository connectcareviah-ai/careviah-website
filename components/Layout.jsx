// components/Layout.jsx
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      {/* Sticky header */}
      <header className="siteHeader">
        <div className="container bar">
          <div className="brand">
            <Link href="/" className="brandLink" aria-label="Careviah — Home">
              Careviah
            </Link>
            <small className="tagline">Near in Heart, Always in Care</small>
          </div>

          <nav className="nav" aria-label="Primary">
            <Link href="/" className="navLink">Home</Link>
            <a href="#services" className="navLink">Services</a>
            <a href="#why" className="navLink">Why Careviah</a>
            <a href="#contact" className="navLink">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main>{children}</main>

      {/* Mobile sticky actions */}
      <div className="mobileBar">
        <a className="btn ghost" href="tel:+918547046536" aria-label="Call Careviah">Call</a>
        <a className="btn primary" href="https://wa.me/918590722353" aria-label="WhatsApp Careviah">WhatsApp</a>
      </div>

      {/* Footer */}
      <footer className="siteFooter">
        <div className="container bar">
          <span>© {new Date().getFullYear()} Careviah • Kerala, India</span>
          <a href="mailto:hello@careviah.com" className="footerLink">hello@careviah.com</a>
        </div>
      </footer>
    </>
  );
}

