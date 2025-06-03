import React from 'react';
import './HeadlineSection.css';

const HeadlineSection = ({title,description}) => {
  return (
    <section className="headline-section">
        <h1 className="headline-title">{title}</h1>
        <p className="headline-description">{description}</p>
    </section>
  )
};

export default HeadlineSection;