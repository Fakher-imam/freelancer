import React from 'react';
import { motion } from 'framer-motion';
import Faqs from './Faqs';
import Footer from './Footer';

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-white text-center px-3 py-5"
        style={{
          background: 'linear-gradient(135deg, #0d0b1e, #1a1535)',
        }}
      >
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="display-4 fw-bold">
          Who We Are
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="lead mt-3" style={{ maxWidth: "600px" }}>
          We empower freelancers to build standout portfolios with zero coding. Modern. Flexible. Impressive.
        </motion.p>
      </div>

      {/* Mission Section */}
      <section className="bg-dark text-white py-5 px-3">
        <div className="container text-center">
          <h2 className="mb-4 fw-bold text-gradient">Our Mission</h2>
          <p className="fs-5">
            Our goal is to simplify portfolio creation, helping freelancers focus on what they do best — creating & delivering excellence.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-black text-white py-5 px-3">
        <div className="container text-center">
          <h2 className="mb-4 fw-bold text-gradient">Core Values</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 rounded bg-dark shadow">
                <h5>Creativity</h5>
                <p>We believe in empowering creators to express their uniqueness.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded bg-dark shadow">
                <h5>Simplicity</h5>
                <p>Our tools are designed to be intuitive, fast, and stress-free.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded bg-dark shadow">
                <h5>Support</h5>
                <p>We stand by our users, every step of the way.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-dark text-white py-5 px-3">
        <div className="container text-center">
          <h2 className="mb-4 fw-bold text-gradient">Meet the Team</h2>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <img src="/m.png" alt="Founder" className=" mb-3" width="180" style={{borderRadius:'14px'}} />
              <h6>Ahsan</h6>
              <small>Founder & Designer</small>
            </div>
            <div className="col-md-3">
              <img src="/b.png" alt="Developer" className=" mb-3" width="180" style={{borderRadius:'14px'}} />
              <h6>Ali hassan</h6>
              <small>Lead Developer</small>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-black text-white py-5 px-3">
        <div className="container text-center">
          <h2 className="mb-4 fw-bold text-gradient">Why Choose Us?</h2>
          <ul className="list-unstyled fs-5">
            <li>🚀 Blazing fast & optimized code</li>
            <li>🎨 Royal, modern portfolio themes</li>
            <li>🧠 AI-enhanced templates & editing</li>
            <li>💼 Built for freelancers & creatives</li>
          </ul>
        </div>
      </section>

      {/* FAQs and Footer */}
      <Faqs />

    </>
  );
}
