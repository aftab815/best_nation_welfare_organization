import React, { useState, useEffect, useCallback } from 'react';
import '../css/landing.css';
import { useNavigate } from 'react-router-dom';

// ── Hero Slideshow Images ─────────────────────────────────────────────────
import hero1  from '../assets/hero/3.jpg';
import hero2  from '../assets/hero/4.jpg';
import hero3  from '../assets/hero/5.jpg';
import hero4  from '../assets/hero/7.jpg';
import hero5  from '../assets/hero/8.jpg';
import hero6  from '../assets/hero/IMG_6869.JPG';
import hero7  from '../assets/hero/IMG_7252.JPG';
import hero8  from '../assets/hero/IMG_7258.JPG';
import hero9  from '../assets/hero/IMG_8551.jpg';
import hero10 from '../assets/hero/IMG_8574.jpg';
import hero11 from '../assets/hero/IMG_9019.JPG';
import hero12 from '../assets/hero/IMG_9021.JPG';
import hero13 from '../assets/hero/IMG_9133.JPG';

const slides = [
  { img: hero1,  caption: 'Empowering Communities Across Pakistan' },
  { img: hero2,  caption: 'Building a Better Tomorrow Together' },
  { img: hero3,  caption: 'Welfare, Education & Social Change' },
  { img: hero4,  caption: 'Standing With Those Who Need Us Most' },
  { img: hero5,  caption: 'Creating Sustainable Impact' },
  { img: hero6,  caption: 'Uniting Hearts, Strengthening Communities' },
  { img: hero7,  caption: 'From Every Corner — Hope Delivered' },
  { img: hero8,  caption: 'Volunteers Driving Real Change' },
  { img: hero9,  caption: 'Partnerships for a Prosperous Nation' },
  { img: hero10, caption: 'Youth, Leadership & Future Ready' },
  { img: hero11, caption: 'Serving With Purpose and Passion' },
  { img: hero12, caption: 'Your Support, Their Brighter Future' },
  { img: hero13, caption: 'Together We Rise — BNWO' },
];

const SLIDE_DURATION = 5000;

export default function Landing() {
  const navigate = useNavigate();
  const [current, setCurrent]   = useState(0);
  const [prev,    setPrev]      = useState(slides.length - 1);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress]   = useState(0);

  // Widget donation states
  const [widgetAmount, setWidgetAmount] = useState(2500);
  const [widgetCause, setWidgetCause] = useState("General Sadaqah");

  const goTo = useCallback((index) => {
    if (animating) return;
    setPrev(current);
    setCurrent(index);
    setAnimating(true);
    setProgress(0);
    setTimeout(() => setAnimating(false), 900);
  }, [animating, current]);

  const goNext = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(goNext, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [goNext]);

  // Progress bar
  useEffect(() => {
    setProgress(0);
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const elapsed = now - start;
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
      if (elapsed < SLIDE_DURATION) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [current]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft')  goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  // Quick donate submit
  const handleWidgetSubmit = (e) => {
    e.preventDefault();
    navigate(`/donate?cause=${encodeURIComponent(widgetCause)}&amount=${widgetAmount}`);
  };

  return (
    <div className="hero-slideshow">
      {/* ── Slide Layers ──────────────────────────────────────────── */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`hero-slide
            ${idx === current ? 'hero-slide--active'   : ''}
            ${idx === prev    ? 'hero-slide--prev'     : ''}
          `}
          style={{ backgroundImage: `url(${slide.img})` }}
        />
      ))}

      {/* ── Dark Gradient Overlay ─────────────────────────────────── */}
      <div className="hero-overlay" />

      {/* ── Content Grid (Split Side-by-Side) ───────────────────── */}
      <div className="container-fluid hero-container-grid px-lg-5 px-4">
        <div className="row align-items-center h-100 g-5">
          {/* Left Column: Headings & Text */}
          <div className="col-lg-7 col-12 align-self-lg-end pb-lg-5">
            <div className="hero-content">
              <h1 className="hero-headline" key={current}>
                {slides[current].caption}
              </h1>

              <p className="hero-sub">
                BNWO is committed to restoring dignity and hope to underserved families across Pakistan. Through medical camps, food distribution, and clean water wells, we bring real, sustainable change.
              </p>

              <div className="hero-btns d-none d-md-flex">
                <button
                  className="hero-btn hero-btn--primary"
                  onClick={() => navigate('/donate')}
                >
                  <i className="fa fa-heart me-1" /> Donate Today
                </button>
                <button
                  className="hero-btn hero-btn--outline"
                  onClick={() => navigate('/about')}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Quick Donation Panel (JDC/Alkhidmat Style) */}
          <div className="col-lg-5 col-12 align-self-lg-center d-flex justify-content-center justify-content-lg-end">
            <div className="hero-donate-widget glass-panel animated fadeIn">
              <div className="widget-header">
                <h3>Quick Donation</h3>
                <p>Support a cause and save lives in Pakistan</p>
              </div>

              <form onSubmit={handleWidgetSubmit}>
                {/* Select Cause */}
                <div className="mb-3">
                  <label htmlFor="widget-cause" className="widget-label">Support Project</label>
                  <select
                    id="widget-cause"
                    className="form-select widget-select"
                    value={widgetCause}
                    onChange={(e) => setWidgetCause(e.target.value)}
                  >
                    <option value="General Sadaqah">General Sadaqah / Zakat</option>
                    <option value="Clean Water Projects">Clean Water Wells</option>
                    <option value="Orphan Sponsorship">Orphan Support</option>
                    <option value="Free Healthcare & Clinics">Medical Camps</option>
                    <option value="Ration Distribution Drive">Ration Distribution</option>
                    <option value="Emergency Disaster Relief">Emergency Relief</option>
                  </select>
                </div>

                {/* Amount presets */}
                <div className="mb-3">
                  <label className="widget-label">Amount (PKR)</label>
                  <div className="widget-presets">
                    {[1000, 2000, 5000].map(val => (
                      <button
                        key={val}
                        type="button"
                        className={`w-preset-btn ${widgetAmount === val ? 'active' : ''}`}
                        onClick={() => setWidgetAmount(val)}
                      >
                        Rs. {val.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount Input */}
                <div className="mb-4">
                  <div className="widget-custom-wrap">
                    <span className="w-currency">Rs.</span>
                    <input
                      type="number"
                      className="form-control widget-amount-input"
                      placeholder="Other Amount"
                      value={widgetAmount}
                      onChange={(e) => setWidgetAmount(Number(e.target.value))}
                      min="100"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-custom w-100 widget-submit-btn">
                  <i className="fa fa-heart me-1" /> Donate Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ── Progress Bar ──────────────────────────────────────────── */}
      <div className="hero-progress">
        <div className="hero-progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}