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

    this.setState({
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
            value={this.state.minPrice}
            onChange={this.handleInputChange}
          />
          <input
            type='number'
            name='maxPrice'
            value={this.state.maxPrice}
            onChange={this.handleInputChange}
          />
        </div>
        <input
          type='range'
          name='minPrice'
          min='0'
          max={this.state.maxPrice}
          value={this.state.minPrice}
          onChange={this.handleInputChange}
        />
        <input
          type='range'
          name='maxPrice'
          min={this.state.minPrice}
          max='5000'
          value={this.state.maxPrice}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
  
}

export default PriceFilter;
