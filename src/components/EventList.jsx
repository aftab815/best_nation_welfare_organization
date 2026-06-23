import React, { useState, useEffect } from 'react';
import '../css/eventList.css';

// ── Chamber of Commerce Lahore (Event 1) ──────────────────────────────────
import coc1_1 from '../assets/enents/chamber of commerce 1/IMG_8317.JPG';
import coc1_2 from '../assets/enents/chamber of commerce 1/IMG_8318.jpg';
import coc1_3 from '../assets/enents/chamber of commerce 1/IMG_8326.jpg';
import coc1_4 from '../assets/enents/chamber of commerce 1/IMG_8327.jpg';
import coc1_5 from '../assets/enents/chamber of commerce 1/IMG_8340.jpg';
import coc1_6 from '../assets/enents/chamber of commerce 1/IMG_8343.jpg';
import coc1_7 from '../assets/enents/chamber of commerce 1/IMG_8350.jpg';
import coc1_8 from '../assets/enents/chamber of commerce 1/IMG_8360.jpg';
import coc1_9 from '../assets/enents/chamber of commerce 1/IMG_8364.jpg';
import coc1_10 from '../assets/enents/chamber of commerce 1/IMG_8425.jpg';
import coc1_11 from '../assets/enents/chamber of commerce 1/IMG_8484.jpg';
import coc1_12 from '../assets/enents/chamber of commerce 1/IMG_8550.jpg';
import coc1_13 from '../assets/enents/chamber of commerce 1/IMG_8551.jpg';
import coc1_14 from '../assets/enents/chamber of commerce 1/IMG_8574.jpg';
import coc1_15 from '../assets/enents/chamber of commerce 1/IMG_8601.jpg';
import coc1_16 from '../assets/enents/chamber of commerce 1/IMG_8603.jpg';
import coc1_17 from '../assets/enents/chamber of commerce 1/IMG_8639.jpg';
import coc1_18 from '../assets/enents/chamber of commerce 1/IMG_8646.jpg';

// ── Chamber of Commerce Meeting (Event 2) ─────────────────────────────────
import coc2_1 from '../assets/enents/chamber of commerce 2/IMG_9007.JPG';
import coc2_2 from '../assets/enents/chamber of commerce 2/IMG_9015.JPG';
import coc2_3 from '../assets/enents/chamber of commerce 2/IMG_9019.JPG';
import coc2_4 from '../assets/enents/chamber of commerce 2/IMG_9021.JPG';
import coc2_5 from '../assets/enents/chamber of commerce 2/IMG_9024.JPG';
import coc2_6 from '../assets/enents/chamber of commerce 2/IMG_9025.JPG';
import coc2_7 from '../assets/enents/chamber of commerce 2/IMG_9027.JPG';
import coc2_8 from '../assets/enents/chamber of commerce 2/IMG_9030.JPG';
import coc2_9 from '../assets/enents/chamber of commerce 2/IMG_9032.JPG';
import coc2_10 from '../assets/enents/chamber of commerce 2/IMG_9034.JPG';
import coc2_11 from '../assets/enents/chamber of commerce 2/IMG_9071.JPG';
import coc2_12 from '../assets/enents/chamber of commerce 2/IMG_9133.JPG';
import coc2_13 from '../assets/enents/chamber of commerce 2/IMG_9134.JPG';
import coc2_14 from '../assets/enents/chamber of commerce 2/IMG_9135.JPG';

// ── Chamber of Commerce Partnership Forum (Event 3) ───────────────────────
import coc3_1 from '../assets/enents/chamber of commerce 3/IMG_6829.JPG';
import coc3_2 from '../assets/enents/chamber of commerce 3/IMG_6832.JPG';
import coc3_3 from '../assets/enents/chamber of commerce 3/IMG_6837.JPG';
import coc3_4 from '../assets/enents/chamber of commerce 3/IMG_6840.JPG';
import coc3_5 from '../assets/enents/chamber of commerce 3/IMG_6842.JPG';
import coc3_6 from '../assets/enents/chamber of commerce 3/IMG_6843.JPG';
import coc3_7 from '../assets/enents/chamber of commerce 3/IMG_6849.JPG';
import coc3_8 from '../assets/enents/chamber of commerce 3/IMG_6852.JPG';
import coc3_9 from '../assets/enents/chamber of commerce 3/IMG_6853.JPG';
import coc3_10 from '../assets/enents/chamber of commerce 3/IMG_6855.JPG';

// ── Jhang Ration Distribution (Event 4) ──────────────────────────────────
import jhang1 from '../assets/enents/jhang rashan distribution/1.jpg';
import jhang2 from '../assets/enents/jhang rashan distribution/2.jpg';
import jhang3 from '../assets/enents/jhang rashan distribution/3.jpg';
import jhang4 from '../assets/enents/jhang rashan distribution/4.jpg';
import jhang5 from '../assets/enents/jhang rashan distribution/5.jpg';
import jhang6 from '../assets/enents/jhang rashan distribution/6.jpg';
import jhang7 from '../assets/enents/jhang rashan distribution/7.jpg';
import jhang8 from '../assets/enents/jhang rashan distribution/8.jpg';
import jhang9 from '../assets/enents/jhang rashan distribution/9.jpg';
import jhang10 from '../assets/enents/jhang rashan distribution/11.jpg';
import jhang11 from '../assets/enents/jhang rashan distribution/12.jpg';
import jhang12 from '../assets/enents/jhang rashan distribution/14.jpg';

// ── Flattis Lahore (Event 5) ──────────────────────────────────────────────
import flettis1 from '../assets/enents/flettis/2.jpg';
import flettis2 from '../assets/enents/flettis/3.jpg';
import flettis3 from '../assets/enents/flettis/4.jpg';
import flettis4 from '../assets/enents/flettis/5.jpg';
import flettis5 from '../assets/enents/flettis/6.jpg';
import flettis6 from '../assets/enents/flettis/7.jpg';
import flettis7 from '../assets/enents/flettis/8.jpg';
import flettis8 from '../assets/enents/flettis/IMG-20240312-WA0048.jpg';
import flettis9 from '../assets/enents/flettis/IMG-20240312-WA0049.jpg';
import flettis10 from '../assets/enents/flettis/IMG-20240312-WA0051.jpg';
import flettis11 from '../assets/enents/flettis/IMG-20240312-WA0063.jpg';
import flettis12 from '../assets/enents/flettis/IMG-20240312-WA0064.jpg';

// ── Sialkot Community Function (Event 6) ──────────────────────────────────
import sialkot1 from '../assets/enents/sialkot/1.jpg';
import sialkot2 from '../assets/enents/sialkot/2.jpg';
import sialkot4 from '../assets/enents/sialkot/4.jpg';
import sialkot5 from '../assets/enents/sialkot/5.jpg';
import sialkot6 from '../assets/enents/sialkot/IMG_0509.jpg';
import sialkot7 from '../assets/enents/sialkot/IMG_0519.JPG';
import sialkot8 from '../assets/enents/sialkot/IMG_0521.JPG';
import sialkot9 from '../assets/enents/sialkot/IMG_0541.jpg';
import sialkot10 from '../assets/enents/sialkot/IMG_0545.jpg';
import sialkot11 from '../assets/enents/sialkot/IMG_0548.jpg';
import sialkot12 from '../assets/enents/sialkot/IMG_0550.JPG';

// ── Amanah Mall Community Drive (Event 7) ────────────────────────────────
import amanah1 from '../assets/enents/amanah mall/amana mal 1.JPG';
import amanah2 from '../assets/enents/amanah mall/amana mall 2.JPG';
import amanah3 from '../assets/enents/amanah mall/amana mall 3.JPG';
import amanah4 from '../assets/enents/amanah mall/amana mall 4.JPG';
import amanah5 from '../assets/enents/amanah mall/amana mall 5.JPG';
import amanah6 from '../assets/enents/amanah mall/amana mall 6.JPG';
import amanah7 from '../assets/enents/amanah mall/amana mall 7.JPG';
import amanah8 from '../assets/enents/amanah mall/amana mall 8.JPG';
import amanah9 from '../assets/enents/amanah mall/amana mall 9.JPG';
import amanah10 from '../assets/enents/amanah mall/amana mall 10.JPG';
import amanah11 from '../assets/enents/amanah mall/amana mall 11.JPG';
import amanah12 from '../assets/enents/amanah mall/amana mall 12.JPG';
import amanah13 from '../assets/enents/amanah mall/amana mall 13.JPG';
import amanah14 from '../assets/enents/amanah mall/amana mall 14.JPG';
import amanah15 from '../assets/enents/amanah mall/amana mall 15.JPG';

const eventsData = [
  {
    id: 1,
    title: "Chamber of Commerce Lahore",
    category: "meetings",
    date: "February 24, 2026",
    time: "11:00 AM - 2:00 PM",
    location: "LCCI, Lahore",
    description: "BNWO joined leaders and members at the Lahore Chamber of Commerce for dialogue on community welfare, partnerships, and how the business community can support outreach and social impact initiatives.",
    image: coc1_1,
    gallery: [coc1_1, coc1_2, coc1_3, coc1_4, coc1_5, coc1_6, coc1_7, coc1_8, coc1_9, coc1_10, coc1_11, coc1_12, coc1_13, coc1_14, coc1_15, coc1_16, coc1_17, coc1_18]
  },
  {
    id: 2,
    title: "Chamber of Commerce Meeting",
    category: "meetings",
    date: "March 5, 2026",
    time: "10:00 AM - 2:00 PM",
    location: "Chamber of Commerce, Lahore",
    description: "BNWO representatives met with Chamber of Commerce members to discuss corporate social responsibility, community welfare partnerships, and opportunities for businesses to support outreach and training programs.",
    image: coc2_1,
    gallery: [coc2_1, coc2_2, coc2_3, coc2_4, coc2_5, coc2_6, coc2_7, coc2_8, coc2_9, coc2_10, coc2_11, coc2_12, coc2_13, coc2_14]
  },
  {
    id: 3,
    title: "Chamber of Commerce Forum",
    category: "meetings",
    date: "April 10, 2026",
    time: "11:00 AM - 2:00 PM",
    location: "Chamber of Commerce, Lahore",
    description: "A follow-up Chamber of Commerce forum focused on long-term collaboration between BNWO and the business community, with plans for joint welfare drives, skills initiatives, and sustained support for underserved families.",
    image: coc3_1,
    gallery: [coc3_1, coc3_2, coc3_3, coc3_4, coc3_5, coc3_6, coc3_7, coc3_8, coc3_9, coc3_10]
  },
  {
    id: 4,
    title: "Jhang Ration Distribution",
    category: "relief",
    date: "October 12, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Jhang, Punjab",
    description: "Ration packs and essential groceries were distributed to families in need across Jhang, with volunteers coordinating registration, packing, and handover so support reached those who needed it most.",
    image: jhang1,
    gallery: [jhang1, jhang2, jhang3, jhang4, jhang5, jhang6, jhang7, jhang8, jhang9, jhang10, jhang11, jhang12]
  },
  {
    id: 5,
    title: "Flattis Lahore Welfare Event",
    category: "meetings",
    date: "January 18, 2026",
    time: "12:00 PM - 5:00 PM",
    location: "Flattis, Lahore",
    description: "BNWO organized a welfare and networking event at Flattis Lahore, highlighting community development goals, volunteer engagement, and partnerships to expand education and social support services.",
    image: flettis1,
    gallery: [flettis1, flettis2, flettis3, flettis4, flettis5, flettis6, flettis7, flettis8, flettis9, flettis10, flettis11, flettis12]
  },
  {
    id: 6,
    title: "Sialkot Community Function",
    category: "campaigns",
    date: "November 20, 2025",
    time: "11:00 AM - 4:00 PM",
    location: "Sialkot, Punjab",
    description: "A community gathering in Sialkot brought together local supporters, volunteers, and partners to celebrate BNWO's welfare work and strengthen collaboration for skills training and family support programs.",
    image: sialkot1,
    gallery: [sialkot1, sialkot2, sialkot4, sialkot5, sialkot6, sialkot7, sialkot8, sialkot9, sialkot10, sialkot11, sialkot12]
  },
  {
    id: 7,
    title: "Amanah Mall Community Drive",
    category: "campaigns",
    date: "December 8, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Amanah Mall, Lahore",
    description: "BNWO held a community awareness and welfare drive at Amanah Mall, connecting with families, sharing information about our programs, and building support for education and outreach initiatives across Lahore.",
    image: amanah1,
    gallery: [amanah1, amanah2, amanah3, amanah4, amanah5, amanah6, amanah7, amanah8, amanah9, amanah10, amanah11, amanah12, amanah13, amanah14, amanah15]
  }
];

const eventCategories = [
  { value: "all", label: "All Events" },
  { value: "relief", label: "Food & Ration Drives" },
  { value: "meetings", label: "Partnerships & Meetings" },
  { value: "campaigns", label: "Outreach & Drives" }
];

export default function EventList() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const filteredEvents = activeFilter === "all"
    ? eventsData
    : eventsData.filter(e => e.category === activeFilter);

  const openGallery = (event, e) => {
    e.stopPropagation();
    setSelectedEvent(event);
    setCurrentImgIndex(0);
  };

  const closeGallery = () => {
    setSelectedEvent(null);
  };

  const nextImage = () => {
    if (selectedEvent) {
      setCurrentImgIndex((prevIndex) => 
        (prevIndex + 1) % selectedEvent.gallery.length
      );
    }
  };

  const prevImage = () => {
    if (selectedEvent) {
      setCurrentImgIndex((prevIndex) => 
        (prevIndex - 1 + selectedEvent.gallery.length) % selectedEvent.gallery.length
      );
    }
  };

  // Keyboard controls for the Lightbox Gallery
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedEvent) return;
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedEvent]);

  return (
    <div className="event-list-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <p>Our Past Events</p>
          <h2>Documenting BNWO Outreach and Milestones</h2>
        </div>

        {/* Dynamic Filters */}
        <div className="initiatives-filters mb-5">
          {eventCategories.map(cat => (
            <button
              key={cat.value}
              className={`filter-btn ${activeFilter === cat.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="row justify-content-center">
          {filteredEvents.map(event => (
            <div className="col-lg-4 col-md-6 mb-4 event-card-container" key={event.id}>
              <div className="event-card glass-card" onClick={(e) => openGallery(event, e)}>
                <div className="event-card-img">
                  <img src={event.image} alt={event.title} />
                  <span className="event-badge">Past Event</span>
                </div>
                <div className="event-card-body">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-meta">
                    <p><i className="fa fa-calendar-alt"></i>{event.date}</p>
                    <p><i className="fa fa-clock"></i>{event.time}</p>
                    <p><i className="fa fa-map-marker-alt"></i>{event.location}</p>
                  </div>
                  <p className="event-description">
                    {event.description.length > 120 
                      ? `${event.description.substring(0, 117)}...` 
                      : event.description}
                  </p>
                  <button 
                    type="button" 
                    className="btn btn-custom w-100 mt-4"
                    onClick={(e) => openGallery(event, e)}
                  >
                    <i className="fa fa-images me-1" /> View Gallery ({event.gallery.length} Photos)
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Premium Lightbox Gallery Modal --- */}
      <div className={`lightbox-modal ${selectedEvent ? 'show' : ''}`} onClick={closeGallery}>
        {selectedEvent && (
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="lightbox-close" onClick={closeGallery}>&times;</button>
            
            <div className="lightbox-image-wrapper">
              <button type="button" className="lightbox-btn prev" onClick={prevImage}>
                <i className="fa fa-chevron-left"></i>
              </button>
              
              <img 
                src={selectedEvent.gallery[currentImgIndex]} 
                alt={`${selectedEvent.title} Gallery`} 
                className="lightbox-main-img" 
              />
              
              <button type="button" className="lightbox-btn next" onClick={nextImage}>
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
            
            {/* Thumbnail Strip */}
            <div className="lightbox-thumbnails">
              {selectedEvent.gallery.map((imgUrl, idx) => (
                <img 
                  key={idx}
                  src={imgUrl} 
                  alt="Thumbnail" 
                  className={`lightbox-thumb ${idx === currentImgIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImgIndex(idx)}
                />
              ))}
            </div>

            <div className="lightbox-info">
              <h3 className="lightbox-title">{selectedEvent.title}</h3>
              <div className="lightbox-meta">
                <span><i className="fa fa-calendar-alt text-warning mr-2"></i>{selectedEvent.date}</span>
                <span><i className="fa fa-map-marker-alt text-warning mr-2"></i>{selectedEvent.location}</span>
              </div>
              <p className="lightbox-desc">{selectedEvent.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
