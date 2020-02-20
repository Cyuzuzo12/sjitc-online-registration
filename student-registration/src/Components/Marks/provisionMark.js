import React from 'react';
import {  Progress,Table } from 'reactstrap';
import avatar from "../../images/avatar.jpg";
import logo from '../../images/logo.png';

const ProvisionMarks =()=> { 
        return ( <div>
            <section>
            <div className="container"> <div className="row justify-content-center ">
              <div className="col-md-10  header-div m-2 ">
              <div className="row pt-5">
          <div className="col-6">
            <ul className="list-unstyled">
              <li className=" font font-weight-bold">SJITC ADMISSION OFFICE</li>
              <li className=" font font-weight-bold">Application form</li>
              <li className=" font ">Advanced Diploma & Diploma</li>
            </ul>
          </div>
          <div className="col-2 " >
                  <img src={logo} alt="logo"   height="90"
                width="100"/>
            </div>
          <div className="col-4 ">
          <ul className="list-unstyled">
          <li className=" font ">Address: KN 2AVE,Kigali,Rwanda</li>  
              <li className=" font ">Tel No: (+250)782306593</li> 
              <li className=" font ">Email: sjitc2010@yahoo.fr</li> 
              <li className=" font ">Website: sjitc.ac.rw</li> 
           </ul>
         </div>
          
            </div>
              </div>
            </div>
            <div className="row justify-content-center ">
              <div className="col-md-10 col-sm-12 reg-form">
                <h5 className="purple font-weight-bold p-4">SEMESTER I (2019/2020)</h5>
              <Table>
      <thead>
        <tr>
          <th>Course Code</th>
          <th>Course Name</th>
          <th>Credits</th>
          <th>ASS_1/10</th>
          <th>ASS_2/10</th>
          <th>Mid-Exam/30</th>
          <th>Final-Exam/40</th>
          <th>Total(%)</th>
          <th>Grade</th>
          <th>Decision</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PH101</td>
          <td>Fundamentals of Computers Networking</td>
          <td>12</td>
          <td>8</td>
          <td>8</td>
          <td>28</td>
          <td>38</td>
          <td>82</td>
          <td>A</td>
          <td><span className="text-success">Pass</span></td>
          
        </tr>
        <tr>
          <td>MA101</td>
          <td>Database Management System</td>
          <td>14</td>
          <td>5</td>
          <td>9</td>
          <td>23</td>
          <td>38</td>
          <td>75</td>
          <td>B</td>
          <td><span className="text-success">Pass</span></td>
          
        </tr>
        <tr>
          <td>PH101</td>
          <td>Fundamentals of Computers Networking</td>
          <td>12</td>
          <td>8</td>
          <td>8</td>
          <td>28</td>
          <td>38</td>
          <td>82</td>
          <td>A</td>
          <td><span className="text-success">Pass</span></td>
          
        </tr>
        <tr>
          <td>PH101</td>
          <td>Fundamentals of Computers Networking</td>
          <td>12</td>
          <td>8</td>
          <td>8</td>
          <td>28</td>
          <td>38</td>
          <td>82</td>
          <td>A</td>
          <td><span className="text-success">Pass</span></td>
          
        </tr>
 
      </tbody>
    </Table>
             <hr/>
             <h5 className="purple font-weight-bold p-4">SEMESTER II (2019/2020)</h5>
              <Table>
      <thead>
        <tr>
          <th>Course Code</th>
          <th>Course Name</th>
          <th>Credits</th>
          <th>ASS_1/10</th>
          <th>ASS_2/10</th>
          <th>Mid-Exam/30</th>
          <th>Final-Exam/40</th>
          <th>Total(%)</th>
          <th>Grade</th>
          <th>Decision</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PH101</td>
          <td>Fundamentals of Computers Networking</td>
          <td>12</td>
          <td>8</td>
          <td>8</td>
          <td>28</td>
          <td>38</td>
          <td>82</td>
          <td>A</td>
          <td><span className="text-success">Pass</span></td>
          
        </tr>
        <tr>
          <td>MA101</td>
          <td>Database Management System</td>
          <td>14</td>
          <td>5</td>
          <td>9</td>
          <td>23</td>
          <td>38</td>
          <td>75</td>
          <td>B</td>
          <td><span className="text-success">Pass</span></td>
          
        </tr>
        <tr>
          <td>PH101</td>
          <td>Fundamentals of Computers Networking</td>
          <td>12</td>
          <td>8</td>
          <td>8</td>
          <td>28</td>
          <td>38</td>
          <td>82</td>
          <td>A</td>
          <td><span className="text-success">Pass</span></td>
          
        </tr>
        <tr>
          <td>PH101</td>
          <td>Fundamentals of Computers Networking</td>
          <td>12</td>
          <td>8</td>
          <td>8</td>
          <td>28</td>
          <td>38</td>
          <td>82</td>
          <td>A</td>
          <td><span className="text-success">Pass</span></td>
          
        </tr>
 
      </tbody>
    </Table>
              </div>
            </div>
            </div>
            </section>
        </div> );
    }

 
export default ProvisionMarks;