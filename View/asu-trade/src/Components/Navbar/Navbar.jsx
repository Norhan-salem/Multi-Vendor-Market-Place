import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faMicrochip, faPencil, faLaptop, faHeadset, faHeart, faMobileScreenButton, faBagShopping, faCircleDollarToSlot, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import{faUser} from '@fortawesome/free-regular-svg-icons'
import logo from '../../Assets/logo.png'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Navbar = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await axios.get('/endpoint');
            setUser({ name: response.data.username, email: response.data.email });
          } catch (error) {
            console.error(error);
          }
        };
  
      fetchUserData();
    }, []);
    return (

        <div className="Navbar">
            <img src={logo} alt="Logo" className="logo"/>
                <nav className="NavLinks">
                    <NavLink to="/Signup">Home</NavLink>
                    <NavLink to="/Signup" className="Products">Products
                        <nav className="SubNav">
                        <NavLink to="/Signup"><FontAwesomeIcon icon={faMicrochip} className="SubNavIcon"/> Electronics</NavLink>
                        <NavLink to="/Signup"><FontAwesomeIcon icon={faPencil} className="SubNavIcon"/> Drawing</NavLink>
                        <NavLink to="/Signup"><FontAwesomeIcon icon={faLaptop} className="SubNavIcon"/> Laptops</NavLink>
                        <NavLink to="/Signup"><FontAwesomeIcon icon={faMobileScreenButton} className="SubNavIcon"/> Phones</NavLink>
                        <NavLink to="/Signup"><FontAwesomeIcon icon={faHeadset} className="SubNavIcon"/> Other</NavLink>
                        </nav>
                    </NavLink>
                    <NavLink>FAQ</NavLink>
                    <NavLink>About</NavLink>
                </nav>
            <div className="NavSearch">
            <NavLink to="/Search"><button className="SearchButton"><FontAwesomeIcon icon={faSearch} id="SearchNavIcon"/></button></NavLink>
            </div>
            <nav className="NavLinks">
                <NavLink to="/Signup" className="Profile">
                    <FontAwesomeIcon icon={faUser} id="ProfileNavIcon"/>
                    <nav className="SubNav">
                        <NavLink to="/Signup"><FontAwesomeIcon icon={faUser} className="SubNavIcon"/>{user.username || 'Username'}</NavLink>
                        <p>{user.email || 'Email'}</p>
                        <NavLink to="/Signup"><FontAwesomeIcon icon={faBagShopping} className="SubNavIcon"/>Orders</NavLink>
                        <NavLink to="/Signup"><FontAwesomeIcon icon={faHeart} className="SubNavIcon"/>Wish List</NavLink>
                        <NavLink to="/Signup"><FontAwesomeIcon icon={faCircleDollarToSlot} className="SubNavIcon"/>Payments</NavLink>
                        <NavLink to="/Signup"><FontAwesomeIcon icon={faArrowRightFromBracket} className="SubNavIcon"/>Logout</NavLink>
                    </nav>
                </NavLink>
            </nav>
        </div>
        
    )
}

export default Navbar;

