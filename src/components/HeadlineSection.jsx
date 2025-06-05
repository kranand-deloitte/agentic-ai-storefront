import React from 'react';
import './HeadlineSection.css';

const HeadlineSection = ({description}) => {
  return (
    <section className="headline-section">
        <h1 className="headline-title">
  Agentic AI <span className="storefront-highlight">Storefront</span>
</h1>

        <p className="headline-description">{description}</p>
    </section>
  )
};

export default HeadlineSection;