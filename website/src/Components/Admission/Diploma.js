import React  from "react";
import NewsList from "../newsList";

const AdmissionAdvancedDiploma = () => {
  return (
    <div>
      <section className="home">
        <div className="container ">
          <div className="row p-3">
            <div className="col-md-3 col-sm-12  m-2">
            <div className="row">
                   <div className="col reg-program ">
                   <h6 className="font m-4">ADVANCED DIPLOMA & DIPLOMA</h6>
                <ul className="font">
                  <span className="font font-weight-bold">Civil Engineering</span>
                  <li className="font">High Way</li>
                  <li className="font">Land Surveying</li>
                  <li className="font">Building Contruction</li>
                </ul>
                <ul className="font">
                  <span className="font font-weight-bold">
                    Information Technology
                  </span>
                </ul>
                <h6 className="font">ADVANCED LEVEL 3,4,5</h6>
                <ul className="font">
                  <li className="font">Computer Application</li>
                  <li className="font">Masonery</li>
                  <li className="font">Surveying</li>
                  <li className="font">Road Contruction</li>
                </ul>
                <h6 className="font">SHORT COURSE</h6>
                <ul className="font">
                  <li className="font">Information Technology</li>
                </ul>
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
            <div className="col-md-7 col-sm-12  m-2">
              <div className="row">
                  <div className="col bg-white">
                  <ol data-aos="fade-up"
              data-aos-duration="2000">
                      <h5 className="font-weight-bold font1 m-4 purple">
                      Advanced Diploma & Diploma Requirements
                      </h5>
                      <li className="font text-muted">
                      Notified copy of "A" Level certificate or any other certificate deemed equivalent
                      </li>
                      <li className="font text-muted">
                      3 Passport size photos in color
                      </li>
                      <li className="font text-muted">
                      A photocopy of the National ID Card or valid Passport
                      </li>
                      <li className="font text-muted">
                     Atleast to have grade <strong>E</strong> and above in two principal subjects, in Technical schools must have 16 point atleast or schools of Sciences must have 18 points atleast.
                     </li>
                     <li className="font text-muted">
                     Secondary school transcripts/reports for senior<strong> 4,5</strong>and <strong>6</strong>
                     </li>
                     <li className="font text-muted">
                     A non-refundable application fee of Frws 44,000 paid in any of the following bank accounts:
                     <ol>
                       <li>Bank of Kigali: 00040–0315351-37 (FRWS)</li>
                       <li>Access Bank: 1002190104361301 (FRWS)</li>
                     </ol>
                     </li>
                    </ol>
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

export default AdmissionAdvancedDiploma;
