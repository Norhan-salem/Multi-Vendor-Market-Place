import React from 'react';
import '../ListProduct/ListProduct.css'
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';


const ListProduct = () => {

    return (
        <>
        <div className="list-product">
            <form /*onSubmit={handleListProduct}*/>
                <h2 className='ASUT'>ASU-T</h2>
                <div className='category'>
                    <label>Select Category</label>
                    <select name="category">
                        <option value="">Select a category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Drawing Tools">Drawing Tools</option>
                        <option value="Laptops">Laptops</option>
                        <option value="Phones">Phones</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className='product-details'>
                <label>Item Title</label>
                    <input type="text" name="title" placeholder="Title"/>
                    <label>Item Description</label>
                    <textarea name="description" placeholder="Include the item's condition, features and reason for selling"/>
                    <label>Price</label>
                    <input type="number" name="price" placeholder="$$$" />
                    <div className='image-input'>
                    <input type="file"/>
                    <FontAwesomeIcon icon={faImage} className="file-icon"/>
                    </div>
                </div>
                <div className='buttons'>
                    <input value={"Cancel"} id="cancel-button" type="reset"/>
                    <input value={"Sell"} id="sell-button" type="submit"/>
                </div>
                    
            </form>
        </div>
    </>
    )

    }
export default ListProduct