import Seo from '../components/Seo';
import { useCallback } from 'react';

export default function Contact() {
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = new URLSearchParams(new FormData(form)).toString();

    // Post to the static file so Netlify picks it up
    await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data,
    });

    window.location.href = '/thank-you';
  }, []);

  return (
    <>
      <Seo title="Contact" description="Request home-care support or speak with our team." />
      <h1>Contact</h1>
      <p>We usually respond within the same day.</p>

      <form name="contact" onSubmit={handleSubmit}
        style={{ maxWidth: 560, padding: "16px", border: "1px solid #eee", borderRadius: 12, background: "#fff" }}>
        <input type="hidden" name="form-name" value="contact" />
        <p hidden><label>Don’t fill this out: <input name="bot-field" /></label></p>

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
    </>
  );
}
