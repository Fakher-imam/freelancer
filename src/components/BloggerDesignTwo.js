import React from 'react';

export default function BloggerDesignTwo({ data, activeFields }) {
  const builtInFields = ['name', 'about', 'skills', 'blogArticles', 'linkedin', 'github'];

  return (
    <div className="p-4 rounded text-white" style={{ background: 'linear-gradient(to left, #1c1c1c, #434343)' }}>
      <h2 className="text-uppercase mb-3">Blogger Style 2</h2>

      {activeFields.includes('name') && <h4>{data.name || 'Your Name'}</h4>}
      {activeFields.includes('about') && <p>{data.about || 'A passionate blogger sharing ideas with the world.'}</p>}

      {activeFields.includes('blogArticles') && data.blogArticles && (
        <div className="mb-3">
          <h6 className="text-light">Blog Posts:</h6>
          {data.blogArticles.split(',').map((item, idx) => (
            <div key={idx}>📝 {item.trim()}</div>
          ))}
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
