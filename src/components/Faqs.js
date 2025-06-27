import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "Do I need to know coding?", a: "No! Our tools are no-code and beginner-friendly. Just choose a template and start filling in your info." },
    { q: "Is it really free?", a: "Yes! The free plan includes essential features to get you up and running." },
    { q: "Can I upgrade later?", a: "Absolutely. You can switch to premium templates or AI features anytime." },
    { q: "Can I connect my domain?", a: "Yes, premium users can connect their custom domains with ease." }
  ];

  return (
    <section
      className="py-5 text-white"
      style={{
        background: 'linear-gradient(to bottom, #121212, #000)',
        borderTop: '1px solid #2e2e2e',
        borderBottom: '1px solid #2e2e2e',
      }}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: '#f0e6d2' }}>
          🙋 Frequently Asked Questions
        </h2>
        <div className="mx-auto" style={{ maxWidth: '700px' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-3 border rounded"
              style={{
                borderColor: '#2e2e2e',
                backgroundColor: '#1a1a1a',
                overflow: 'hidden',
              }}
            >
              <button
                className="w-100 text-start px-4 py-3 fw-semibold d-flex justify-content-between align-items-center"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#f0e6d2',
                  fontSize: '1.1rem',
                }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.q}
                <span style={{ transform: openIndex === index ? 'rotate(90deg)' : 'rotate(0)', transition: '0.2s' }}>➤</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-3 text-light"
                    style={{ color: '#ccc' }}
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
