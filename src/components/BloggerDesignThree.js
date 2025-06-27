import React from 'react';

export default function BloggerDesignThree({ data, activeFields }) {
  const builtInFields = ['name', 'about', 'skills', 'blogArticles', 'linkedin', 'github'];

  return (
    <div className="p-4 rounded text-white" style={{ background: 'linear-gradient(to right, #141e30, #243b55)' }}>
      <h2 className="fw-bold mb-3">Blogger Portfolio v3</h2>

      {activeFields.includes('name') && <h5>{data.name || 'Your Name'}</h5>}
      {activeFields.includes('about') && <p>{data.about || 'Sharing insights and stories through writing.'}</p>}

      {activeFields.includes('skills') && data.skills && (
        <p><strong>Expertise:</strong> {data.skills}</p>
      )}

      {activeFields.includes('blogArticles') && data.blogArticles && (
        <div className="mb-3">
          <h6 className="fw-semibold">Articles</h6>
          <ul>
            {data.blogArticles.split(',').map((item, idx) => (
              <li key={idx}>📝 {item.trim()}</li>
            ))}
          </ul>
        </div>
      )}

      {activeFields.includes('linkedin') && data.linkedin && (
        <p><strong>🔗 LinkedIn:</strong> <a href={data.linkedin} target="_blank" rel="noreferrer" className="text-light">{data.linkedin}</a></p>
      )}

      {activeFields.includes('github') && data.github && (
        <p><strong>GitHub:</strong> <a href={data.github} target="_blank" rel="noreferrer" className="text-light">{data.github}</a></p>
      )}

      {/* Custom runtime fields */}
      {activeFields
        .filter(field => !builtInFields.includes(field))
        .map(field => (
          <div key={field} className="mt-3">
            <h6 className="text-uppercase">{field.replace(/([A-Z])/g, ' $1')}</h6>
            <p>{data[field]}</p>
          </div>
        ))}
    </div>
  );
}
