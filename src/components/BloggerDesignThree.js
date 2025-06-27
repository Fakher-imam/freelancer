import React from 'react';

export default function BloggerDesignThree({ data, activeFields }) {
  return (
    <div className="p-4 rounded text-white" style={{ background: 'linear-gradient(to right, #141e30, #243b55)' }}>
      <h2>Blogger Portfolio v3</h2>
      {activeFields.includes('name') && <h5>{data.name}</h5>}
      {activeFields.includes('about') && <p>{data.about}</p>}
      {activeFields.includes('skills') && <p><b>Expertise:</b> {data.skills}</p>}
      {activeFields.includes('blogArticles') && (
        <div>
          <h6>Articles</h6>
          <ul>
            {data.blogArticles.split(',').map((item, idx) => (
              <li key={idx}>{item.trim()}</li>
            ))}
          </ul>
        </div>
      )}
      {activeFields.includes('linkedin') && <p>🔗 LinkedIn: {data.linkedin}</p>}
    </div>
  );
}
