import React from 'react';

export default function GraphicDesignThree({ data, activeFields }) {
  const builtInFields = ['name', 'about', 'skills', 'projects', 'linkedin', 'github'];

  return (
    <div className="p-5 rounded shadow-lg text-white" style={{ background: 'linear-gradient(to right, #f7971e, #ffd200)' }}>
      
      {/* Hero Section */}
      {(activeFields.includes('name') || activeFields.includes('about')) && (
        <header className="text-center mb-4">
          {activeFields.includes('name') && <h1>{data.name || 'Creative Mind'}</h1>}
          {activeFields.includes('about') && <p>{data.about || 'Visual designer focused on branding and identity.'}</p>}
        </header>
      )}

      {/* Skills */}
      {activeFields.includes('skills') && data.skills && (
        <section className="mb-4">
          <h4>Expertise</h4>
          <div className="row">
            {data.skills.split(',').map((s, i) => (
              <div key={i} className="col-6">📌 {s.trim()}</div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {activeFields.includes('projects') && data.projects && (
        <section className="mb-4">
          <h4>Portfolio Projects</h4>
          <p>{data.projects}</p>
        </section>
      )}

      {/* Custom Fields */}
      {activeFields
        .filter((field) => !builtInFields.includes(field))
        .map((field) => (
          <section key={field} className="mb-4">
            <h5 className="text-uppercase">{field.replace(/([A-Z])/g, ' $1')}</h5>
            <p>{data[field]}</p>
          </section>
        ))}
    </div>
  );
}
