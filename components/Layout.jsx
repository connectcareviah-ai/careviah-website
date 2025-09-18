export default function Layout({ children }) {
  return (
    <>
      <header className="site-header" style={{padding:"12px 16px",borderBottom:"1px solid #eee"}}>
        <strong>Careviah</strong>
        <nav style={{float:"right",display:"flex",gap:"12px"}}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main style={{maxWidth:960,margin:"0 auto",padding:"24px"}}>{children}</main>
      <footer style={{borderTop:"1px solid #eee",padding:"16px",textAlign:"center"}}>
        © {new Date().getFullYear()} Careviah
      </footer>
    </>
  );
}
