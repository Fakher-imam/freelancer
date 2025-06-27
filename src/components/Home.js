import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Faqs from './Faqs';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-white px-3 py-5"
        style={{ background: 'linear-gradient(135deg, #0d0b1e, #1a182e)' }}>
        <motion.h1
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center fw-bold mb-4"
          style={{ fontSize: '3rem', color: '#f5eec5', textShadow: '0 4px 10px rgba(255, 255, 255, 0.2)' }}
        >
          Build Your Freelance Portfolio
        </motion.h1>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mb-5"
          style={{ maxWidth: '650px', fontSize: '1.2rem', color: '#ccc', lineHeight: '1.6' }}
        >
          Create a stunning, professional portfolio with AI tools, sleek dark-mode templates, and animations — no design experience needed.
        </motion.p>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link to="/signup">
            <button className="btn fw-semibold shadow-lg"
              style={{
                backgroundColor: '#6c5ce7',
                color: '#f5eec5',
                borderRadius: '30px',
                padding: '12px 30px',
                fontSize: '1.1rem',
                boxShadow: '0 0 12px rgba(245,238,197,0.3)'
              }}>
              🚀 Get Started
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Features */}
      <section className="py-5 text-center text-white" style={{ backgroundColor: '#1a182e' }}>
        <div className="container">
          <h2 className="fw-bold mb-4" style={{ color: '#f5eec5' }}>Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-4 mb-4"><h5>⚡ Fast & Easy</h5><p>Create your portfolio in minutes — no coding needed!</p></div>
            <div className="col-md-4 mb-4"><h5>🎨 Sleek Templates</h5><p>Choose from elegant, dark-themed, mobile-friendly designs.</p></div>
            <div className="col-md-4 mb-4"><h5>🤖 Smart AI Assistant</h5><p>AI helps write content and perfect your presentation.</p></div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5 text-white" style={{ background: 'linear-gradient(to bottom, #1a182e, #0d0b1e)' }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-5" style={{ color: '#f5eec5' }}>How It Works</h2>
          <div className="row justify-content-center">
            <div className="col-md-3 mb-4"><h5>1. Sign Up</h5><p>Create your free account to begin.</p></div>
            <div className="col-md-3 mb-4"><h5>2. Pick a Template</h5><p>Select a layout that fits your identity.</p></div>
            <div className="col-md-3 mb-4"><h5>3. Publish</h5><p>Customize, add work, and go live in one click.</p></div>
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section className="py-5" style={{ background: 'linear-gradient(to bottom, #121020, #1a182e)' }}>
        <div className="container text-center text-white">
          <h2 className="fw-bold mb-5" style={{ color: '#f5eec5' }}>Explore Templates</h2>
          <div className="row">
            {[...Array(3)].map((_, index) => {
              const templates = [
                { title: "Modern Portfolio", desc: "Minimal dark design for tech freelancers.", image: "./modern.png" },
                { title: "Creative Style", desc: "For illustrators and visual creators.", image: "creative.png" },
                { title: "Professional Look", desc: "Suits consultants and developers.", image: "./professional.png" },
              ];
              const template = templates[index];
              return (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card h-100 border-0 text-white shadow"
                    style={{ backgroundColor: '#1a182e', border: '1px solid #2d2b45' }}>
                    <img src={template.image} className="card-img-top" alt={template.title} />
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: '#f5eec5' }}>{template.title}</h5>
                      <p className="card-text">{template.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #0d0b1e, #1a182e)' }}>
        <div className="container text-white text-center">
          <h2 className="fw-bold mb-5" style={{ color: '#f5eec5' }}>💰 Pricing Plans</h2>
          <div className="row">
            {[
              { name: "Free", price: "$0", desc: "Basic tools to create your portfolio." },
              { name: "Pro", price: "$9/mo", desc: "Custom domain, extra templates, priority AI." },
              { name: "Elite", price: "$29/mo", desc: "1-on-1 support, SEO boost, analytics, AI expert." },
            ].map((plan, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="border rounded p-4 h-100" style={{
                  backgroundColor: '#1a182e',
                  borderColor: '#2d2b45',
                  color: '#ccc'
                }}>
                  <h4 style={{ color: '#f5eec5' }}>{plan.name}</h4>
                  <h2>{plan.price}</h2>
                  <p>{plan.desc}</p>
                  <button className="btn btn-outline-light rounded-pill mt-2 px-4">Choose</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center" style={{ background: '#0d0b1e' }}>
        <div className="container">
          <h2 className="fw-bold mb-4" style={{ color: '#f5eec5' }}>Ready to showcase your royalty-level skills?</h2>
          <Link to="/signup">
            <button className="btn btn-outline-light btn-lg rounded-pill px-4 py-2"
              style={{ borderColor: '#f5eec5', color: '#f5eec5', boxShadow: '0 0 12px rgba(245,238,197,0.3)' }}>
              ✨ Create My Portfolio
            </button>
          </Link>
        </div>
      </section>

      {/* Freelancer Stories */}
      <section className="py-5 text-white" style={{ background: '#1a182e', borderTop: '1px solid #2d2b45', borderBottom: '1px solid #2d2b45' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#f5eec5' }}>🌟 Freelancer Success Stories</h2>
          <div className="row">
            {[
              { name: "Ali Raza", job: "Web Developer", story: "I landed 5 clients within a month just by sharing my new portfolio link!", image: "./m1.png" },
              { name: "Sara Khan", job: "UI/UX Designer", story: "My portfolio finally reflects my creative style. It helped me stand out.", image: "f.png" },
              { name: "Usman Tariq", job: "Content Writer", story: "With the AI tools, I built and published my portfolio in just one night.", image: "https://via.placeholder.com/100x100/0f0c29/ffffff?text=U" },
            ].map((user, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="p-4 rounded shadow" style={{ backgroundColor: '#1a182e', border: '1px solid #2d2b45' }}>
                  <div className="d-flex align-items-center mb-3">
                    <img src={user.image} alt={user.name} className="rounded-circle me-3" style={{ width: '60px', height: '60px' }} />
                    <div>
                      <h6 className="mb-0 text-light">{user.name}</h6>
                      <small style={{ color: '#ccc' }}>{user.job}</small>
                    </div>
                  </div>
                  <p style={{ color: '#bbb' }}>"{user.story}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-5 text-white text-center" style={{ background: '#121020' }}>
        <div className="container">
          <h2 className="fw-bold mb-4" style={{ color: '#f5eec5' }}>📈 Our Impact</h2>
          <div className="row">
            <div className="col-md-3"><h1 style={{ color: '#f5eec5' }}>10K+</h1><p>Portfolios Created</p></div>
            <div className="col-md-3"><h1 style={{ color: '#f5eec5' }}>5K+</h1><p>Freelancers Hired</p></div>
            <div className="col-md-3"><h1 style={{ color: '#f5eec5' }}>98%</h1><p>User Satisfaction</p></div>
            <div className="col-md-3"><h1 style={{ color: '#f5eec5' }}>24/7</h1><p>AI Assistance</p></div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-5 text-white" style={{ background: '#0d0b1e' }}>
        <Faqs />
      </section>

 
    </>
  );
}
