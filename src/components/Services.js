import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaPaintBrush, FaPenNib } from 'react-icons/fa';

const templates = [
  {
    title: 'Web Developer Portfolio',
    id: 'web',
    about: 'Clean and responsive layout for frontend/backend devs.',
    icon: <FaCode className="text-info fs-2 mb-3" />,
    bg: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
  },
  {
    title: 'Graphic Designer Portfolio',
    id: 'graphic',
    about: 'Showcase your creativity with modern visual styles.',
    icon: <FaPaintBrush className="text-danger fs-2 mb-3" />,
    bg: 'linear-gradient(135deg, #240b36, #c31432)',
  },
  {
    title: 'Blogger Portfolio',
    id: 'blogger',
    about: 'Content-first layout to highlight your writing.',
    icon: <FaPenNib className="text-warning fs-2 mb-3" />,
    bg: 'linear-gradient(135deg, #000428, #004e92)',
  },
];

export default function Services() {
  const navigate = useNavigate();

  const handleSelect = (templateId) => {
    const user = JSON.parse(localStorage.getItem("user"));

    const fullPath = `${templateId}/design-1`;

    if (!user) {
      localStorage.setItem("pendingTemplate", fullPath);
      navigate("/login");
    } else {
      navigate(`/editor/${fullPath}`);
    }
  };

  return (
    <div className="min-vh-100 py-5 px-3 text-white" style={{ background: 'linear-gradient(135deg, #0d0b1e, #1a1535)' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-gradient">Choose Your Portfolio Template</h2>
        <div className="row g-4 justify-content-center">
          {templates.map((tpl) => (
            <div key={tpl.id} className="col-12 col-md-6 col-lg-4">
              <div
                className="rounded shadow-lg p-4 text-center h-100 d-flex flex-column align-items-center"
                style={{ background: tpl.bg }}
              >
                {tpl.icon}
                <h5 className="fw-bold mb-2">{tpl.title}</h5>
                <p className="text-light mb-4">{tpl.about}</p>
                <button
                  onClick={() => handleSelect(tpl.id)}
                  className="btn btn-outline-light mt-auto"
                >
                  Use This Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
