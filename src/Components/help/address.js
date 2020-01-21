import React from 'react';
import {data } from "./data";
import Province from "./province";
import City from './district';

class Address extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        provinces: data.provinces,
        provinceId: null,
        cities: data.cities,
        cityId: null
      };
    }
  
    onSelectProvince = (provId) => {
      const selCities = data.cities.filter(c => c.provinceId === provId);
      this.setState({
        provinceId: provId,
        cities: selCities
      });
    }
  
    onSelectCity = (city) => {
      this.setState({
        cityId: city.id
      });
    }
  
    render() {
      return (
        <div >
          <Province
            data={this.state.provinces}
            selectedId={this.state.provinceId}
            onSelect={this.onSelectProvince}
            />
          <City
            data={this.state.cities}
            selectedId={this.state.cityId}
            onSelect={this.onSelectCity}
            />
        </div>
      );
    }
  }
  export default Address ;