import React, { useState } from "react";
import '../Login_Signup/Login_Signup.css'
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faEnvelope, faKey, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import TermsAndConditions from '../TermsAndConditions/TermsAndConditions';
import Login from '../Login_Signup/Login';
import Navbar from '../../Components/Navbar/Navbar';


const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPassword1Visible, setIsPassword1Visible] = useState(false);
    const [isPassword2Visible, setIsPassword2Visible] = useState(false);

    const handleSignup = async (event) => {
        event.preventDefault();

        // Fullname validation
        // Check if full name is in 'firstname lastname' format
        var nameParts = username.split(' ');
        if (nameParts.length !== 2) {
            alert('Full name must be in "FirstName LastName" format.');
            return;
        }

        // Check if both names are greater than 3 characters
        if (nameParts[0].length <= 3 || nameParts[1].length <= 3) {
            alert('Both first name and last name must be atleast 3 characters.');
            return;
        }

        // Password validation function
        // Check if password is at least 8 characters long
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        // Check if password includes at least one number
        var numberRegex = /\d/;
        if (!numberRegex.test(password)) {
            alert('Password must include at least one number.');
            return;
        }

        // Check if password includes at least one capital letter
        var uppercaseRegex = /[A-Z]/;
        if (!uppercaseRegex.test(password)) {
            alert('Password must include at least one capital letter.');
            return;
        }

        // Check if password includes at least one special character
        var specialCharacterRegex = /[!@#$%^&*]/;
        if (!specialCharacterRegex.test(password)) {
            alert('Password must include at least one special character.');
            return;
        }

        // Password = confirmation password
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Mock signup function
        const mockSignup = async ({ email, username, password }) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (email === 'norhan@gmail.com' && password === 'Norhan123!' && username === 'Norhan Waleed') {
                        resolve({ data: { success: true, message: 'Signup successful!' } });
                    } else {
                        reject({ error: 'Signup failed' });
                    }
                }, 1000);
            });
        };

        try {
            const response = await mockSignup({ email, username, password });
            console.log(response);
        } catch (error) {
            console.log(error);
        }

        // Actual signup
        /*
        try {
            const response = await axios.post('/signup', {
                fullName: fullName,
                username: username,
                password: password
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }*/
    }

    return (
        <>
        <Navbar/>
        <div className="login_signup">
            <div className="login_signup_container">
                <div className="button_container">
                    <NavLink to="/Login" className="LoginButtonSP">Log in</NavLink>
                    <NavLink to="/Signup" className="SignupButtonSP">Create Account</NavLink>
                </div>
                <div>
                    <h1>Create your account</h1>
                    <form onSubmit={handleSignup}>
                        <div className="login_signup_fields">
                            <div className="input-container">
                                <FontAwesomeIcon icon={faUser} className="input-icon"/>
                                <input type="text" placeholder="Full Name" value={username} onChange={e => setUsername(e.target.value)} required></input>
                            </div>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faEnvelope} className="input-icon"/>
                                <input type="email" placeholder="E-mail Address" value={email} onChange={e => setEmail(e.target.value)} required></input>
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

                        <NavLink className="submit-form"><button type="submit" className="CreatAccountMainButton">Create Account</button></NavLink>

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

export default Signup
