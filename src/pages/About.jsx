import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import Funds from '../components/Funds';
import '../css/about.css';
import contactImg from '../assets/contactus.png';
import chairmanImg from '../assets/enents/flettis/3.jpg';

export default function About() {
    return (
        <>
            <Navbar />
            <div className="page">

                <div className="about-page">

                    {/* ══════════════════════════════════════════
                        SECTION 1 — Mission Strip
                    ══════════════════════════════════════════ */}
                    <div className="about-mission-strip">
                        <p>🌱 Empowering Communities · Building a Better Nation · One Step at a Time</p>
                    </div>

                    {/* ══════════════════════════════════════════
                        SECTION 2 — Who We Are
                    ══════════════════════════════════════════ */}
                    <section className="about-who">
                        <div className="container">
                            <div className="row align-items-center g-5">
                                {/* Text */}
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="about-tag">
                                        <span className="about-tag-line" />
                                        <span className="about-tag-text">Who We Are</span>
                                    </div>
                                    <h2>
                                        Serving Pakistan with <span>Purpose & Passion</span>
                                    </h2>
                                    <p className="lead-text">
                                        <strong>BNWO (Best Nation Welfare Organization)</strong> is a non-profit, welfare-driven organization committed to the holistic development of communities across Pakistan. Founded on the principles of compassion, transparency, and sustainability, we work tirelessly to uplift the underprivileged and build a stronger, more equitable nation.
                                    </p>
                                    <p className="lead-text">
                                        From rural villages to urban communities, our programs span <strong>education, healthcare, food security, skill development,</strong> and <strong>social advocacy</strong>. We believe that every individual, regardless of their background, deserves dignity, opportunity, and a fair chance at a better life.
                                    </p>
                                    <p className="lead-text">
                                        Our team of dedicated volunteers, professionals, and community leaders bring real change through <strong>ground-level action</strong> — not just promises.
                                    </p>

                                    {/* Mini features */}
                                    <div className="row g-3 mt-2">
                                        {[
                                            { icon: 'fa-heart', label: 'Community First Approach' },
                                            { icon: 'fa-shield-alt', label: 'Transparent & Accountable' },
                                            { icon: 'fa-leaf', label: 'Sustainable Impact' },
                                            { icon: 'fa-hands-helping', label: 'Volunteer Driven' },
                                        ].map((f, i) => (
                                            <div className="col-6" key={i}>
                                                <div className="mini-feat-item">
                                                    <i className={`fa ${f.icon} mini-feat-icon`} />
                                                    <span className="mini-feat-text">
                                                        {f.label}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="about-img-wrap">
                                        <img src={contactImg} alt="BNWO Team in Action" />
                                        <div className="about-img-badge">
                                            <div className="badge-num">10+</div>
                                            <div className="badge-label">Years of<br />Impact</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ══════════════════════════════════════════
                        SECTION 3 — Stats Bar
                    ══════════════════════════════════════════ */}
                    <section className="about-stats">
                        <div className="container">
                            <div className="row g-0">
                                {[
                                    { num: '50,000+', label: 'Lives Impacted' },
                                    { num: '200+',    label: 'Volunteers' },
                                    { num: '80+',     label: 'Projects Done' },
                                    { num: '15+',     label: 'Cities Reached' },
                                ].map((s, i) => (
                                    <div className="col-6 col-md-3 stat-item" key={i}>
                                        <div className="stat-num">{s.num}</div>
                                        <div className="stat-label">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ══════════════════════════════════════════
                        SECTION 4 — Vision / Mission / Goals
                    ══════════════════════════════════════════ */}
                    <section className="about-vm">
                        <div className="container">
                            <div className="text-center mb-5">
                                <div className="about-tag justify-content-center mb-3">
                                    <span className="about-tag-line" />
                                    <span className="about-tag-text">Our Foundation</span>
                                    <span className="about-tag-line" />
                                </div>
                                <h2 className="about-section-heading">
                                    Vision, Mission & Goals
                                </h2>
                            </div>

                            <div className="row g-4">
                                <div className="col-lg-4">
                                    <div className="vm-card">
                                        <div className="vm-icon green">
                                            <i className="fa fa-eye" />
                                        </div>
                                        <h3>Our Vision</h3>
                                        <p>
                                            A Pakistan where every citizen lives with dignity, has access to quality education and healthcare, and can contribute meaningfully to national progress — free from poverty, discrimination, and social inequality.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="vm-card">
                                        <div className="vm-icon gold">
                                            <i className="fa fa-rocket" />
                                        </div>
                                        <h3>Our Mission</h3>
                                        <p>
                                            To deliver impactful, sustainable welfare programs that address the root causes of poverty and inequality — through community engagement, strategic partnerships, and dedicated volunteer action across Pakistan.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="vm-card">
                                        <div className="vm-icon orange">
                                            <i className="fa fa-bullseye" />
                                        </div>
                                        <h3>Our Goals</h3>
                                        <p>
                                            Expand our programs to 30+ cities, establish permanent welfare centers, digitize our impact reporting for full transparency, and onboard 500+ active volunteers by 2026 to serve 100,000+ families.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ══════════════════════════════════════════
                        SECTION 5 — Core Values
                    ══════════════════════════════════════════ */}
                    <section className="about-values">
                        <div className="container">
                            <div className="section-title">
                                <div className="about-tag justify-content-center mb-3">
                                    <span className="about-tag-line" />
                                    <span className="about-tag-text">What Drives Us</span>
                                    <span className="about-tag-line" />
                                </div>
                                <h2>Our Core Values</h2>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    {[
                                        {
                                            num: '01',
                                            title: 'Compassion & Dignity',
                                            desc: 'We treat every individual with respect and empathy, ensuring that our programs preserve human dignity at every step.'
                                        },
                                        {
                                            num: '02',
                                            title: 'Transparency & Trust',
                                            desc: 'Every donation, every rupee spent is accounted for. We publish our financials openly to build lasting trust with our donors.'
                                        },
                                        {
                                            num: '03',
                                            title: 'Community Ownership',
                                            desc: 'We don\'t impose solutions — we listen, collaborate, and co-create with communities to ensure lasting, locally driven change.'
                                        },
                                    ].map((v, i) => (
                                        <div className="value-item" key={i}>
                                            <div className="value-num">{v.num}</div>
                                            <div className="value-content">
                                                <h4>{v.title}</h4>
                                                <p>{v.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-lg-6">
                                    {[
                                        {
                                            num: '04',
                                            title: 'Sustainability & Long-term Impact',
                                            desc: 'We build systems, not handouts — creating self-sustaining programs that communities can carry forward independently.'
                                        },
                                        {
                                            num: '05',
                                            title: 'Inclusivity & Equality',
                                            desc: 'We serve without discrimination — across gender, religion, ethnicity, or geography. Every life matters equally to us.'
                                        },
                                        {
                                            num: '06',
                                            title: 'Youth Empowerment',
                                            desc: 'Pakistan\'s future lies in its youth. We actively invest in young leaders, mentors, and volunteers who will carry this mission forward.'
                                        },
                                    ].map((v, i) => (
                                        <div className="value-item" key={i}>
                                            <div className="value-num">{v.num}</div>
                                            <div className="value-content">
                                                <h4>{v.title}</h4>
                                                <p>{v.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ══════════════════════════════════════════
                        SECTION 6 — Leadership Team
                    ══════════════════════════════════════════ */}
                    <section className="about-chairman">
                        <div className="container">
                            <div className="row align-items-center g-5">
                                {/* Circular Image */}
                                <div className="col-lg-5 text-center">
                                    <div className="chairman-img-wrap">
                                        <img src={chairmanImg} alt="Mian Ulfat Rasool Joiya - Chairman" />
                                    </div>
                                </div>
                                {/* Message & Info */}
                                <div className="col-lg-7">
                                    <div className="about-tag">
                                        <span className="about-tag-line" />
                                        <span className="about-tag-text">Our Chairman</span>
                                    </div>
                                    <h2 className="chairman-name">Mian Ulfat Rasool Joiya</h2>
                                    <div className="chairman-role">Chairman, BNWO</div>
                                    <p className="chairman-msg">
                                        "Our goal is not just to provide temporary relief, but to build sustainable systems that empower individuals and elevate entire communities. Best Nation Welfare Organization is built on the foundations of trust, transparency, and selfless service. Together, we can build a stronger, more equitable Pakistan where every citizen can thrive."
                                    </p>
                                    <p className="chairman-bio">
                                        Mian Ulfat Rasool Joiya is the visionary force steering Best Nation Welfare Organization. His focus on grassroots action, healthcare camp initiatives, education drives, and emergency relief programs has brought life-changing impact to thousands of deserving families across Pakistan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ══════════════════════════════════════════
                        SECTION 7 — Stats / Facts Parallax
                    ══════════════════════════════════════════ */}
                    <Funds />

                    {/* ══════════════════════════════════════════
                        SECTION 8 — CTA
                    ══════════════════════════════════════════ */}
                    <section className="about-cta">
                        <div className="container">
                            <h2>Ready to Make a Difference?</h2>
                            <p>
                                Join thousands of Pakistanis who are already contributing to a better nation. Whether you volunteer, donate, or spread the word — every action counts.
                            </p>
                            <div className="about-cta-btns">
                                <a href="/donate" className="cta-btn-primary">
                                    <i className="fa fa-heart me-2" /> Donate Now
                                </a>
                                <a href="/contact" className="cta-btn-outline">
                                    <i className="fa fa-hands-helping me-2" /> Become a Volunteer
                                </a>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            <Footer />
            <BackToTop />
        </>
    );
}