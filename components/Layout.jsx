export default function Layout({ children }) {
  return (
    <>
      <header className="site-header" style={{padding:"12px 16px",borderBottom:"1px solid #eee"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"flex",alignItems:"center",gap:16}}>
          <div>
            <strong>Careviah</strong>
            <div style={{fontSize:12,color:"#64748b"}}>Near in Heart, Always in Care</div>
          </div>
          <nav style={{marginLeft:"auto",display:"flex",gap:18}}>
            <a href="/">Home</a>
            <a href="/#services">Services</a>
            <a href="/#why">Why Careviah</a>
            <a href="/#contact">Contact</a>
          </nav>
        </div>
      </header>
      <main style={{maxWidth:1100,margin:"0 auto"}}>{children}</main>
      <footer style={{borderTop:"1px solid #eee",padding:"16px",textAlign:"center"}}>
        © {new Date().getFullYear()} Careviah
      </footer>
    </>
  );
}
