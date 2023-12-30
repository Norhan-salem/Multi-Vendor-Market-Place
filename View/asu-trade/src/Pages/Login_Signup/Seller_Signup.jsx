import React, { useState } from "react";
import axios from "axios";
import '../Login_Signup/Login_Signup.css'
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faEnvelope, faKey, faEye, faEyeSlash, faPhone, faLocationDot, faHome } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import TermsAndConditions from '../TermsAndConditions/TermsAndConditions';
import Login from '../Login_Signup/Login';
import Navbar from '../../Components/Navbar/Navbar';
import { handleSignup } from "./HandleSignup";

const Seller_Signup = () => {

    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [phonenumber, setPhonenumber] = useState();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPassword1Visible, setIsPassword1Visible] = useState(false);
    const [isPassword2Visible, setIsPassword2Visible] = useState(false);
    const userType = 'seller';

    return (
        <>
        <Navbar/>
        <div className="login_signup">
            <div className="seller_signup_container">
                <div>
                    <h1>Create a seller account</h1>
                    <form onSubmit={(event) => handleSignup(event, firstname, lastname, phonenumber, password, confirmPassword, username, email)}>
                        <div className="login_signup_fields">
                            <div className="input-container">
                                <FontAwesomeIcon icon={faUser} className="input-icon"/>
                                <input type="text" placeholder="First Name" value={firstname} onChange={e => setFirstname(e.target.value)} required></input>
                            </div>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faUser} className="input-icon"/>
                                <input type="text" placeholder="Last Name" value={lastname} onChange={e => setLastname(e.target.value)} required></input>
                            </div>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faUser} className="input-icon"/>
                                <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required></input>
                            </div>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faEnvelope} className="input-icon"/>
                                <input type="email" placeholder="E-mail Address" value={email} onChange={e => setEmail(e.target.value)} required></input>
                            </div>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faPhone} className="input-icon"/>
                                <input type="tel" placeholder="Enter Phone Number" value={phonenumber} onChange={e => setPhonenumber(e.target.value)} required/>
                            </div>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faLocationDot} className="input-icon"/>
                                <input type="text" placeholder="Enter Location" value={location} onChange={e => setLocation(e.target.value)} required/>
                            </div>
                            <div className="select-container">
                                <FontAwesomeIcon icon={faHome} className="input-icon"/>
                                <select className="select" value={neighborhood} onChange={e => setNeighborhood(e.target.value)} required>
                                    <option value="">Enter Neighborhood</option>
                                    <option value="New Cairo">New Cairo</option>
                                    <option value="Old Cairo">Old Cairo</option>
                                    <option value="Heliopolis">Heliopolis</option>
                                    <option value="Madinaty">Madinaty</option>
                                    <option value="Madinet Nasr">Madinet Nasr</option>
                                    <option value="El-Asema El-Edariya">El-Asema El-Edariya</option>
                                    <option value="Masr El-Gedida">Masr El-Gedida</option>
                                </select>
                            </div>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faKey} className="input-icon"/>
                                <input type={isPassword1Visible ? "text" : "password"} placeholder="Enter Your Password" value={password} onChange={e => setPassword(e.target.value)} required></input>
                                <FontAwesomeIcon icon={isPassword1Visible ? faEye : faEyeSlash} className="eye-icon" onClick={() => setIsPassword1Visible(!isPassword1Visible)}/>
                            </div>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faKey} className="input-icon"/>
                                <input type={isPassword2Visible ? "text" : "password"} placeholder="Confirm Your Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required></input>
                                <FontAwesomeIcon icon={isPassword2Visible ? faEye : faEyeSlash} className="eye-icon" onClick={() => setIsPassword2Visible(!isPassword2Visible)}/>
                            </div>
                        </div>

                        <div className="login_signup_CB">
                            <input type="checkbox" name="checkbox-agreetoterms" id="login_signup_checkbox" required/>
                            <p>I agree to all <Link to={TermsAndConditions}>Terms & Conditions</Link></p>
                        </div>

                        <Link to={Login} className="submit-form"><button type="submit" className="CreatAccountMainButton">Create Account</button></Link>

                        <div className="login_signup_alternative">
                            <hr/>
                            <p> or Sign up with </p>
                            <hr/>
                        </div>

                        <div className="login_signup_social">
                            <Link className="social_icon">
                                <FontAwesomeIcon icon={faGoogle}/><span>Google</span>
                            </Link>
                            <Link className="social_icon">
                                <FontAwesomeIcon icon={faFacebook}/><span>Facebook</span>
                            </Link>
                        </div>
                        <p className="login_signup_login">Already have an account? <Link to={Login}>Log in here</Link></p>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Seller_Signup;