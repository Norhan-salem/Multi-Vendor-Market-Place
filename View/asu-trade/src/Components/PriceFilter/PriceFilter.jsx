import React from 'react';
import '../../Components/PriceFilter/PriceFilter.css';

class PriceFilter extends React.Component {
  state = {
    minPrice: 0,
    maxPrice: 5000,
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.props.onPriceChange({
      ...this.props.priceRange,
      [name]: value,
    });
  };

  render() {
    return (
      <div className='filter-price'>
        <label>Price</label>
        <div className='price-input-container'>
          <input
            type='number'
            name='minPrice'
            value={this.props.priceRange.minPrice}
            onChange={this.handleInputChange}
          />
          <input
            type='number'
            name='maxPrice'
            value={this.props.priceRange.maxPrice}
            onChange={this.handleInputChange}
          />
        </div>
        <input
          type='range'
          name='minPrice'
          min='0'
          max={this.state.maxPrice}
          value={this.props.priceRange.minPrice}
          onChange={this.handleInputChange}
        />
        <input
          type='range'
          name='maxPrice'
          min={this.state.minPrice}
          max='5000'
          value={this.props.priceRange.maxPrice}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
  
}

export default PriceFilter;



 