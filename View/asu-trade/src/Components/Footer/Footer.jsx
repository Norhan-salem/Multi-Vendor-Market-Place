import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCopyright } from '@fortawesome/free-regular-svg-icons'
import {faAngleRight, faChevronUp, faEnvelope, faLocationDot, faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import {faInstagramSquare , faSquareFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import TermsAndConditions from "../../Pages/TermsAndConditions/TermsAndConditions";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
        <footer>
            <div className="footer">
                <div>
                    <h6>Company</h6>
                    <NavLink>about us</NavLink>
                </div>
                <div>
                    <h6>Info</h6>
                    <NavLink>FAQ</NavLink>
                </div>
                <div>
                    <h6>Contact Us</h6>
                    <FontAwesomeIcon icon={faLocationDot} className="contact-icon"/>Cairo, Egypt<br/>                    
                    <FontAwesomeIcon icon={faPhoneVolume} className="contact-icon"/>+20 0123456789<br/> 
                    <FontAwesomeIcon icon={faEnvelope} className="contact-icon"/>Info@asutrade.com<br/> 
                </div>
                <div className="input-container">
                    <h6>Sign up for our news letter and updates</h6>
                    <FontAwesomeIcon icon={faUser} className="newsletter-icon"/>
                    <input type="email" placeholder="E-mail Address"></input>
                    <FontAwesomeIcon icon={faAngleRight} className="newsletter-icon"/><br/>
                
                    <FontAwesomeIcon icon={faSquareFacebook} className="social-icon"/>
                    <FontAwesomeIcon icon={faInstagramSquare} className="social-icon"/>
                    <FontAwesomeIcon icon={faXTwitter} className="social-icon"/><br/>
                    <NavLink><button><FontAwesomeIcon icon={faChevronUp} className="footer-icon"/></button></NavLink>
                </div>
            </div>
        </footer>
        <div className="Copyright">
            <FontAwesomeIcon icon={faCopyright} className="c-icon"/>ASU Trade {year}
            <NavLink>Privacy Policy</NavLink>
            <NavLink to={TermsAndConditions}>Terms & Conditions</NavLink>
        </div>
        </>
    )
}

export default Footer