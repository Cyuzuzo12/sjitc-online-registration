import React  from "react";
import NewsList from "./newsList";

const History = () => {
  return (
    <div>
      <section className="home">
        <div className="container ">
        <div className="row p-3">
            <div className="col-md-3 col-sm-12 m-2">
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
            <div className="col-md-8 col-sm-12 m-2 ">
              <div className="row">
                <div className="col bg-white"><h4 className="font1 font-weight-bold purple">
                History of SJITC
              </h4>
              <hr />
              <p className="font text-muted" data-aos="fade-up"
              data-aos-duration="2000">
                Saint Joseph Integrated Technical College formerly known as
                Ecole des Metiers de Nyamirambo (EMN) came into existence as a
                Training Centre in 1970 and started with 15 students. Its
                establishment was made possible by the joint efforts of the
                Josephite Brothers Congregation whose objective was a practical
                training in order to respond to growing needs of both the
                capital and the countryside, as the country needed average but
                fast technical progress. It was urgent to train qualified
                workers according to modern technical method instead of
                following the traditional on-the-job training method. In 1993,
                the School -then called Institut Léon Paul Classe- adopted the
                A3 level to its program. The 1994 Genocide left the School
                ransacked but it reopened on 7/06/1997.
              </p>
              <p className="font text-muted" data-aos="fade-up"
              data-aos-duration="2500">
                On 25/06/1999, it was officially inaugurated by the then
                Minister of Education, Emmanuel MUDIDI and was recognized as a
                private School on 03/09/2000. Chapter nine of the Josephite
                Brothers Statute stipulates that all Schools sponsored/managed
                by this congregation must have Saint Joseph as patron saint;
                thus Nyamirambo School of Crafts (EMN) became Nyamirambo Saint
                Joseph Technical School (ETSJ) since September 2002 and adopted
                A2 program in Public Works and Construction. The School was
                officially approved for A1 program in April 2010 and thereby
                became Saint Joseph Integrated Technical College, SJITC. In
                April 2010, SJITC opened a department of Civil Engineering,
                whose first promotion graduated in 2012. Despite many
                challenges, Saint Joseph Integrated Technical College has made a
                significant progress and is today an essential partner of the
                Ministry of Education regarding technical options.
              </p></div>
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

export default History;
