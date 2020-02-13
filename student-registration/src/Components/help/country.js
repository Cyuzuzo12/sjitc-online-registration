import React, { Component } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
 
 
class Country extends Component {
  constructor (props) {
    super(props);
    this.state = { country: ''
  };
  }
 
  selectCountry (val) {
    this.setState({ country: val });
    this.props.val(val)
  }
 
  selectRegion (val) {
    this.setState({ region: val });
  }
 
  render () {
    const { country } = this.state;
    return (
      <div>
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)} className="form-control"/>
        
      </div>
    );
  }
}
export default Country;