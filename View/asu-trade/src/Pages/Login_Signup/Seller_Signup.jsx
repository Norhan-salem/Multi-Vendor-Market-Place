import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Login_Signup/Login_Signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../Components/Navbar/Navbar';
import { handleSellerSignup } from "./HandleSignup";


const Seller_Signup = () => {

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');


    return (
        <>
        <Navbar/>
        <div className="login_signup">
            <div className="vendor-container">
                <div className="vendor-title">
                    <p>Become a Vendor</p>
                </div>
                <div>
                    <h1>Add selling information</h1>
                    <form onSubmit={(event) => {handleSellerSignup(event, city, address)}}>
                        <div className="login_signup_fields">
                            <div className="input-container">
                                <FontAwesomeIcon icon={faMagnifyingGlassLocation} className="vendor-icon"/>
                                <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} required></input>
                            </div>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faLocationDot} className="vendor-icon"/>
                                <input type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} required></input>
                            </div>
                        </div>

                        <div className="login_signup_CB">
                            <input type="checkbox" name="checkbox-agreetoterms" id="login_signup_checkbox" required/>
                            <p>I agree to all <Link to='/TermsAndConditions'>Terms & Conditions</Link></p>
                        </div>

                        <input type="submit" value={"Register"} className="CreatAccountMainButton"/>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Seller_Signup;