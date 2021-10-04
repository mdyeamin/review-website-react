import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-area">
            <div className="footer-icon">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-github"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-instagram"></i>
            </div>
            <div className="footer-links">
                <h5>Blog</h5>
                <h5>Airticle</h5>
                <h5>Travelling</h5>
                <h5>learning process</h5>
            </div>
        </div>
    );
};

export default Footer;