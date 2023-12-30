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
        </>
    )
}

export default Seller_Signup;