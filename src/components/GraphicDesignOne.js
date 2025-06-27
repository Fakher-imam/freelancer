import React from 'react';

export default function GraphicDesignOne({ data, activeFields }) {
  const builtInFields = ['name', 'about', 'skills', 'projects', 'linkedin', 'github'];

  return (
    <div className="p-5 rounded shadow-lg text-white" style={{ background: 'linear-gradient(to right, #ff5f6d, #ffc371)' }}>
      {/* Hero */}
      {(activeFields.includes('name') || activeFields.includes('about')) && (
        <header className="mb-5 text-center">
          {activeFields.includes('name') && (
            <h1 className="display-4 fw-bold text-uppercase">{data.name || 'Your Name'}</h1>
          )}
          {activeFields.includes('about') && (
            <p className="fs-5 fst-italic">{data.about || 'Creative Graphic Designer with an artistic flair.'}</p>
          )}
        </header>
      )}

      {/* Skills */}
      {activeFields.includes('skills') && data.skills && (
        <section className="mb-4">
          <h2 className="h5 border-bottom pb-2 mb-3">Tools & Skills</h2>
          <ul className="list-unstyled row">
            {data.skills.split(',').map((skill, i) => (
              <li key={i} className="col-6 col-md-4">🎨 {skill.trim()}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Projects */}
      {activeFields.includes('projects') && data.projects && (
        <section className="mb-4">
          <h2 className="h5 border-bottom pb-2 mb-3">Design Projects</h2>
          <p>{data.projects}</p>
        </section>
      )}

      {/* ✅ Dynamic Custom Fields */}
      {activeFields
        .filter((field) => !builtInFields.includes(field))
        .map((field) => (
          <section key={field} className="mb-4">
            <h2 className="h6 border-bottom pb-1 mb-2 text-uppercase">{field.replace(/([A-Z])/g, ' $1')}</h2>
            <p>{data[field]}</p>
          </section>
        ))}

      {/* CTA */}
      {(activeFields.includes('linkedin') || activeFields.includes('github')) && (
        <section className="text-center bg-dark p-4 rounded border border-light">
          <h3 className="mb-2 fw-bold text-uppercase">Let’s Work Together</h3>
          {activeFields.includes('linkedin') && data.linkedin && (
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline-light me-2">LinkedIn</a>
          )}
          {activeFields.includes('github') && data.github && (
            <a href={data.github} target="_blank" rel="noreferrer" className="btn btn-outline-light">Portfolio</a>
          )}
        </section>
      )}
    </div>
  );
}
