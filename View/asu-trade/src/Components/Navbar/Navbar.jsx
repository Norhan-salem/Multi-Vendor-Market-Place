import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSearch,
	faMicrochip,
	faPencil,
	faLaptop,
	faHeadset,
	faHeart,
	faMobileScreenButton,
	faBagShopping,
	faCircleDollarToSlot,
	faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import logo from '../../Assets/logo.png';
import { useState, useEffect } from 'react';
import '../../Pages/ViewAll/ViewAll.jsx';
import { useUser } from '../../Context/UserContext';

const Navbar = () => {
	const { user, setUser } = useUser();
	return (
		<div className='Navbar'>
			<img src={logo} alt='Logo' className='logo' />
			<nav className='NavLinks'>
				<NavLink to='/Home'>Home</NavLink>
				<NavLink to='/ViewAll' className='Products'>
					Products
					<nav className='SubNav'>
						<NavLink to='/Signup'>
							<FontAwesomeIcon icon={faMicrochip} className='SubNavIcon' />{' '}
							Electronics
						</NavLink>
						<NavLink to='/Signup'>
							<FontAwesomeIcon icon={faPencil} className='SubNavIcon' /> Drawing
						</NavLink>
						<NavLink to='/Signup'>
							<FontAwesomeIcon icon={faLaptop} className='SubNavIcon' /> Laptops
						</NavLink>
						<NavLink to='/Signup'>
							<FontAwesomeIcon
								icon={faMobileScreenButton}
								className='SubNavIcon'
							/>{' '}
							Phones
						</NavLink>
						<NavLink to='/Signup'>
							<FontAwesomeIcon icon={faHeadset} className='SubNavIcon' /> Other
						</NavLink>
					</nav>
				</NavLink>
				<NavLink>FAQ</NavLink>
				<NavLink>About</NavLink>
			</nav>
			<div style={{ display: 'flex' }}>
				<div className='NavSearch'>
					<NavLink to='/Search'>
						<button className='SearchButton'>
							<FontAwesomeIcon icon={faSearch} id='SearchNavIcon' />
						</button>
					</NavLink>
				</div>
				<nav className='NavLinks'>
					<NavLink to='/Signup' className='Profile'>
						<FontAwesomeIcon icon={faUser} id='ProfileNavIcon' />
						<nav className='SubNav'>
							<NavLink to='/Profile'>
								<FontAwesomeIcon icon={faUser} className='SubNavIcon' />
								{user !== null ? user.username : ''}
							</NavLink>
							<NavLink to='/Wishlist'>
								<FontAwesomeIcon icon={faHeart} className='SubNavIcon' />
								Wishlist
							</NavLink>
							<NavLink
								to='/Signup'
								onClick={() => {
									setUser(null);
								}}
							>
								<FontAwesomeIcon
									icon={faArrowRightFromBracket}
									className='SubNavIcon'
								/>
								Logout
							</NavLink>
						</nav>
					</NavLink>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
