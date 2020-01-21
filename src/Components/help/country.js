import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
 
 
class Country extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
  }
 
  selectCountry (val) {
    this.setState({ country: val });
  }
 
  selectRegion (val) {
    this.setState({ region: val });
  }
 
  render () {
    const { country, region } = this.state;
    return (
      <div>
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)} className="form-control"/>
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} className="form-control"/>
      </div>
    );
  }
}
export default Country;