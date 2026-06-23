import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../css/navbar.css';

export default function Navbar() {
    const path = useLocation().pathname;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Get the top bar element
        const topBar = document.querySelector('.top-bar');
        // Get the navbar element
        const navbar = document.querySelector('.navbar');
        function toggleStickyNavbar() {
            if (window.scrollY > topBar.offsetHeight) {
                navbar.classList.add('nav-sticky');
                topBar.classList.add('hide-top-bar'); // Add class to hide top bar
            } else {
                navbar.classList.remove('nav-sticky');
                topBar.classList.remove('hide-top-bar'); // Remove class to show top bar
            }
        }
        window.addEventListener('scroll', toggleStickyNavbar);
        return () => window.removeEventListener('scroll', toggleStickyNavbar);
    }, []);

    return (
        <>
            {/* <!-- Top Bar Start --> */}
            <div className="top-bar d-none d-md-block">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="top-bar-left">
                                <div className="text">
                                    <i className="fa fa-phone"></i>
                                    <a href="tel:0321-7777011"><p>0321-7777011</p></a>
                                </div>
                                <div className="text">
                                    <i className="fa fa-envelope"></i>
                                    <a href="mailto:info@bestnationorg.com"><p>info@bestnationorg.com</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="top-bar-right">
                                <div className="social">
                                    <a href="https://x.com/Bestnation_bnwo" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
                                    <a href="https://www.facebook.com/Bnwoofficial/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/bestnation_bnwo/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                    <a href="https://www.youtube.com/@Bestnationofficial" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Top Bar End --> */}

            {/* <!-- Nav Bar Start --> */}
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="BNWO Logo" />
                        <div className="brand-text">
                            <span className="brand-title">BNWO</span>
                            <span className="brand-slogan">Best Nation Welfare Organization</span>
                        </div>
                    </Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <Link to="/" className={`nav-item nav-link ${path === '/' ? "active" : ""}`}>Home</Link>
                            <Link to="/about" className={`nav-item nav-link ${path === '/about' ? "active" : ""}`}>About</Link>
                            <Link to="/event" className={`nav-item nav-link ${path === '/event' ? "active" : ""}`}>Events</Link>
                            <Link to="/contact" className={`nav-item nav-link ${path === '/contact' ? "active" : ""}`}>Contact</Link>
                            <Link to="/donate" className="nav-donate-btn">
                                <i className="fa fa-heart"></i> Donate Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Nav Bar End --> */}
        </>
    );
}