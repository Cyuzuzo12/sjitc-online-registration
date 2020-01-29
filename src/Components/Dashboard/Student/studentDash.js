import React, { Component } from "react";
import Calendar from 'react-calendar';
import StudentDetForm from "./studentDetForm";
import avatar from "../../../images/avatar.jpg";
class Student extends Component {
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
          <div className="row p-4">
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
    <p className="p-4"><i className="fa fa-money fa-lg text-info"/><br/>Earnings<span>4670$</span></p>
    </div>
</div>
</div>
</div>
</div>
            <div className="row margin">
              <div className="col-md-6 ">
              
              <div className="bg-white p-4">
              <h6>Student Details</h6>
                  <hr/>
                 <div className="row">
                 <div className="col-4 ">
                  <img src={avatar} alt=""/>
                  <div className="bg-light">
                    <i className="fa fa-print m-2"/>
                    <i className="fa fa-edit m-2"/>
                    <i className="fa fa-print m-2"/>
                  </div>
                  </div>
                  <div className="col-8"><StudentDetForm/></div>
                
                 </div>
              </div>
              </div>
              <div className="col-md-6 ">
              <div className="row ">
<div className="col-md-12 ">
<div className="options p-4 ">
    <h6>Exam Result</h6>
                  <div className="row ">
<div className="col ">
         <table  className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Reg.No</th>
          <th>Photo</th>
          <th>Name</th>
          <th>name</th>
          <th>name</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td ><img src={avatar} alt="student" className="rounded-circle" width="30" height="30"/></td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          </tr>
          <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td ><img src={avatar} alt="student" className="rounded-circle" width="30" height="30"/></td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          </tr>
          <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td ><img src={avatar} alt="student" className="rounded-circle" width="30" height="30"/></td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          </tr>
      
      </tbody>
    </table>
    </div>  </div>
     </div>  </div>
    <div className="col-md-12 ">
<div className="options mt-2 p-4">
<h6>Recent Activities</h6>
                  <hr/>
<p className=" text-muted">Sed ut perspiciatis unde omnis  ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae  </p>
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

export default Student;
