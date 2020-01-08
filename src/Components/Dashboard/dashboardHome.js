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
    const labels = ["collection", "fees", "expenses"];
    const data = [324, 45, 672];
    const options = { fillColor: "#cf8e34", strokeColor: "#fafafa" };
    return (
      <div>
        <section>
          <div className="container ">
          <div className="row margin">
          <div className="col-md-6 ">
<div className="row">
<div className="col-md-6">
    <div className="options">
    <p className="p-4"><i className="fa fa-graduation-cap fa-lg text-success"/><br/>Students<span>50000</span></p>
    </div>
</div>
<div className="col-md-6">
<div className="options">
    <p className="p-4"><i className="fa fa-user fa-lg text-primary"/><br/>Teachers<span>3800</span></p>
    </div>
</div>
</div>
</div>
<div className="col-md-6 ">
<div className="row">
<div className="col-md-6">
<div className="options">
    <p className="p-4"><i className="fa fa-users fa-lg text-warning"/><br/>Students<span>3400</span></p>
    </div>
</div>
<div className="col-md-6">
<div className="options">
    <p className="p-4"><i className="fa fa-money fa-lg text-info"/><br/>Earnings<span>467000$</span></p>
    </div>
</div>
</div>
</div>
</div>
            <div className="row margin">
              <div className="col-md-6 ">
              
              <div className="bg-white p-4">
              <h6>Fees Collection & Expenses</h6>
                  <hr/>
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
    <p className="p-4 text-white"><i className="fa fa-twitter fa-lg text-white"/><br/>Like us<span>40800</span></p>
    </div>
</div>
<div className="col-md-6">
<div className="options twitter">
<p className="p-4 text-white"><i className="fa fa-facebook fa-lg text-white"/><br/>Follow us<span>9800</span></p>
    </div>
</div>
</div>
<div className="row margin">
<div className="col-md-6">
    <div className="options google">
    <p className="p-4 text-white"><i className="fa fa-google-plus fa-lg text-white"/><br/>Follow us<span>500</span></p>
    </div>
</div>
<div className="col-md-6">
<div className="options linkedin">
<p className="p-4 text-white"><i className="fa fa-linkedin fa-lg text-white"/><br/>Follow us<span>23400</span></p>
    </div>
</div>
</div>
              </div>
            </div>
            <div className="row margin">
              <div className="col-md-6 ">
              <div className="options p-4">
              <h6>Event Calendar</h6>
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
    <div className="options p-4 ">
    <h6>Notice Board</h6>
                  <hr/>
    <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae  </p>
    </div>
</div>
<div className="col-md-6">
<div className="options p-4">
<h6>Recent Activities</h6>
                  <hr/>
<p className=" text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae  </p>
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
