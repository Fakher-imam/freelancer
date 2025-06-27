import React from 'react';

export default function BloggerDesignOne({ data, activeFields }) {
  const builtInFields = ['name', 'about', 'skills', 'blogArticles', 'linkedin', 'github'];

  return (
    <div className="p-4 rounded text-white" style={{ background: 'linear-gradient(to right, #000428, #004e92)' }}>
      <h2 className="fw-bold mb-3">Blogger Portfolio</h2>

      {activeFields.includes('name') && <h3>{data.name || 'Your Name'}</h3>}
      {activeFields.includes('about') && <p>{data.about || 'Passionate blogger sharing thoughts and insights.'}</p>}

      {activeFields.includes('blogArticles') && data.blogArticles && (
        <div className="mb-3">
          <h5>Recent Articles</h5>
          <ul>
            {data.blogArticles.split(',').map((item, idx) => (
              <li key={idx}>📝 {item.trim()}</li>
            ))}
          </ul>
        </div>
      )}

      {activeFields.includes('skills') && data.skills && (
        <p><strong>Skills:</strong> {data.skills}</p>
      )}

      {activeFields.includes('linkedin') && data.linkedin && (
        <p><strong>LinkedIn:</strong> <a href={data.linkedin} target="_blank" rel="noreferrer" className="text-light">{data.linkedin}</a></p>
      )}

      {activeFields.includes('github') && data.github && (
        <p><strong>GitHub:</strong> <a href={data.github} target="_blank" rel="noreferrer" className="text-light">{data.github}</a></p>
      )}

      {/* Custom Fields */}
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
