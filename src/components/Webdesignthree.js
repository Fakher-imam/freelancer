import React from 'react';

export default function Webdesignthree({ data, activeFields }) {
  const builtInFields = [
    'name', 'about', 'skills', 'projects',
    'experience', 'testimonials', 'blogArticles',
    'linkedin', 'github',
  ];

  return (
    <div className="p-5 rounded shadow-lg text-white" style={{ background: 'linear-gradient(to right, #000000, #434343)' }}>
      {/* Hero */}
      {(activeFields.includes('name') || activeFields.includes('about')) && (
        <header className="mb-5 text-center">
          {activeFields.includes('name') && (
            <h1 className="display-4 fw-bold text-uppercase">{data.name || 'Your Name'}</h1>
          )}
          {activeFields.includes('about') && (
            <p className="fs-5 fst-italic">{data.about || 'A skilled developer with a passion for building digital solutions.'}</p>
          )}
        </header>
      )}

      {/* Skills */}
      {activeFields.includes('skills') && data.skills && (
        <section className="mb-5">
          <h2 className="h4 fw-bold text-uppercase border-bottom border-light pb-2 mb-3">Skills</h2>
          <div className="row">
            {data.skills.split(',').map((skill, i) => (
              <div key={i} className="col-6 col-md-4 mb-2">💡 {skill.trim()}</div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {activeFields.includes('projects') && data.projects && (
        <section className="mb-5">
          <h2 className="h4 fw-bold text-uppercase border-bottom border-light pb-2 mb-3">Projects</h2>
          <p>{data.projects}</p>
        </section>
      )}

      {/* Experience */}
      {activeFields.includes('experience') && data.experience && (
        <section className="mb-5">
          <h2 className="h4 fw-bold text-uppercase border-bottom border-light pb-2 mb-3">Experience</h2>
          <p>{data.experience}</p>
        </section>
      )}

      {/* Testimonials */}
      {activeFields.includes('testimonials') && (
        <section className="mb-5">
          <h2 className="h4 fw-bold text-uppercase border-bottom border-light pb-2 mb-3">Testimonials</h2>
          <blockquote className="blockquote">
            <p className="mb-2">{data.testimonials || `"Top-quality delivery and seamless collaboration."`}</p>
            <footer className="blockquote-footer text-light">— Client</footer>
          </blockquote>
        </section>
      )}

      {/* Blog Articles */}
      {activeFields.includes('blogArticles') && data.blogArticles && (
        <section className="mb-5">
          <h2 className="h4 fw-bold text-uppercase border-bottom border-light pb-2 mb-3">Blog Articles</h2>
          <ul className="list-unstyled">
            {data.blogArticles.split(',').map((article, i) => (
              <li key={i}>📝 {article.trim()}</li>
            ))}
          </ul>
        </section>
      )}

      {/* CTA */}
      {(activeFields.includes('linkedin') || activeFields.includes('github')) && (data.linkedin || data.github) && (
        <section className="text-center bg-dark p-4 rounded border border-light">
          <h3 className="mb-2 fw-bold text-uppercase">Contact Me</h3>
          <p className="mb-3">Let’s make something great together.</p>
          <div>
            {activeFields.includes('linkedin') && data.linkedin && (
              <a href={data.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline-light me-3">LinkedIn</a>
            )}
            {activeFields.includes('github') && data.github && (
              <a href={data.github} target="_blank" rel="noreferrer" className="btn btn-outline-light">GitHub</a>
            )}
          </div>
        </section>
      )}

      {/* ✅ Dynamic Custom Fields */}
      {activeFields
        .filter((field) => !builtInFields.includes(field))
        .map((field) => (
          <section key={field} className="mb-5">
            <h2 className="h5 fw-bold text-uppercase border-bottom border-light pb-2 mb-2">
              {field.replace(/([A-Z])/g, ' $1').toUpperCase()}
            </h2>
            <p>{data[field]}</p>
          </section>
        ))}

      {/* Footer */}
      {activeFields.includes('name') && (
        <footer className="mt-5 pt-4 border-top border-light text-center">
          <small className="text-light">
            &copy; {new Date().getFullYear()} {data.name || 'Your Name'} — All rights reserved.
          </small>
        </footer>
      )}
    </div>
  );
}
