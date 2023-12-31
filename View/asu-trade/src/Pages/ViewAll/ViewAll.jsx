import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import PriceFilter from "../../Components/PriceFilter/PriceFilter";
import LocationFilter from "../../Components/LocationFilter/LocationFilter";
import FilterCategoryBar from "../../Components/FilterCategoryBar/FilterCategoryBar";
import arduino from "../../Assets/Electronics.png";
import "../../Pages/ViewAll/ViewAll.css"; 
import axios from "axios";

const Product = ({ product }) => (
      <div className="viewproduct-card">
      <img
        src={product.image}
        alt={product.title}
        className="viewproduct-image"
      />
      <div className="viewproduct-details">
        <h2>{product.price}$</h2>
        <p>{product.title}</p>
        <p>
          Sold by: {product.seller}, {product.address}, {product.city}
        </p>
      </div>
      </div>
);

const ViewAll = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [locations, setLocations] = useState([
    { id: 1, name: 'Cairo', isChecked: false },
    { id: 2, name: 'New Cairo', isChecked: false },
    { id: 3, name: 'Giza', isChecked: false },
    { id: 4, name: 'Helwan', isChecked: false },
  ]);
    const [priceRange, setPriceRange] = useState({ minPrice: 0, maxPrice: 5000 });
    const [products, setProducts] = useState([
      {
        id: 11,
        image: arduino,
        price: 1000,
        title: "Product 1",
        seller: "Seller 1",
        address: "Giza",
        city: "City 1",
      },
      {
        id: 1,
        image: arduino,
        price: 1500,
        title: "Product 1",
        seller: "Seller 1",
        address: "Helwan",
        city: "City 1",
      },
      {
        id: 2,
        image: arduino,
        price: 10,
        title: "Product 2",
        seller: "Seller 2",
        address: "New Cairo",
        city: "City 2",
      },
      {
        id: 3,
        image: arduino,
        price: 300,
        title: "Product 3",
        seller: "Seller 3",
        address: "New Cairo",
        city: "City 3",
      },
      {
        id: 4,
        image: arduino,
        price: 200,
        title: "Product 4",
        seller: "Seller 4",
        address: "Cairo",
        city: "City 4",
      },
    ]);

    useEffect(() => {
      axios.get('/product')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }, []);

  // This function is passed to the LocationFilter component and is called when a checkbox is checked or unchecked.
  const handleCheck = (id) => {
    setLocations(prevLocations =>
      prevLocations.map(location =>
        location.id === id ? { ...location, isChecked: !location.isChecked } : location
      )
    );
  };

  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  // Filter the products based on the selected locations.
  const filteredProducts = products.filter(product =>
    locations.every(location => !location.isChecked) 
    || locations.some(location => location.name === product.address && location.isChecked)
  ).filter(product =>
    product.price >= priceRange.minPrice && product.price <= priceRange.maxPrice
  );


  return (
    <>
      <Navbar />
      <div className="ViewAll-page">
        <FilterCategoryBar setSelectedCategory={setSelectedCategory} />
        <div className="viewproduct-container">
          <div>
            <div className="viewproduct-layout">
              <br />
              <label>Filters</label>
              <input
                type="reset"
                value={"Clear"}
                id="clearfilter-button"
                onClick={() => setSelectedCategory(null)}
              ></input>
            </div>
            {/* Pass the locations and handleCheck to the LocationFilter component */}
            <LocationFilter locations={locations} onCheck={handleCheck} />
            <PriceFilter priceRange={priceRange} onPriceChange={handlePriceChange} />
          </div>
          <div className="product-section">
            {/* Render the filtered products */}
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewAll;

  





