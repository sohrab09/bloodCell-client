import React from 'react';
import logo from "../../Image/logo.png";
import { FaFacebook, FaLinkedinIn, FaWhatsapp, FaGithub, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer class="site-footer">
                <div class="container">
                    <div class="grid-container">
                        <div class="grid-item">
                            <img src={logo} class="logo-img" alt="" />
                        </div>
                        <div class="grid-item inner-grid-container">
                            <div class="grid-item"><a href="/">About Us</a></div>
                            <div class="grid-item"><a href="/">Privacy Policy</a></div>
                            <div class="grid-item"><a href="/">Contact us</a></div>
                        </div>
                        <div class="grid-item">
                            <div class="social-buttons">
                                <a href="https://www.facebook.com/himel.mahmud.007/"><i class="fab fa-facebook circle-icon"><FaFacebook /></i></a>
                                <a href="https://github.com/sohrab09"><i class="fab fa-facebook circle-icon"><FaGithub /></i></a>
                                <a href="https://www.instagram.com/himel_09/"><i class="fab fa-facebook circle-icon"><FaInstagram /></i></a>
                                <a href="https://www.linkedin.com/in/sohrabhossain/"><i class="fab fa-linkedin-in circle-icon"><FaLinkedinIn /></i></a>
                                <a href="+8801820003222"><i class="fab fa-twitter circle-icon"><FaWhatsapp /></i></a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p>Copyright © 2021 | Blood Cell | All rights reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;