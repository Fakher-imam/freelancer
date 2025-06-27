import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const textColor = {
  indigo: 'text-primary',
  teal: 'text-info',
  rose: 'text-danger',
  emerald: 'text-success',
};

const buttonBg = {
  indigo: 'btn-primary',
  teal: 'btn-info',
  rose: 'btn-danger',
  emerald: 'btn-success',
};

export default function Preview() {
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('portfolios')) || [];
    const found = stored.find((p) => String(p.id) === id);
    setPortfolio(found);
  }, [id]);

  if (!portfolio) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center text-danger fs-4">
        Portfolio not found.
      </div>
    );
  }

  const theme = {
    color: portfolio.theme?.color || 'indigo',
    font: portfolio.theme?.font || 'sans',
    mode: portfolio.theme?.mode || 'light',
  };

  const color = theme.color;

  const designMap = {
    web: {
      'design-1': require('./Webdesignone').default,
      'design-2': require('./Webdesigntwo').default,
      'design-3': require('./Webdesignthree').default,
    },
    graphic: {
      'design-1': require('./GraphicDesignOne').default,
      'design-2': require('./GraphicDesignTwo').default,
      'design-3': require('./GraphicDesignThree').default,
    },
    blogger: {
      'design-1': require('./BloggerDesignOne').default,
      'design-2': require('./BloggerDesignTwo').default,
      'design-3': require('./BloggerDesignThree').default,
    },
  };

  const SelectedDesign = designMap[portfolio.template]?.[portfolio.design];

  if (!SelectedDesign) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center text-danger fs-4">
        Design not found.
      </div>
    );
  }

  const allFields = Object.keys(portfolio);
  const customFields = portfolio.customFields || [];

  return (
    <div
      className={`min-vh-100 py-5 px-3 ${
        theme.mode === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container"
      >
        {/* Standard Preview */}
        <SelectedDesign data={portfolio} activeFields={allFields} />

        {/* Render Custom Sections (if any) */}
        {customFields.length > 0 && (
          <div className="mt-5">
            <h3 className={`${textColor[color]} fw-bold mb-3`}>📌 Custom Sections</h3>
            {customFields.map((field, index) => (
              <div key={index} className="mb-4">
                <h5 className="fw-semibold text-capitalize">{field}</h5>
                <p>{portfolio[field]}</p>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="mt-4 d-flex gap-3 flex-wrap">
          <Link to={`/export/${portfolio.id}`} className={`btn ${buttonBg[color]}`}>
            Export as PDF
          </Link>
          <Link to="/dashboard" className="btn btn-outline-secondary">
            ← Back to Dashboard
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
