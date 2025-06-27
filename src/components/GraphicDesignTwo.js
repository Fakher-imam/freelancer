import React from 'react';

export default function GraphicDesignTwo({ data, activeFields }) {
  return (
    <div className="p-5 rounded text-white shadow" style={{ background: 'linear-gradient(to right, #8360c3, #2ebf91)' }}>
      {activeFields.includes('name') && (
        <h1 className="text-center fw-bold text-uppercase">{data.name || 'Your Name'}</h1>
      )}

      {activeFields.includes('about') && (
        <p className="text-center fst-italic">{data.about || 'Passionate visual storyteller.'}</p>
      )}

      {activeFields.includes('skills') && data.skills && (
        <section className="mt-4">
          <h3 className="h5">Design Tools</h3>
          <ul className="row list-unstyled">
            {data.skills.split(',').map((tool, idx) => (
              <li key={idx} className="col-6">🛠 {tool.trim()}</li>
            ))}
          </ul>
        </section>
      )}

      {activeFields.includes('projects') && data.projects && (
        <section className="mt-4">
          <h3 className="h5">Projects</h3>
          <p>{data.projects}</p>
        </section>
      )}
    </div>
  );
}
