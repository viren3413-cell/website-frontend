"use client";

import { useState } from "react";

export default function InquiryForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website inquiry from ${values.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${values.get("name")}\nEmail address: ${values.get("emailAddress")}\nPhone number: ${values.get("phoneNumber")}\nCompany name: ${values.get("companyName")}\nCountry: ${values.get("country")}\n\nMessage:\n${values.get("messageBox")}`
    );
    window.location.href = `mailto:hello@vmsolutions.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {sent ? (
        <div role="status">
          <h2 style={{ color: "#1f2937" }}>Your email draft is ready.</h2>
          <p>Send the prepared message in your email app to complete your inquiry.</p>
        </div>
      ) : (
        <>
          <div className="form-grid">
            <div className="field field-full"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" placeholder="Jane Modi" required /></div>
            <div className="field field-full"><label htmlFor="emailAddress">Email Address</label><input id="emailAddress" name="emailAddress" type="email" autoComplete="email" placeholder="jane.modi@example.com" required /></div>
            <div className="field field-full"><label htmlFor="phoneNumber">Phone Number</label><input id="phoneNumber" name="phoneNumber" type="tel" autoComplete="tel" placeholder="+1-555-0198" required /></div>
            <div className="field field-full"><label htmlFor="companyName">Company Name <span className="optional-label">(Optional)</span></label><input id="companyName" name="companyName" autoComplete="organization" placeholder="Acme Innovations" /></div>
            <div className="field field-full"><label htmlFor="country">Country</label><select id="country" name="country" autoComplete="country-name" defaultValue="" required><option value="" disabled>Select a country</option><option>United States</option><option>United Kingdom</option><option>Canada</option><option>India</option><option>Australia</option><option>Other</option></select></div>
            <div className="field field-full"><label htmlFor="messageBox">Message</label><textarea id="messageBox" name="messageBox" placeholder="Tell us about your project and how we can help..." required /></div>
          </div>
          <button className="button button-blue" type="submit">Let&apos;s Talk</button>
          <p className="privacy-note">Submitting means you agree to our <a href="/about#privacy">Privacy Policy</a>.</p>
        </>
      )}
    </form>
  );
}
