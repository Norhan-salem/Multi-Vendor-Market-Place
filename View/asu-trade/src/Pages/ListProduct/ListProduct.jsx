import React, { useRef, useState } from 'react';
import '../ListProduct/ListProduct.css';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '../../Context/UserContext';
import NotLoggedIn from '../../Components/NotLoggedIn/NotLoggedIn';

const ListProduct = () => {
	const fileInput = useRef();
	const [buttonText, setButtonText] = useState('Upload');
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState();
	const [quantity, setQuantity] = useState();
	const [image, setImage] = useState();
	const { user } = useUser();

	const handleButtonClick = () => {
		fileInput.current.click();
	};

	const handleFileChange = e => {
		setButtonText(e.target.files[0].name);
		setImage(e.target.files[0]);
	};

	const handleListProduct = async event => {
		event.preventDefault();

		// Actual login
		try {
			const formData = new FormData();
			formData.append('name', name);
			formData.append('description', description);
			formData.append('price', price);
			formData.append('quantity', quantity);
			formData.append('sellerUsername', user.username);
			formData.append('image', image);
			const response = await axios.post(
				'http://localhost:8080/product',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			);

			// const response = await axios.post('http://localhost:8080/product', {
			// 	name: name,
			// 	description: description,
			// 	price: price,
			// 	quantity: quantity,
			// 	sellerUsername: user.username,
			// 	image: image,
			// });

			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	return user ? (
		<>
			<Navbar />
			<div className='list-product'>
				<form onSubmit={handleListProduct}>
					<h2 className='ASUT'>ASU-T</h2>
					<div className='select-category'>
						<label>Select Category</label>
						<select name='category'>
							<option value=''>Select a category</option>
							<option value='Electronics'>Electronics</option>
							<option value='Drawing Tools'>Drawing Tools</option>
							<option value='Laptops'>Laptops</option>
							<option value='Phones'>Phones</option>
							<option value='Other'>Other</option>
						</select>
					</div>
					<div className='addproduct-details'>
						<label>Item Title</label>
						<input
							type='text'
							name='title'
							placeholder='Title'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
						<label>Item Description</label>
						<textarea
							name='description'
							placeholder="Include the item's condition, features and reason for selling"
							value={description}
							onChange={e => setDescription(e.target.value)}
						/>
						<label>Price</label>
						<input
							type='number'
							name='price'
							placeholder='$$$'
							value={price}
							onChange={e => setPrice(e.target.value)}
						/>
						<label>Quantity</label>
						<input
							type='number'
							name='Quantity'
							placeholder='Quantity'
							value={quantity}
							onChange={e => setQuantity(e.target.value)}
						/>
					</div>
					<div className='image-input'>
						<input
							type='file'
							ref={fileInput}
							onChange={handleFileChange}
							style={{ display: 'none' }}
						/>
						<button type='button' onClick={handleButtonClick}>
							{buttonText}
						</button>
						<FontAwesomeIcon icon={faImage} className='file-icon' />
					</div>
					<div className='lp-buttons'>
						<input value={'Cancel'} id='cancel-button' type='reset' />
						<input value={'Sell'} id='sell-button' type='submit' />
					</div>
				</form>
			</div>
			<Footer />
		</>
	) : (
		<>
			<Navbar />
			<div style={{ height: '400px' }}>
				<NotLoggedIn />
			</div>
			<Footer />
		</>
	);
};

export default ListProduct;
