import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Progress,Table } from 'reactstrap';
import avatar from "C:/Users/USER/Documents/Techenfold/saint_joseph/student-registration/src/images/avatar.jpg";

const Attendance =()=> { 
        const [modal, setModal] = useState(false);

        const toggle = () => setModal(!modal);
        return ( <div>
            <section>
            <div className="container">
            <div className="row justify-content-end m-4">
            <div className="col-md-2 bg-light mr-1">
            <h6 >
                  
                 Course Name  <button><i className="fa fa-minus"></i></button>
                </h6>
               
            </div>
              <div className="col-md-9  reg-form ">
                <h5 className="p-2">
                  <i className="fa fa-table fa-lg m-1" />
                 Attendance View
                </h5>

             
              <Table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Reg No</th>
          <th>Course Code</th>
          <th>StudentName</th>
          <th>Phone Number</th>
          <th>Percentage</th>
          <th>History</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td ><img src={avatar} alt="student" className="rounded-circle" width="40" height="40"/></td>
          <td>123456545454</td>
          <td>NS-23456</td>
          <td>Cyuzuzo nadine</td>
          <td>0877654567876</td>
          <td><Progress value="40">40%</Progress></td>
          <th ><i className="fa fa-file-text fa-lg" onClick={toggle} style={{
                 cursor:'pointer'
          }}/></th>
        </tr>
        <tr>
          
          <td ><img src={avatar} alt="student" className="rounded-circle" width="40" height="40"/></td>
          <td>123456545454</td>
          <td>NS-23456</td>
          <td>Cyuzuzo nadine</td>
          <td>0877654567876</td>
          <td><Progress value="75">75%</Progress></td>
          <th ><i className="fa fa-file-text fa-lg" onClick={toggle} style={{
                 cursor:'pointer'
          }}/></th>
        </tr>
        <tr>
          
          <td ><img src={avatar} alt="student" className="rounded-circle" width="40" height="40"/></td>
          <td>123456545454</td>
          <td>NS-23456</td>
          <td>Cyuzuzo nadine</td>
          <td>0877654567876</td>
          <td><Progress value="100">100%</Progress></td>
          <th ><i className="fa fa-file-text fa-lg" onClick={toggle}/></th>
        </tr>
        <tr>
          
          <td ><img src={avatar} alt="student" className="rounded-circle" width="40" height="40"/></td>
          <td>123456545454</td>
          <td>NS-23456</td>
          <td>Cyuzuzo nadine</td>
          <td>0877654567876</td>
          <td><Progress value="25">25%</Progress></td>
          <th ><i className="fa fa-file-text fa-lg" onClick={toggle} style={{
                 cursor:'pointer'
          }}m/></th>
        </tr>
        <tr>
          
          <td ><img src={avatar} alt="student" className="rounded-circle" width="40" height="40"/></td>
          <td>123456545454</td>
          <td>NS-23456</td>
          <td>Cyuzuzo nadine</td>
          <td>0877654567876</td>
          <td><Progress value="50">50%</Progress></td>
          <th ><i className="fa fa-file-text fa-lg"/></th>
        </tr>
      </tbody>
    </Table>
    <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
              </div>
            </div>
            </div>
            </section>
        </div> );
    }

 
export default Attendance;