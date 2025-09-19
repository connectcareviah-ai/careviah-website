import Seo from '../components/Seo';

export default function Contact() {
  return (
    <>
      <Seo title="Contact" description="Request home-care support or speak with our team." />
      <h1>Contact</h1>
      <p>We usually respond within the same day.</p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thank-you"
        style={{ maxWidth: 560, padding: "16px", border: "1px solid #eee", borderRadius: 12, background: "#fff" }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>

        <label>Full name
          <input name="name" type="text" required style={{ display: "block", width: "100%", marginTop: 6, marginBottom: 12 }} />
        </label>

        <label>Phone / WhatsApp
          <input name="phone" type="tel" required style={{ display: "block", width: "100%", marginTop: 6, marginBottom: 12 }} />
        </label>

        <label>Email (optional)
          <input name="email" type="email" style={{ display: "block", width: "100%", marginTop: 6, marginBottom: 12 }} />
        </label>

        <label>How can we help?
          <textarea name="message" rows={4} required style={{ display: "block", width: "100%", marginTop: 6, marginBottom: 12 }} />
        </label>

        <label style={{ display: "block", margin: "8px 0 16px" }}>
          <input type="checkbox" required /> I agree to be contacted by Careviah.
        </label>

        <button type="submit" style={{ padding: "10px 14px", borderRadius: 12, background: "#0e7490", color: "#fff", border: "none" }}>
          Send request
        </button>
      </form>

      <p style={{ marginTop: 16 }}>
        Or call <a href="tel:+918547046536">+91 85470 46536</a> ·
        WhatsApp <a href="https://wa.me/918590722353">+91 85907 22353</a>
      </p>
    </>
  );
}


