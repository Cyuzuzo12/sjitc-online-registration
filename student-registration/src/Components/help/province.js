import React from 'react';

class Province extends React.Component {
    onSelect = (event) => {
      this.props.onSelect(parseInt(event.target.value));
      // this.props.province= event.target.value;
    }
    render() {
      return (
        <div>
          <label>Province: </label>
          <select onChange={this.onSelect} className="form-control  mb-2">
            <option>Select province</option>
            {
              this.props.data.map(prov => (
                <option
                  key={prov.id}
                  value={prov.id}
                  selected={this.props.selectedId === prov.id}>
                  {prov.name}
                </option>
              ))
            }
          </select>
        </div>
      );
    }
  }
  export default Province;