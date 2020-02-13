import React, { Component } from "react";
import { Link } from "react-router-dom";

const Diploma = () => {
  return ( 
    <div>
    <section className="home">
      <div className="container ">
        <div className="row p-3">
          <div className="col-md-3 col-sm-12  m-2">
            <div className="row">
              <div className="col reg-program ">
                <h6 className="font m-4">ADVENCED DIPLOMA & DIPLOMA</h6>
                <ul className="font">
                  <span className="font font-weight-bold">
                    Cival Engineering
                  </span>
                  <li className="font">High Way</li>
                  <li className="font">Land Surveying</li>
                  <li className="font">Building Contruction</li>
                </ul>
                <ul className="font">
                  <span className="font font-weight-bold">
                    Information Technology
                  </span>
                </ul>
                <h6 className="font">ADVENCED LEVEL 3,4,5</h6>
                <ul className="font">
                  <li className="font">Computer Application</li>
                  <li className="font">Masonry</li>
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
                  NOTICE BOARD
                </h4>
                <p className="font text-muted">
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et
                  quasi architecto beatae vitae dicta sunt explicabo. Nemo
                  enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et
                  quasi architecto beatae vitae dicta sunt explicabo. Nemo
                  enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12  m-2">
            <div className="row">
              <div className="col bg-white">
                <h5 className="font-weight-bold font m-4 purple">
                  Advanced Diploma Requirements
                </h5>
               <p></p>
              </div>
            </div>
          </div>
          <div className="col-md-2 m-2 col-sm-12 ">
            <div className="row">
              <div className="col bg-white">
                <h4 className="font purple font-weight-bold">LATEST NEWS</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
   );
}
 
export default Diploma;






// class Diploma extends Component {
//   state = {};
//   program = () => {
//     return <Link to="/program"></Link>;
//     // alert("submitted")
//   };
//   render() {
//     return (
//       <div>
//         <section className="advenced-level bg-light">
//           <div className="container bg-light">
//             <h5 className="text-center  p-5">
//               REGISTRATION FORM FOR ADVENCED DIPLOMA AND DIPLOMA{" "}
//             </h5>

//             <div className="row justify-content-center">
//               <div className="col-md-7 col-sm-12 border bg-light loginForm">
//                 <form>
//                   <div class="form-row">
//                     <div class="col">
//                       <label for="name ">NAMES </label>
//                       <input type="text" className="form-control  " id="name" />
//                     </div>
//                     <div class="col">
//                       <label for="name ">SURNAMES </label>
//                       <input type="text" className="form-control  " id="name" />
//                     </div>
//                   </div>
//                   <div className="form-row">
//                     <div className="col-6 offset-3">
//                       {" "}
//                       <label for="name ">DATE OF BIRTH</label>
//                       <input type="date" className="form-control  " id="name" />
//                     </div>
//                   </div>
//                   <div class="form-row">
//                     <div class="col-md-2">
//                       <label for="name ">GENDER</label>
//                     </div>
//                     <div class="col-md-10">
//                       <div className="form-check ">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           name="inlineRadioOptions"
//                           id="inlineRadio1"
//                           value="male"
//                         />
//                         <label className="form-check-label" for="inlineRadio1">
//                           Male
//                         </label>
//                       </div>

//                       <div className="form-check ">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           name="inlineRadioOptions"
//                           id="inlineRadio2"
//                           value="option2"
//                         />
//                         <label className="form-check-label" for="inlineRadio2">
//                           Female
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <label for="name ">FATHER'S NAME & CONTACT</label>
//                     <input type="text" className="form-control  " id="name" />
//                   </div>
//                   <div className="form-group">
//                     <label for="name ">MOTHER'S NAME & CONTACT</label>
//                     <input type="text" className="form-control  " id="name" />
//                   </div>
//                   <div className="form-group">
//                     <label for="name ">GUARDIAN'S NAME & CONTACT</label>
//                     <input type="text" className="form-control  " id="name" />
//                   </div>
//                   <div className="form-row">
//                     <div className="col-7 offset-2">
//                       {" "}
//                       <label for="name ">PROVINCE</label>
//                       <select class="form-control">
//                         <option selected>Choose...</option>
//                         <option>Kigali City</option>
//                         <option>Western</option>
//                         <option>Nothern</option>
//                         <option>Southern</option>
//                         <option>Easthern</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="form-row">
//                     <div className="col-7 offset-2">
//                       {" "}
//                       <label for="name ">DISTRICT</label>
//                       <select class="form-control">
//                         <option selected>Choose...</option>
//                         <option>Kigali City</option>
//                         <option>Western</option>
//                         <option>Nothern</option>
//                         <option>Southern</option>
//                         <option>Easthern</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="form-row">
//                     <div className="col-7 offset-2">
//                       {" "}
//                       <label for="name ">SECTOR</label>
//                       <select class="form-control">
//                         <option selected>Choose...</option>
//                         <option>Kigali City</option>
//                         <option>Western</option>
//                         <option>Nothern</option>
//                         <option>Southern</option>
//                         <option>Easthern</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div class="form-row">
//                     <div class="col">
//                       <label for="name ">NATIONALITY </label>
//                       <input type="text" className="form-control  " id="name" />
//                     </div>
//                     <div class="col">
//                       <label for="name ">ID </label>
//                       <input type="text" className="form-control  " id="name" />
//                     </div>
//                     <div class="col">
//                       <label for="name ">INSURENCE </label>
//                       <input type="text" className="form-control  " id="name" />
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <label for="name ">SECONDARY EDUCATION AT</label>
//                     <input type="text" className="form-control  " id="name" />
//                   </div> 
//                   <div className="form-row">
//                     <div className="col ">
//                       {" "}
//                       <label for="name ">DEPARTMENT TO BE ADMITTED</label>
//                       <select class="form-control">
//                         <option selected>Choose...</option>
//                         <option>Masonery</option>
//                         <option>Computer Application</option>
//                         <option>surveying</option>
//                         <option>Road Contruction</option>
//                       </select>
//                     </div>
//                   </div> 
//                   <div className="form-row">
//                     <div className="col-7 offset-2">
//                       {" "}
//                       <label for="name ">YEAR ADMITTED</label>
//                       <select class="form-control">
//                         <option selected>Choose...</option>
//                         <option>Year 1</option>
//                         <option>Year 2</option>
//                         <option>Year 4</option>
//                         <option>Year 3</option>
//                       </select>
//                     </div>
//                   </div> 
//                   <div className="row p-3">
//                     <div className="col">
//                       <h5>DOCUMENTS REQUIRED TO EVERY STUDENT</h5>
//                       <p>
//                         <em>
//                           (passport photo, ID card or Passport, Advenced Level
//                           result slip, progressive report year 4,5,6)
//                         </em>
//                       </p>
//                     </div>
//                   </div>
//                   <div class="form-row p-2">
//                     <div class="col">
//                       <div class="custom-file">
//                         <input
//                           type="file"
//                           class="custom-file-input"
//                           id="validatedCustomFile"
//                           required
//                         />
//                         <label
//                           class="custom-file-label"
//                           for="validatedCustomFile"
//                         >
//                           Choose file...
//                         </label>
//                       </div>
//                     </div>
//                     <div class="col">
//                       <div class="custom-file">
//                         <input
//                           type="file"
//                           class="custom-file-input"
//                           id="validatedCustomFile"
//                           required
//                         />
//                         <label
//                           class="custom-file-label"
//                           for="validatedCustomFile"
//                         >
//                           Choose file...
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="form-row p-2">
//                     <div class="col">
//                       <div class="custom-file">
//                         <input
//                           type="file"
//                           class="custom-file-input"
//                           id="validatedCustomFile"
//                           required
//                         />
//                         <label
//                           class="custom-file-label"
//                           for="validatedCustomFile"
//                         >
//                           Choose file...
//                         </label>
//                       </div>
//                     </div>
//                     <div class="col">
//                       <div class="custom-file">
//                         <input
//                           type="file"
//                           class="custom-file-input"
//                           id="validatedCustomFile"
//                           required
//                         />
//                         <label
//                           class="custom-file-label"
//                           for="validatedCustomFile"
//                         >
//                           Choose file...
//                         </label>
//                       </div>
//                     </div>
//                   </div>
              
//                   <div class="form-check form-check-inline">
//                     <input
//                       class="form-check-input"
//                       type="checkbox"
//                       id="inlineCheckbox3"
//                       value="option3"
//                     />
//                     <label class="form-check-label" for="inlineCheckbox3">
//                      Part time
//                     </label> 
//                     <input
//                       class="form-check-input"
//                       type="checkbox"
//                       id="inlineCheckbox3"
//                       value="option3"
//                     />
//                     <label class="form-check-label" for="inlineCheckbox3">
//                       Full time
//                     </label>
//                   </div>
//                   <div className="form-group">
//                     <label for="name ">Pin code for FARG STUDENTS</label>
//                     <input type="text" className="form-control  " id="name" />
//                   </div>
//                   <div class="form-row p-5">
//                     <div class="col">
//                       <button
//                         type="submit"
//                         className="bg-warning form-control font-weight-bold  "
//                       >
//                         SUBMIT
//                       </button>
//                     </div>
                   
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }

// export default Diploma;
