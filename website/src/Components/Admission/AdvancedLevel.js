import React from "react";
import NewsList from "../newsList";
import {Table} from "reactstrap";
const AdmissionAdvencedLevel = () => {
  return (
    <div>
      <section className="home">
        <div className="container ">
          <div className="row p-3">
            <div className="col-md-3 col-sm-12  m-2">
            <div className="row">
                   <div className="col reg-program ">
                   <h6 className="font m-4">ADVANCED DIPLOMA & DIPLOMA</h6>
                <ol className="font">
                  <span className="font font-weight-bold">Civil Engineering</span>
                  <li className="font">High Way</li>
                  <li className="font">Land Surveying</li>
                  <li className="font">Building Contruction</li>
                </ol>
                <ol className="font">
                  <span className="font font-weight-bold">
                    Information Technology
                  </span>
                </ol>
                <h6 className="font">ADVANCED LEVEL 3,4,5</h6>
                <ol className="font">
                  <li className="font">Computer Application</li>
                  <li className="font">Masonery</li>
                  <li className="font">Surveying</li>
                  <li className="font">Road Contruction</li>
                </ol>
                <h6 className="font">SHORT COURSE</h6>
                <ol className="font">
                  <li className="font">Information Technology</li>
                </ol>
                   </div>
                   
               </div>
               <div className="row">
               <div className="col bg-white mt-2">
               <h4 className="font purple font-weight-bold m-4">
                    ANNOUNCEMENTS
                  </h4>
                  <NewsList/>
                  </div>
               </div>
              </div>
            <div className="col-md-8 col-sm-12  m-2">
              <div className="row">
                  <div className="col bg-white">
                 
                      <h5 className="font-weight-bold font1 m-4 purple">
                      Advanced Level Requirements
                      </h5>
        <Table striped style={{background:'#fff'}}>
      <thead>
        <tr>
          <th>LEVEL 3(UMUNYESHULI MUSHYA)</th>
          <th>AMAFARANGA (RWF)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Minerval</td>
          <td>73,500</td>
         </tr>
         <tr>
          <td>Kwiyandikisha</td>
          <td>3,000</td>
         </tr>
         <tr>
          <td>Uniforme</td>
          <td>14,000</td>
         </tr>
         <tr>
          <td>Isarubeti /MAS/LSV/CAO/Itaburiya</td>
          <td>10,000</td>
         </tr>
         <tr>
          <td>Umupira w'imbeho</td>
          <td>6,000</td>
         </tr>
         <tr>
          <td>Ikayi y'imyitwarire</td>
          <td>1,000</td>
         </tr>
         <tr>
          <td>Ubwishingizi</td>
          <td>1,500</td>
         </tr>
         <tr>
          <td>Itumanaho</td>
          <td>2,000</td>
         </tr>
         <tr>
          <td>Ikarita y'ishuli</td>
          <td>2,000</td>
         </tr>
         <tr>
          <td>Amazi yo kunywa</td>
          <td>3,000</td>
         </tr>
         <tr>
          <td>Umusanzu w'uburezi</td>
          <td>100</td>
         </tr>
         <tr>
          <td>Stage</td>
          <td>7,500</td>
         </tr>
         <tr>
          <td className="font-weight-bold">TOTAL 1st Term</td>
          <td className="font-weight-bold">123,500</td>
         </tr>
         <tr>
          <td className="font-weight-bold">2nd Term</td>
          <td className="font-weight-bold">83,500</td>
         </tr>
         <tr>
          <td className="font-weight-bold">3rd Term</td>
          <td className="font-weight-bold">83,500</td>
         </tr>
         <tr>
          <td className="font-weight-bold purple">Total</td>
          <td className="font-weight-bold">290,600</td>
         </tr>
      </tbody>
    </Table>
                     <ul className="list-unstyled">
                     <li className="font text-muted">
                       Buri munyeshuli azana kandi impapuro (lame de papier) AZHAR, Classeur nini y'ubururu<br/>Aya mafaranga yishyurirwa kuri Konti ya <strong>BK No 00040-00315351-37</strong><br/>Umunyeshuli uzakirwa ni uzaba yerekanye urupapuro rwa banki yishyuriyeho cyangwa icyemezo cy'umushinga umwishyurira.
                      </li>
                     </ul>
                    
                  </div>
              </div>
            </div>
            {/* <div className="col-md-2 m-2 col-sm-12 ">
              <div className="row">
              <div className="col bg-white">
              <h4 className="font purple font-weight-bold">LATEST NEWS</h4>
            </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionAdvencedLevel;
