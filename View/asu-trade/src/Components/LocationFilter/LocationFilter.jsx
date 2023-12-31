import React from "react";

class LocationFilter extends React.Component {
  state = {
    locations: [
      { id: 1, name: 'Cairo', isChecked: false },
      { id: 2, name: 'New Cairo', isChecked: false },
      { id: 3, name: 'Giza', isChecked: false },
      { id: 4, name: 'Helwan', isChecked: false },
    ]
  };

  handleCheck = (id) => {
    this.setState(prevState => ({
      locations: prevState.locations.map(location =>
        location.id === id ? { ...location, isChecked: !location.isChecked } : location
      )
    }));
  };

  render() {
    return (
    <div>
    <label>Location</label>
      <div>
        {this.state.locations.map(location => (
          <div key={location.id}>
            <input
              type='checkbox'
              checked={location.isChecked}
              onChange={() => this.handleCheck(location.id)}
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
