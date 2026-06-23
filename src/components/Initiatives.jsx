import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/initiatives.css';

const initiativesData = [
  {
    id: 1,
    title: "Clean Water Projects",
    category: "water",
    cost: "Rs. 18,000 / Pump",
    raised: "Rs. 1,240,000",
    goal: "Rs. 1,800,000",
    progress: 68,
    desc: "Providing clean drinking water by installing handpumps, solar water wells, and filtration plants in water-scarce regions of Pakistan.",
    faIcon: "fa-tint"
  },
  {
    id: 2,
    title: "Orphan Sponsorship",
    category: "orphans",
    cost: "Rs. 5,000 / Month",
    raised: "Rs. 3,450,000",
    goal: "Rs. 4,000,000",
    progress: 86,
    desc: "Sponsoring educational expenses, healthcare, shelter, and monthly food support to ensure orphans live with dignity.",
    faIcon: "fa-heart"
  },
  {
    id: 3,
    title: "Free Healthcare & Clinics",
    category: "health",
    cost: "Rs. 25,000 / Camp",
    raised: "Rs. 850,000",
    goal: "Rs. 1,500,000",
    progress: 56,
    desc: "Organizing mobile health camps, distributing free medicine, and supporting dialysis and eye surgeries for poor patients.",
    faIcon: "fa-medkit"
  },
  {
    id: 4,
    title: "Skill Development Centers",
    category: "education",
    cost: "Rs. 12,000 / Student",
    raised: "Rs. 980,000",
    goal: "Rs. 1,200,000",
    progress: 81,
    desc: "Empowering youth and women through vocational training courses, tailoring classes, and digital skills development.",
    faIcon: "fa-graduation-cap"
  },
  {
    id: 5,
    title: "Ration Distribution Drive",
    category: "relief",
    cost: "Rs. 6,500 / Family",
    raised: "Rs. 2,100,000",
    goal: "Rs. 2,500,000",
    progress: 84,
    desc: "Providing dry food ration packs containing flour, sugar, oil, rice, and pulses to low-income families and widows.",
    faIcon: "fa-box-open"
  },
  {
    id: 6,
    title: "Emergency Disaster Relief",
    category: "relief",
    cost: "Rs. 10,000 / Kit",
    raised: "Rs. 1,420,000",
    goal: "Rs. 3,000,000",
    progress: 47,
    desc: "Responding immediately to floods, earthquakes, and emergencies with rescue operations, dry meals, tents, and medical aid.",
    faIcon: "fa-ambulance"
  }
];

const categories = [
  { value: "all", label: "All Projects" },
  { value: "relief", label: "Disaster & Food Relief" },
  { value: "water", label: "Clean Water" },
  { value: "health", label: "Healthcare" },
  { value: "orphans", label: "Orphan Care" },
  { value: "education", label: "Skills & Education" }
];

export default function Initiatives() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredData = activeFilter === "all"
    ? initiativesData
    : initiativesData.filter(item => item.category === activeFilter);

  const handleDonateClick = (title) => {
    navigate(`/donate?cause=${encodeURIComponent(title)}`);
  };

  return (
    <section className="initiatives-section" id="initiatives">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <p>Our Projects</p>
          <h2>Best Nation Services & Initiatives</h2>
        </div>

        {/* Filter Navigation */}
        <div className="initiatives-filters">
          {categories.map(cat => (
            <button
              key={cat.value}
              className={`filter-btn ${activeFilter === cat.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Initiatives Grid */}
        <div className="row g-4 justify-content-center">
          {filteredData.map(item => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="initiative-card glass-card text-center">
                {/* Alkhidmat Signature Circle Icon header */}
                <div className="card-icon-wrap">
                  <div className="card-circle-icon">
                    <i className={`fa ${item.faIcon}`} />
                  </div>
                  <span className="card-tag">{categories.find(c => c.value === item.category)?.label}</span>
                </div>
                
                <div className="card-body-content">
                  <div className="card-cost-badge mx-auto">
                    <i className="fa fa-hand-holding-heart me-1" />
                    {item.cost}
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.desc}</p>
                  
                  {/* Progress Bar */}
                  <div className="card-progress-section">
                    <div className="progress-labels">
                      <span className="raised-label">Raised: <strong>{item.raised}</strong></span>
                      <span className="percent-label">{item.progress}%</span>
                    </div>
                    <div className="progress-bar-track">
                      <div className="progress-bar-fill" style={{ width: `${item.progress}%` }} />
                    </div>
                    <div className="progress-goal">Goal: {item.goal}</div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-custom w-100 mt-4"
                    onClick={() => handleDonateClick(item.title)}
                  >
                    <i className="fa fa-heart me-1" /> Donate Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
