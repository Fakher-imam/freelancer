import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import Webdesignone from '../components/Webdesignone';
import Webdesigntwo from '../components/Webdesigntwo';
import Webdesignthree from '../components/Webdesignthree';
import GraphicDesignOne from '../components/GraphicDesignOne';
import GraphicDesignTwo from '../components/GraphicDesignTwo';
import GraphicDesignThree from '../components/GraphicDesignThree';
import BloggerDesignOne from '../components/BloggerDesignOne';
import BloggerDesignTwo from '../components/BloggerDesignTwo';
import BloggerDesignThree from '../components/BloggerDesignThree';

const designMap = {
  web: {
    'design-1': Webdesignone,
    'design-2': Webdesigntwo,
    'design-3': Webdesignthree,
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

export default function Export() {
  const { id } = useParams();
  const navigate = useNavigate();
  const printRef = useRef();

  useEffect(() => {
    const portfolios = JSON.parse(localStorage.getItem('portfolios') || '[]');
    const found = portfolios.find((p) => String(p.id) === id);
    if (!found) {
      alert('Portfolio not found');
      navigate('/dashboard');
      return;
    }

    const SelectedDesign = designMap[found.template]?.[found.design];

    if (!SelectedDesign) {
      alert('Design not found');
      navigate('/dashboard');
      return;
    }

    const exportPDF = async () => {
      const input = printRef.current;
      const canvas = await html2canvas(input, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`portfolio-${found.name || 'download'}.pdf`);
      navigate('/dashboard');
    };

    // Delay to allow design render
    setTimeout(exportPDF, 1000);
  }, [id, navigate]);

  const portfolios = JSON.parse(localStorage.getItem('portfolios') || '[]');
  const data = portfolios.find((p) => String(p.id) === id);
  const SelectedDesign = data ? designMap[data.template]?.[data.design] : null;
  const activeFields = data ? Object.keys(data) : [];

  return (
    <div style={{ padding: 30, background: '#fff' }}>
      {SelectedDesign && data && (
        <div ref={printRef}>
          <SelectedDesign data={data} activeFields={activeFields} />
        </div>
      )}
    </div>
  );
}
