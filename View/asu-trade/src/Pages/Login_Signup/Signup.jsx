import React, { useState } from 'react';
import axios from 'axios';
import '../Login_Signup/Login_Signup.css';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faEnvelope,
	faKey,
	faEye,
	faEyeSlash,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../../Components/Navbar/Navbar';
import { handleSignup } from './HandleSignup';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const [username, setUsername] = useState('');
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [phonenumber, setPhonenumber] = useState();
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [isPassword1Visible, setIsPassword1Visible] = useState(false);
	const [isPassword2Visible, setIsPassword2Visible] = useState(false);
	const location = null;
	const neighborhood = null;
	const userType = 'customer';
	const navigate = useNavigate();

	return (
		<>
			<Navbar />
			<div className='login_signup'>
				<div className='login_signup_container'>
					<div className='button_container'>
						<NavLink to='/Login' className='LoginButtonSP'>
							Log in
						</NavLink>
						<NavLink to='/Signup' className='SignupButtonSP'>
							Create Account
						</NavLink>
					</div>
					<div>
						<h1>Create your account</h1>
						<form
							onSubmit={event => {
								handleSignup(
									event,
									firstname,
									lastname,
									phonenumber,
									password,
									confirmPassword,
									username,
									email
								);
								navigate('/Login');
							}}
						>
							<div className='login_signup_fields'>
								<div className='input-container'>
									<FontAwesomeIcon icon={faUser} className='input-icon' />
									<input
										type='text'
										placeholder='First Name'
										value={firstname}
										onChange={e => setFirstname(e.target.value)}
										required
									></input>
								</div>
								<div className='input-container'>
									<FontAwesomeIcon icon={faUser} className='input-icon' />
									<input
										type='text'
										placeholder='Last Name'
										value={lastname}
										onChange={e => setLastname(e.target.value)}
										required
									></input>
								</div>
								<div className='input-container'>
									<FontAwesomeIcon icon={faUser} className='input-icon' />
									<input
										type='text'
										placeholder='Username'
										value={username}
										onChange={e => setUsername(e.target.value)}
										required
									></input>
								</div>
								<div className='input-container'>
									<FontAwesomeIcon icon={faEnvelope} className='input-icon' />
									<input
										type='email'
										placeholder='E-mail Address'
										value={email}
										onChange={e => setEmail(e.target.value)}
										required
									></input>
								</div>
								<div className='input-container'>
									<FontAwesomeIcon icon={faPhone} className='input-icon' />
									<input
										type='tel'
										placeholder='Enter Phone Number'
										value={phonenumber}
										onChange={e => setPhonenumber(e.target.value)}
										required
									/>
								</div>
								<div className='input-container'>
									<FontAwesomeIcon icon={faKey} className='input-icon' />
									<input
										type={isPassword1Visible ? 'text' : 'password'}
										placeholder='Enter Your Password'
										value={password}
										onChange={e => setPassword(e.target.value)}
										required
									></input>
									<FontAwesomeIcon
										icon={isPassword1Visible ? faEye : faEyeSlash}
										className='eye-icon'
										onClick={() => setIsPassword1Visible(!isPassword1Visible)}
									/>
								</div>
								<div className='input-container'>
									<FontAwesomeIcon icon={faKey} className='input-icon' />
									<input
										type={isPassword2Visible ? 'text' : 'password'}
										placeholder='Confirm Your Password'
										value={confirmPassword}
										onChange={e => setConfirmPassword(e.target.value)}
										required
									></input>
									<FontAwesomeIcon
										icon={isPassword2Visible ? faEye : faEyeSlash}
										className='eye-icon'
										onClick={() => setIsPassword2Visible(!isPassword2Visible)}
									/>
								</div>
							</div>

							<div className='login_signup_CB'>
								<input
									type='checkbox'
									name='checkbox-agreetoterms'
									id='login_signup_checkbox'
									required
								/>
								<p>
									I agree to all{' '}
									<Link to='/TermsAndConditions'>Terms & Conditions</Link>
								</p>
							</div>

							<input
								type='submit'
								value={'Create Account'}
								className='CreatAccountMainButton'
							/>

							<div className='login_signup_alternative'>
								<hr />
								<p> or Sign up with </p>
								<hr />
							</div>

							<div className='login_signup_social'>
								<Link className='social_icon'>
									<FontAwesomeIcon icon={faGoogle} />
									<span>Google</span>
								</Link>
								<Link className='social_icon'>
									<FontAwesomeIcon icon={faFacebook} />
									<span>Facebook</span>
								</Link>
							</div>
							<p className='login_signup_login'>
								Already have an account? <Link to='/Login'>Log in here</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
