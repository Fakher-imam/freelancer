import React from 'react';
import { useNavigate } from 'react-router-dom';

const templates = [
  {
    id: 'web',
    name: 'Minimal Showcase',
    img: '/images/template1.jpg',
  },
  {
    id: 'personal',
    name: 'Developer Personal',
    img: '/images/template2.jpg',
  },
  {
    id: 'agency',
    name: 'Agency Portfolio',
    img: '/images/template3.jpg',
  },
];

export default function TemplateSelector() {
  const navigate = useNavigate();

  return (
    <div className="container py-5 text-white">
      <h2 className="text-center fw-bold mb-4">Choose a Template</h2>
      <div className="row g-4 justify-content-center">
        {templates.map((tpl) => (
          <div className="col-md-4" key={tpl.id}>
            <div
              className="card bg-dark text-white shadow-lg border-0"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(`/editor/${tpl.id}`)}
            >
              <img src={tpl.img} alt={tpl.name} className="card-img-top" />
              <div className="card-body text-center">
                <h5 className="card-title">{tpl.name}</h5>
                <button className="btn btn-outline-light mt-2">Use Template</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
