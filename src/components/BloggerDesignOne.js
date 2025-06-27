import React from 'react';

export default function BloggerDesignOne({ data, activeFields }) {
  return (
    <div className="p-4 rounded text-white" style={{ background: 'linear-gradient(to right, #000428, #004e92)' }}>
      <h2 className="fw-bold mb-3">Blogger Portfolio</h2>
      {activeFields.includes('name') && <h3>{data.name}</h3>}
      {activeFields.includes('about') && <p>{data.about}</p>}
      {activeFields.includes('blogArticles') && (
        <div>
          <h5>Recent Articles</h5>
          <ul>
            {data.blogArticles.split(',').map((item, idx) => <li key={idx}>{item.trim()}</li>)}
          </ul>
        </div>
      )}
      {activeFields.includes('skills') && (
        <p><strong>Skills:</strong> {data.skills}</p>
      )}
      {activeFields.includes('linkedin') && (
        <p><strong>LinkedIn:</strong> {data.linkedin}</p>
      )}
    </div>
  );
}
