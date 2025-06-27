import React from 'react';

export default function GraphicDesignThree({ data, activeFields }) {
  return (
    <div className="p-5 rounded shadow-lg text-white" style={{ background: 'linear-gradient(to right, #f7971e, #ffd200)' }}>
      {(activeFields.includes('name') || activeFields.includes('about')) && (
        <header className="text-center mb-4">
          <h1>{data.name || 'Creative Mind'}</h1>
          {activeFields.includes('about') && <p>{data.about}</p>}
        </header>
      )}

      {activeFields.includes('skills') && (
        <section className="mb-4">
          <h4>Expertise</h4>
          <div className="row">
            {data.skills?.split(',').map((s, i) => (
              <div key={i} className="col-6">📌 {s.trim()}</div>
            ))}
          </div>
        </section>
      )}

      {activeFields.includes('projects') && (
        <section>
          <h4>Portfolio Projects</h4>
          <p>{data.projects}</p>
        </section>
      )}
    </div>
  );
}
