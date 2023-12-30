import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCopyright } from '@fortawesome/free-regular-svg-icons'
import {faAngleRight, faChevronUp, faEnvelope, faLocationDot, faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import {faInstagramSquare , faSquareFacebook} from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
        <footer>
            <div className="footer">
                <div>
                    <h5>Company</h5>
                    <NavLink>About us</NavLink>
                </div>
                <div>
                    <h5>Info</h5>
                    <NavLink>FAQ</NavLink>
                </div>
                <div className="ContactUs">
                    <h5>Contact Us</h5>
                    <FontAwesomeIcon icon={faLocationDot} className="contact-icon"/><span> Cairo, Egypt</span><br/>                    
                    <FontAwesomeIcon icon={faPhoneVolume} className="contact-icon"/><span>+20 0123456789</span><br/> 
                    <FontAwesomeIcon icon={faEnvelope} className="contact-icon"/><span>Info@asutrade.com</span><br/> 
                </div>
                <div className="input-container">
                    <h5>Sign up for our Newsletter</h5>
                    <div className="email-input">
                        <FontAwesomeIcon icon={faUser} className="newsletter-icon"/>
                        <input type="email" placeholder="E-mail Address"></input>
                        <Link><FontAwesomeIcon icon={faAngleRight} className="newsletter-icon"/></Link>
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faSquareFacebook} className="social-icon"/>
                    <FontAwesomeIcon icon={faInstagramSquare} className="social-icon"/>
                    </div>
                    <button onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faChevronUp} className="footer-icon"/></button>
                </div>

            </div>
        </footer>
        <div className="Copyright">
            <FontAwesomeIcon icon={faCopyright} className="c-icon"/>ASU Trade {year}
            <NavLink>Privacy Policy</NavLink>
            <NavLink to='/TermsAndConditions'>Terms & Conditions</NavLink>
        </div>
        </>
    )
}

export default Footer