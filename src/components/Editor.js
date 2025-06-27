import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

import Webdesignone from './Webdesignone';
import Webdesigntwo from './Webdesigntwo';
import Webdesginthree from './Webdesignthree';
import GraphicDesignOne from './GraphicDesignOne';
import GraphicDesignTwo from './GraphicDesignTwo';
import GraphicDesignThree from './GraphicDesignThree';
import BloggerDesignOne from './BloggerDesignOne';
import BloggerDesignTwo from './BloggerDesignTwo';
import BloggerDesignThree from './BloggerDesignThree';

export default function Editor() {
  const navigate = useNavigate();
  const { id, design } = useParams();
  const [template, setTemplate] = useState('');
  const [customFields, setCustomFields] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    about: '',
    skills: '',
    projects: '',
    experience: '',
    testimonials: '',
    blogArticles: '',
    linkedin: '',
    github: '',
    theme: {
      color: 'indigo',
      font: 'sans',
      mode: 'light',
    },
  });

  const designMap = {
    web: {
      'design-1': Webdesignone,
      'design-2': Webdesigntwo,
      'design-3': Webdesginthree,
    },
    graphic: {
      'design-1': GraphicDesignOne,
      'design-2': GraphicDesignTwo,
      'design-3': GraphicDesignThree,
    },
    blogger: {
      'design-1': BloggerDesignOne,
      'design-2': BloggerDesignTwo,
      'design-3': BloggerDesignThree,
    },
  };

  const designFields = {
    web: {
      'design-1': ['name', 'about', 'skills', 'projects', 'experience', 'testimonials', 'blogArticles', 'linkedin', 'github'],
      'design-2': ['name', 'about', 'skills', 'projects', 'experience', 'testimonials', 'blogArticles', 'linkedin', 'github'],
      'design-3': ['name', 'about', 'skills', 'projects', 'experience', 'testimonials', 'blogArticles', 'linkedin', 'github'],
    },
    graphic: {
      'design-1': ['name', 'about', 'skills', 'projects', 'experience', 'testimonials', 'linkedin', 'github'],
      'design-2': ['name', 'about', 'skills', 'projects', 'linkedin'],
      'design-3': ['name', 'about', 'skills', 'projects', 'experience', 'linkedin'],
    },
    blogger: {
      'design-1': ['name', 'about', 'blogArticles', 'skills', 'linkedin'],
      'design-2': ['name', 'about', 'blogArticles', 'linkedin'],
      'design-3': ['name', 'about', 'skills', 'blogArticles', 'linkedin'],
    },
  };

  const availableDesigns = Object.keys(designMap[template] || {});
  const SelectedDesign = designMap[template]?.[design] || null;
  const activeFields = designFields?.[template]?.[design] || [];
  const allFields = [...activeFields, ...customFields];

  useEffect(() => {
    const pending = localStorage.getItem('pendingTemplate');
    if (pending && !design) {
      navigate(`/editor/${pending}`);
      localStorage.removeItem('pendingTemplate');
      return;
    }

    const saved = JSON.parse(localStorage.getItem('portfolios') || '[]');
    const found = saved.find((p) => p.id === id);

    if (found) {
      setFormData(found);
      setTemplate(found.template);
      setCustomFields(found.customFields || []);
      if (!design && found.design) {
        navigate(`/editor/${found.template}/${found.design}`);
        return;
      }
    } else if (id?.includes('/')) {
      const [t, d] = id.split('/');
      setTemplate(t);
      navigate(`/editor/${t}/${d}`);
    } else {
      setTemplate(id);
    }
  }, [id, design, navigate]);

  useEffect(() => {
    if (!formData.name && template) {
      const presets = {
        web: {
          about: 'I am a passionate web developer...',
          skills: 'HTML, CSS, JavaScript, React, Node.js',
          projects: 'E-commerce site, Portfolio website...',
          experience: '2+ years in full-stack development...',
          testimonials: '"Amazing work, exceeded expectations!" - Client',
          blogArticles: 'React Tips,Performance Tricks,Responsive Design',
          theme: { color: 'indigo', font: 'sans', mode: 'light' },
        },
        graphic: {
          about: 'Creative graphic designer focused on visual storytelling.',
          skills: 'Photoshop, Illustrator, Figma, Canva',
          projects: 'Brand Identity, UI/UX Mockups, Ad Campaigns',
          experience: '3 years in freelance design and branding.',
          testimonials: '"A visionary designer!" - Art Director',
          theme: { color: 'pink', font: 'serif', mode: 'dark' },
        },
        blogger: {
          about: 'A passionate blogger sharing insights on tech and life.',
          skills: 'Writing, SEO, WordPress, Analytics',
          blogArticles: '10 Tips for SEO,How to Start a Blog,Daily Productivity',
          theme: { color: 'blue', font: 'sans', mode: 'light' },
        },
      };
      if (presets[template]) {
        setFormData(prev => ({ ...prev, ...presets[template] }));
      }
    }
  }, [template]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddField = () => {
    const fieldName = prompt('Enter name of the new section:');
    if (!fieldName || formData[fieldName]) return;
    setCustomFields(prev => [...prev, fieldName]);
    setFormData(prev => ({ ...prev, [fieldName]: '' }));
  };

  const handleSave = () => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (!currentUser) return alert("User not logged in!");

    const saved = JSON.parse(localStorage.getItem('portfolios') || '[]');
    const newPortfolio = {
      id: String(Date.now()),
      template,
      design,
      userEmail: currentUser.email,
      customFields,
      ...formData,
    };

    localStorage.setItem('portfolios', JSON.stringify([...saved, newPortfolio]));
    alert('Portfolio saved!');
    navigate('/dashboard');
  };

  const bg = {
    web: 'linear-gradient(135deg, #1f4037, #99f2c8)',
    graphic: 'linear-gradient(135deg, #fc466b, #3f5efb)',
    blogger: 'linear-gradient(135deg, #000428, #004e92)',
  }[template] || '#f8f9fa';

  if (!design && template) {
    return (
      <div className="min-vh-100 py-5 px-4 text-white" style={{ background: bg }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Select a Design for {template}</h2>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            {availableDesigns.map((d) => (
              <button key={d} className="btn btn-outline-light px-4 py-2" onClick={() => navigate(`/editor/${template}/${d}`)}>
                {d.replace('design-', 'Design ')}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 py-5 px-4 text-white" style={{ background: bg }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="container">
        <h1 className="mb-4 fw-bold">{id === 'new' ? 'Create' : 'Edit'} Portfolio - {design}</h1>

        <div className="mb-4">
          <h5 className="fw-semibold">Choose Design</h5>
          {availableDesigns.map((d) => (
            <button
              key={d}
              className={`btn btn-sm me-2 ${design === d ? 'btn-primary' : 'btn-outline-light'}`}
              onClick={() => navigate(`/editor/${template}/${d}`)}
            >
              {d.replace('design-', 'Design ')}
            </button>
          ))}
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            {allFields.map((field) => {
              const isTextarea = ['about', 'experience', 'testimonials', 'blogArticles'].includes(field) || customFields.includes(field);
              return isTextarea ? (
                <textarea key={field} name={field} value={formData[field]} onChange={handleChange} placeholder={field} rows={3} className="form-control mb-3" />
              ) : (
                <input key={field} name={field} value={formData[field]} onChange={handleChange} placeholder={field} className="form-control mb-3" />
              );
            })}

            <button className="btn btn-outline-light w-100 mb-3" onClick={handleAddField}>
              ➕ Add Custom Section
            </button>

            <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} onClick={handleSave} className="btn btn-light text-dark fw-bold w-100">
              Save Portfolio
            </motion.button>
          </div>

          <div className="col-md-6">
            {SelectedDesign ? (
              <SelectedDesign data={formData} activeFields={allFields} />
            ) : (
              <p className="text-light">Preview not available.</p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
