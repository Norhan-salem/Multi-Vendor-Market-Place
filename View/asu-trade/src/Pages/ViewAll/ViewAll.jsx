import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import PriceFilter from '../../Components/PriceFilter/PriceFilter';
import LocationFilter from '../../Components/LocationFilter/LocationFilter';
import FilterCategoryBar from '../../Components/FilterCategoryBar/FilterCategoryBar';
import arduino from '../../Assets/Electronics.png';
import '../../Pages/ViewAll/ViewAll.css'

const Product = ({ product }) => (
  <div>
    <img src={product.image} alt={product.title} />
    <h2>{product.price}</h2>
    <p>{product.title}</p>
    <p>Sold by: {product.seller}, {product.address}, {product.city}</p>
  </div>
);

const ViewAll = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([
    {
      id: 1,
      image: arduino,
      price: 100,
      title: 'Product 1',
      seller: 'Seller 1',
      address: 'Location 1',
      city: 'City 1',
    },
    {
        id: 1,
        image: arduino,
        price: 100,
        title: 'Product 1',
        seller: 'Seller 1',
        address: 'Location 1',
        city: 'City 1',
      },
      {
        id: 2,
        image: arduino,
        price: 100,
        title: 'Product 2',
        seller: 'Seller 2',
        address: 'Location 2',
        city: 'City 2',
      },
      {
        id: 3,
        image: arduino,
        price: 100,
        title: 'Product 3',
        seller: 'Seller 3',
        address: 'Location 3',
        city: 'City 3',
      },
      {
        id: 4,
        image: arduino,
        price: 100,
        title: 'Product 4',
        seller: 'Seller 4',
        address: 'Location 4',
        city: 'City 4',
      },
    
  ]);

  const filteredProducts = products.filter(product => !selectedCategory || product.category === selectedCategory);

  return (
    <>
      <Navbar/>
      <div className='ViewAll-page'>
      <FilterCategoryBar setSelectedCategory={setSelectedCategory} />
      <div>
      <br/>
        <label>Filters</label>
        <input type='reset' value={"Clear"} id='clearfilter-button' onClick={() => setSelectedCategory(null)}></input>
      </div>
      <br/>
      <LocationFilter/><br/>
      <PriceFilter />
      <div>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default ViewAll;
