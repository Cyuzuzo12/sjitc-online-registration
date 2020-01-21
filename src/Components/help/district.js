import React from 'react';
class District extends React.Component {
    
    onSelect = (event) => {
      this.props.onSelect(parseInt(event.target.value));
    }
    render() {
      return (
        <div>
          <label>District: </label>
          <select onClick={this.onSelect} className="form-control  ">
            <option>Select city</option>
            {
              this.props.data.map(city => (
                  <option
                    key={city.id}
                    value={city.id}
                    selected={this.props.selectedId === city.id}>
                    {city.name}
                  </option>
              ))
            }
          </select>
        </div>
      );
    }
  }

  export default District;