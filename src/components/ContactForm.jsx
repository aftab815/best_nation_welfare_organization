import React, { useState } from 'react';
import '../css/contactForm.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function ContactForm() {
    const MySwal = withReactContent(Swal);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Please enter your name';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Please enter your email';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Please enter a subject';
            isValid = false;
        }

        if (!formData.message.trim()) {
            errors.message = 'Please enter your message';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            MySwal.fire({
                title: 'Sending Message...',
                didOpen() {
                    MySwal.showLoading();
                }
            });
            
            setTimeout(() => {
                MySwal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Thank you for reaching out. We will get back to you shortly.',
                    confirmButtonColor: '#00743f'
                });
                
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
                setErrors({});
            }, 1500);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <div className="contact-section">
            <div className="container">
                <div className="row g-5">
                    {/* Left Column: Contact Info & Map */}
                    <div className="col-lg-5">
                        <div className="contact-info-wrap">
                            <div className="contact-tag">
                                <span className="contact-tag-line" />
                                <span className="contact-tag-text">Contact Info</span>
                            </div>
                            <h2 className="contact-title">We'd Love to Hear From You</h2>
                            <p className="contact-desc">
                                Have questions about our projects, Zakat eligibility, or volunteer programs? Send us a message or visit our head office.
                            </p>

                            <div className="contact-details-list">
                                <div className="contact-info-item">
                                    <div className="info-icon">
                                        <i className="fa fa-map-marker-alt" />
                                    </div>
                                    <div className="info-content">
                                        <h4>Our Address</h4>
                                        <p>BNWO GECHS, Block B street no 5 Faisal Town Lahore</p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="info-icon">
                                        <i className="fa fa-phone-alt" />
                                    </div>
                                    <div className="info-content">
                                        <h4>Phone</h4>
                                        <p>0321-7777011</p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="info-icon">
                                        <i className="fa fa-envelope" />
                                    </div>
                                    <div className="info-content">
                                        <h4>Email</h4>
                                        <p>info@bestnationorg.com</p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="info-icon">
                                        <i className="fa fa-clock" />
                                    </div>
                                    <div className="info-content">
                                        <h4>Hours</h4>
                                        <p>Everyday: 9:00 AM - 5:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Google Map iframe */}
                            <div className="map-embed-wrap">
                                <iframe 
                                    title="BNWO Head Office Location"
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3402.9909180810077!2d74.31374199999999!3d31.469435999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI4JzEwLjAiTiA3NMKwMTgnNDkuNSJF!5e0!3m2!1sen!2s!4v1782199947318!5m2!1sen!2s" 
                                    width="100%" 
                                    height="200" 
                                    style={{ border: 0, borderRadius: '12px' }} 
                                    allowFullScreen="" 
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="col-lg-7">
                        <div className="contact-form-card">
                            <div className="form-header">
                                <h3>Send Us a Message</h3>
                                <p>We reply within 24 business hours.</p>
                            </div>

                            <form onSubmit={handleSubmit} noValidate>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control contact-form-input" 
                                            id="name" 
                                            placeholder="John Doe" 
                                            value={formData.name} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                        {errors.name && <p className="field-error">{errors.name}</p>}
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                        <input 
                                            type="email" 
                                            className="form-control contact-form-input" 
                                            id="email" 
                                            placeholder="john@example.com" 
                                            value={formData.email} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                        {errors.email && <p className="field-error">{errors.email}</p>}
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="phone" className="form-label">Phone Number (Optional)</label>
                                        <input 
                                            type="text" 
                                            className="form-control contact-form-input" 
                                            id="phone" 
                                            placeholder="e.g. +92 300 1234567" 
                                            value={formData.phone} 
                                            onChange={handleChange} 
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="subject" className="form-label">Subject</label>
                                        <input 
                                            type="text" 
                                            className="form-control contact-form-input" 
                                            id="subject" 
                                            placeholder="Inquiry about sponsorship, donation, etc." 
                                            value={formData.subject} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                        {errors.subject && <p className="field-error">{errors.subject}</p>}
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="message" className="form-label">Message Details</label>
                                        <textarea 
                                            className="form-control contact-form-textarea" 
                                            id="message" 
                                            placeholder="Type your message here..." 
                                            value={formData.message} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                        {errors.message && <p className="field-error">{errors.message}</p>}
                                    </div>

                                    <div className="col-md-12 mt-4">
                                        <button className="btn btn-custom w-100 contact-submit-btn" type="submit">
                                            <i className="fa fa-paper-plane me-2" /> Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
