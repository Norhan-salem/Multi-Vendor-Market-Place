import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrochip,
  faPencil,
  faLaptop,
  faHeadset,
  faMobileScreenButton
} from "@fortawesome/free-solid-svg-icons";
import './FilterCategoryBar.css';

const FilterCategoryBar = ({ setSelectedCategory }) => (
  <div className='category-bar'>
    <div className="icon-container" onClick={() => setSelectedCategory('Electronics')}>
      <FontAwesomeIcon icon={faMicrochip} className="ViewAll-icons"/>
      <p>Electronics</p>
    </div>
    <div className="icon-container" onClick={() => setSelectedCategory('Drawing')}>
      <FontAwesomeIcon icon={faPencil} className="ViewAll-icons"/>
      <p>Drawing</p>
    </div>
    <div className="icon-container" onClick={() => setSelectedCategory('Laptops')}>
      <FontAwesomeIcon icon={faLaptop} className="ViewAll-icons"/>
      <p>Laptops</p>
    </div>
    <div className="icon-container" onClick={() => setSelectedCategory('Phones')}>
      <FontAwesomeIcon icon={faMobileScreenButton} className="ViewAll-icons"/>
      <p>Phones</p>
    </div>
    <div className="icon-container" onClick={() => setSelectedCategory('Other')}>
      <FontAwesomeIcon icon={faHeadset} className="ViewAll-icons"/>
      <p>Other</p>
    </div>
  </div>
);

export default FilterCategoryBar;
