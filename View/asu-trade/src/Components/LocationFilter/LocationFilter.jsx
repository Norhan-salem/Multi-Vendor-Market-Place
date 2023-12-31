import React from "react";
import '../../Components/LocationFilter/LocationFilter.css'

class LocationFilter extends React.Component {
  render() {
    return (
      <div className="location-filter">
        <label>Location</label>
        <div>

          {this.props.locations.map(location => (
            <div key={location.id}>
              <input
                type='checkbox'
                checked={location.isChecked}
                onChange={() => this.props.onCheck(location.id)}
              />
              <label>{location.name}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default LocationFilter;
