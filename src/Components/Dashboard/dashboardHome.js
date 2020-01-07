import React, { Component } from "react";
import Histogram from "react-chart-histogram";
import Calendar from 'react-calendar';
import { FormGroup, Label, Input, Col, Form, Button, Row } from "reactstrap";
import { Link } from "react-router-dom";

class DashboardHome extends Component {
  state = {
    date: new Date(),
    advancedLevel: false,
    advancedDiploma: false
  };
  handleCheckAdvancedLevel = () => {
    this.setState({ advancedLevel: !this.state.advancedLevel });
  };
  handleCheckAdvancedDiploma = () => {
    this.setState({ advancedDiploma: !this.state.advancedDiploma });
  };
  onChange = date => this.setState({ date })
  render() {
    const labels = ["2016", "2017", "2018"];
    const data = [324, 45, 672];
    const options = { fillColor: "#64a7df", strokeColor: "#0000FF" };
    return (
      <div>
        <section>
          <div className="container ">
          <div className="row margin">
          <div className="col-md-6 ">
<div className="row">
<div className="col-md-6">
    <div className="options">
    <p className="p-4"><i className="fa fa-graduation-cap fa-lg text-success"/><br/>Student<span>50000</span></p>
    </div>
</div>
<div className="col-md-6">
<div className="options">
    <p className="p-4"><i className="fa fa-user-friends fa-lg text-primary"/><br/>Student<span>50000</span></p>
    </div>
</div>
</div>
</div>
<div className="col-md-6 ">
<div className="row">
<div className="col-md-6">
<div className="options">
    <p className="p-4"><i className="fa fa-users fa-lg text-warning"/><br/>Student<span>50000</span></p>
    </div>
</div>
<div className="col-md-6">
<div className="options">
    <p className="p-4"><i className="fa fa-users fa-lg text-info"/><br/>Student<span>50000</span></p>
    </div>
</div>
</div>
</div>
</div>
            <div className="row margin">
              <div className="col-md-6 ">
              <div className="bg-white p-4">
                <Histogram
                  xLabels={labels}
                  yValues={data}
                  width="400"
                  height="200"
                  options={options}
                />
              </div>
              </div>
              <div className="col-md-6 ">
              <div className="row ">
<div className="col-md-6">
    <div className="options facebook">
    <p className="p-4 text-white"><i className="fa fa-twitter fa-lg text-white"/><br/>Student<span>50000</span></p>
    </div>
</div>
<div className="col-md-6">
<div className="options twitter">
<p className="p-4 text-white"><i className="fa fa-facebook fa-lg text-white"/><br/>Student<span>50000</span></p>
    </div>
</div>
</div>
<div className="row margin">
<div className="col-md-6">
    <div className="options google">
    <p className="p-4 text-white"><i className="fa fa-google-plus fa-lg text-white"/><br/>Student<span>50000</span></p>
    </div>
</div>
<div className="col-md-6">
<div className="options linkedin">
<p className="p-4 text-white"><i className="fa fa-linkedin fa-lg text-white"/><br/>Student<span>50000</span></p>
    </div>
</div>
</div>
              </div>
            </div>
            <div className="row margin">
              <div className="col-md-6 ">
              <div className="options">
              <h6>Event</h6>
                  <hr/>
              <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
              </div>
              </div>
              <div className="col-md-6 ">
              <div className="row ">
<div className="col-md-6">
    <div className="options">
    <p>dfghjklkjhgfdghjkl</p>
    </div>
</div>
<div className="col-md-6">
<div className="options">
    <p>dfghjklkjhgfdghjkl</p>
    </div>
</div>
</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default DashboardHome;
