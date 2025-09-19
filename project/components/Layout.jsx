export default function Layout({ children }) {
    return (
        <>
            <header style={{ padding: "12px 16px", borderBottom: "1px solid #eee" }}>
                <strong>Careviah</strong>
                <nav style={{ float: "right", display: "flex", gap: 12 }}>
                    <a href="/">Home</a>
                    <a href="/#services">Services</a>
                    <a href="/#why">Why Careviah</a>
                    <a href="/#contact">Contact</a>
                </nav>
            </header>
            <main style={{ maxWidth: 1100, margin: "0 auto" }}>{children}</main>
            <footer style={{ borderTop: "1px solid #eee", padding: 16, textAlign: "center" }}>
                © {new Date().getFullYear()} Careviah
            </footer>
        </>
    );
}
