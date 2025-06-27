import React from 'react';

export default function Webdesignone({ data, activeFields }) {
  const builtInFields = [
    'name', 'about', 'skills', 'projects',
    'experience', 'testimonials', 'blogArticles',
    'linkedin', 'github',
  ];

  return (
    <div
      className="p-5 rounded shadow-lg text-white"
      style={{ background: 'linear-gradient(to right, #141e30, #243b55)' }}
    >
      {/* Hero Section */}
      {(activeFields.includes('name') || activeFields.includes('about')) && (
        <header className="mb-5 text-center">
          {activeFields.includes('name') && (
            <h1 className="display-4 fw-bold text-uppercase">
              {data.name || 'Your Name'}
            </h1>
          )}
          {activeFields.includes('about') && (
            <p className="fs-5 fst-italic">
              {data.about || 'A passionate developer crafting web experiences.'}
            </p>
          )}
        </header>
      )}

      {/* Skills Section */}
      {activeFields.includes('skills') && data.skills && (
        <section className="mb-5">
          <h2 className="h4 fw-bold text-uppercase border-bottom border-light pb-2 mb-3">
            Technical Skills
          </h2>
          <div className="row">
            {data.skills.split(',').map((skill, i) => (
              <div key={i} className="col-6 col-md-4 mb-2">
                🔧 {skill.trim()}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeFields.includes('projects') && data.projects && (
        <section className="mb-5">
          <h2 className="h4 fw-bold text-uppercase border-bottom border-light pb-2 mb-3">
            Project Highlights
          </h2>
          <p>{data.projects}</p>
        </section>
      )}

      {/* Experience Section */}
      {activeFields.includes('experience') && data.experience && (
        <section className="mb-5">
          <h2 className="h4 fw-bold text-uppercase border-bottom border-light pb-2 mb-3">
            Professional Experience
          </h2>
          <p>{data.experience}</p>
        </section>
      )}

      {/* Testimonials Section */}
      {activeFields.includes('testimonials') && (
        <section className="mb-5">
          <h2 className="h4 fw-bold text-uppercase border-bottom border-light pb-2 mb-3">
            What Clients Say
          </h2>
          <blockquote className="blockquote">
            <p className="mb-2">
              {data.testimonials || `"Highly professional, delivered beyond expectations."`}
            </p>
            <footer className="blockquote-footer text-light">
              — Jane Smith, CEO of BrightTech
            </footer>
          </blockquote>
        </section>
      )}

      {/* Blog Section */}
      {activeFields.includes('blogArticles') && data.blogArticles && (
        <section className="mb-5">
          <h2 className="h4 fw-bold text-uppercase border-bottom border-light pb-2 mb-3">
            Latest Blog Articles
          </h2>
          <ul className="list-unstyled">
            {data.blogArticles.split(',').map((article, i) => (
              <li key={i}>📘 {article.trim()}</li>
            ))}
          </ul>
        </section>
      )}

      {/* CTA Section */}
      {(activeFields.includes('linkedin') || activeFields.includes('github')) &&
        (data.linkedin || data.github) && (
          <section className="text-center bg-gradient p-4 rounded border border-light">
            <h3 className="mb-2 fw-bold text-uppercase">Let’s Collaborate</h3>
            <p className="mb-3">
              Interested in building something amazing? Let’s connect!
            </p>
            <div>
              {activeFields.includes('linkedin') && data.linkedin && (
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light me-3"
                >
                  Connect on LinkedIn
                </a>
              )}
              {activeFields.includes('github') && data.github && (
                <a
                  href={data.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light"
                >
                  View GitHub
                </a>
              )}
            </div>
          </section>
        )}

      {/* ✅ Custom Fields Renderer */}
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
