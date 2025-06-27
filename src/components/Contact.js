import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('📨 Message sent:', form);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-dark text-white">
      {/* Contact Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4 text-info">Let's Get In Touch</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card bg-secondary text-white p-4 h-100 shadow">
              <h4 className="mb-3">Send a Message</h4>
              {sent && (
                <div className="alert alert-success text-center" role="alert">
                  ✅ Message sent successfully!
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="John Doe"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="form-control"
                    placeholder="Write your message here..."
                  />
                </div>

                <button type="submit" className="btn btn-info w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-6">
            <div className="bg-dark p-4 shadow h-100">
              <h4 className="mb-3">Contact Information</h4>
              <p><strong>Email:</strong> devportfolio@example.com</p>
              <p><strong>Phone:</strong> +92 300 1234567</p>
              <p><strong>Location:</strong> Lahore, Pakistan</p>

              <h5 className="mt-4">Follow Me</h5>
              <div className="d-flex gap-3 mt-2">
                <a href="#" className="text-info"><i className="bi bi-github fs-4"></i></a>
                <a href="#" className="text-info"><i className="bi bi-linkedin fs-4"></i></a>
                <a href="#" className="text-info"><i className="bi bi-twitter fs-4"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="container my-5">
        <h3 className="text-center text-info mb-3">My Location</h3>
        <div className="ratio ratio-16x9 rounded shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13611.124527363317!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904e0db1b935b%3A0x4e97f679b6dd6a3a!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1678307359321"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container py-5">
        <h3 className="text-center text-info mb-4">FAQs</h3>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item bg-secondary text-white">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-dark text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
              >
                How soon will you respond?
              </button>
            </h2>
            <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                I usually respond within 24 hours via email or WhatsApp.
              </div>
            </div>
          </div>
          <div className="accordion-item bg-secondary text-white mt-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-dark text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq2"
              >
                Do you build custom portfolios?
              </button>
            </h2>
            <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Yes! I build portfolios tailored to your profession, brand, and goals.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
