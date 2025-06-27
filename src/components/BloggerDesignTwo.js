import React from 'react';

export default function BloggerDesignTwo({ data, activeFields }) {
  return (
    <div className="p-4 rounded text-white" style={{ background: 'linear-gradient(to left, #1c1c1c, #434343)' }}>
      <h2 className="text-uppercase">Blogger Style 2</h2>
      {activeFields.includes('name') && <h4>{data.name}</h4>}
      {activeFields.includes('about') && <p>{data.about}</p>}
      {activeFields.includes('blogArticles') && (
        <div>
          <h6>Blog Posts:</h6>
          {data.blogArticles.split(',').map((item, idx) => <div key={idx}>📝 {item.trim()}</div>)}
        </div>
      )}
      {activeFields.includes('linkedin') && <p>🔗 {data.linkedin}</p>}
    </div>
  );
}
