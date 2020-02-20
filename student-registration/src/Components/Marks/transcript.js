import React from 'react';
import {  Button,Table } from 'reactstrap';
import avatar from "../../images/avatar.jpg";
import logo from '../../images/logo.png';

const Transcript =()=> { 
        return ( <div>
            <section>
            <div className="marks">
            <div className="row">
                <div className="col">
                  <form>
                      <div className="form-row ">
                          <div className="col-3"><label>Registration No</label></div>
                          <div className="col-7"><p className="font-weight-bold text-muted">1234567898765</p></div>
                      </div>
                      <div className="form-row ">
                          <div className="col-3"><label>Department</label></div>
                          <div className="col-7"><p className="font-weight-bold text-muted">INFORMATION TECHNOLOGY AND COMMUNICATION</p></div>
                      </div>
                      <div className="form-row ">
                          <div className="col-3"><label>Program</label></div>
                          <div className="col-7"><p className="font-weight-bold text-muted">ADVANCED DIPLOMA IN INFORMATION TECHNOLOGY</p></div>
                      </div>
                  </form>
                  <hr/>
                </div>
            </div> 
            
            <div className="row  justify-content-center">
                <div className="col">
                    <h1 className=" text-center text-muted mb-4">OFFICIAL ACADEMIC TRANSCRIPT</h1>
                </div>
            </div>
            <form>
            <div className="row  border-left justify-content-center">
            <h4 className="font-weight-bold purple">YEAR 1 (2018/2029)</h4>
              <div className="col  ">

              
              <Table>
                  
      <thead>
          <tr>SEMESTER I</tr>
        <tr>
          <th>COURSE CODE</th>
          <th>COURSE NAME</th>
          <th>CREDIT</th>
          <th>MARKS (%)</th>
          <th>GRADE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PH101</td>
          <td>Fundamentals of Computers Networking</td>
          <td>12</td>
          <td>98</td>
          <td><span className="text-success">A</span></td>
          
        </tr>
        <tr>
          <td>MA101</td>
          <td>Database Management System</td>
          <td>14</td>
          <td>75</td>
          <td><span className="text-success">B</span></td>
          
        </tr>
        <tr>
          <td>PH101</td>
          <td>Fundamentals of Computers Networking</td>
          <td>12</td>
          <td>68</td>
          <td><span className="text-success">C</span></td>
          
        </tr>
 
      </tbody>
    </Table>
              </div>
              <div className="col border-left">

             
              <Table>
      <thead>
      <tr>SEMESTER II</tr>
        <tr>
        <th>COURSE CODE</th>
          <th>COURSE NAME</th>
          <th>CREDIT</th>
          <th>MARKS (%)</th>
          <th>GRADE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PH101</td>
          <td>Fundamentals of Computers Networking</td>
          <td>12</td>
          <td>68</td>
          <td><span className="text-success">C</span></td>
          
        </tr>
        <tr>
          <td>MA101</td>
          <td>Database Management System</td>
          <td>14</td>
          <td>65</td>
          <td><span className="text-success">C</span></td>
          
        </tr>
        <tr>
          <td>PH101</td>
          <td>Fundamentals of Computers Networking</td>
          <td>12</td>
          <td>58</td>
          <td><span className="text-success">C</span></td>
          
        </tr>
 
      </tbody>
    </Table>
              </div>
            
            </div>
            <div className="row mt-4">
              <div className="col">  
              <Button type="submit" className="offset-10" color="success">
                    <span><i className="fa fa-print fa-lg m-2"/>Print(pdf)</span>
                  </Button></div>
          </div>
           </form>
           <hr/>
           <form>
            <div className="row bg-white border-left justify-content-center">
            <h4 className="font-weight-bold purple">YEAR 3 (2020/2021)</h4>
              <div className="col  ">

              
              <Table>
                  
      <thead>
          <tr>SEMESTER I</tr>
        <tr>
          <th>COURSE CODE</th>
          <th>COURSE NAME</th>
          <th>CREDIT</th>
          <th>MARKS (%)</th>
          <th>GRADE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PH101</td>
          <td>Fundamentals of Computers Networking</td>
          <td>12</td>
          <td>98</td>
          <td><span className="text-success">A</span></td>
          
        </tr>
        <tr>
          <td>MA101</td>
          <td>Database Management System</td>
          <td>14</td>
          <td>85</td>
          <td><span className="text-success">B</span></td>
          
        </tr>
        <tr>
          <td>PH101</td>
          <td>Fundamentals of Computers Networking</td>
          <td>12</td>
          <td>58</td>
          <td><span className="text-success">C</span></td>
          
        </tr>
 
      </tbody>
    </Table>
              </div>
              <div className="col border-left">

             
              <Table>
      <thead>
      <tr>SEMESTER II</tr>
        <tr>
        <th>COURSE CODE</th>
          <th>COURSE NAME</th>
          <th>CREDIT</th>
          <th>MARKS (%)</th>
          <th>GRADE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PH101</td>
          <td>Fundamentals of Computers Networking</td>
          <td>12</td>
          <td>68</td>
          <td><span className="text-success">C</span></td>
          
        </tr>
        <tr>
          <td>MA101</td>
          <td>Database Management System</td>
          <td>14</td>
          <td>57</td>
          <td><span className="text-success">C</span></td>
          
        </tr>
        <tr>
          <td>PH101</td>
          <td>Fundamentals of Computers Networking</td>
          <td>12</td>
          <td>68</td>
          <td><span className="text-success">C</span></td>
          
        </tr>
 
      </tbody>
    </Table>
              </div>
            
            </div>
            
          <div className="row mt-4">
              <div className="col">  
              <Button type="submit" className="offset-10" color="success">
                    <span><i className="fa fa-print fa-lg m-2"/>Print(pdf)</span>
                  </Button></div>
          </div>
           </form>
           <hr/>
           <form>
            <div className="row bg-white border-left justify-content-center">
            <h4 className="font-weight-bold purple">YEAR 2 (2019/2020)</h4>
              <div className="col  ">

              
              <Table>
                  
      <thead>
          <tr>SEMESTER I</tr>
        <tr>
          <th>COURSE CODE</th>
          <th>COURSE NAME</th>
          <th>CREDIT</th>
          <th>MARKS (%)</th>
          <th>GRADE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PH101</td>
          <td>Fundamentals of Computers Networking</td>
          <td>12</td>
          <td>98</td>
          <td><span className="text-success">A</span></td>
          
        </tr>
        <tr>
          <td>MA101</td>
          <td>Database Management System</td>
          <td>14</td>
          <td>85</td>
          <td><span className="text-success">B</span></td>
          
        </tr>
        <tr>
          <td>PH101</td>
          <td>Fundamentals of Computers Networking</td>
          <td>12</td>
          <td>58</td>
          <td><span className="text-success">C</span></td>
          
        </tr>
 
      </tbody>
    </Table>
              </div>
              <div className="col border-left">

             
              <Table>
      <thead>
      <tr>SEMESTER II</tr>
        <tr>
        <th>COURSE CODE</th>
          <th>COURSE NAME</th>
          <th>CREDIT</th>
          <th>MARKS (%)</th>
          <th>GRADE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PH101</td>
          <td>Fundamentals of Computers Networking</td>
          <td>12</td>
          <td>68</td>
          <td><span className="text-success">C</span></td>
          
        </tr>
        <tr>
          <td>MA101</td>
          <td>Database Management System</td>
          <td>14</td>
          <td>57</td>
          <td><span className="text-success">C</span></td>
          
        </tr>
        <tr>
          <td>PH101</td>
          <td>Fundamentals of Computers Networking</td>
          <td>12</td>
          <td>68</td>
          <td><span className="text-success">C</span></td>
          
        </tr>
 
      </tbody>
    </Table>
              </div>
            
            </div>
            
          <div className="row mt-4">
              <div className="col">  
              <Button type="submit" className="offset-10" color="success">
                    <span><i className="fa fa-print fa-lg m-2"/>Print(pdf)</span>
                  </Button></div>
          </div>
           </form>
            </div>
            </section>
        </div> );
    }

 
export default Transcript;