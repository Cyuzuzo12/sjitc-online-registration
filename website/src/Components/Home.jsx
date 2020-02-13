import React from "react";
import NewsSlider from "./newSlider";
import NewsList from "./newsList";

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="container ">
          <div className="row p-3">
            <div className="col-md-3 col-sm-12 ">
              <div className="row">
                <div className="col reg-program ">
                  <h6 className="font m-4">ADVANCED DIPLOMA & DIPLOMA</h6>
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
                <div className="col bg-white mt-2 ">
                  <h4 className="font purple font-weight-bold m-4">
                    ANNOUNCEMENTS
                  </h4>
                  <NewsList/>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-sm-12 ">
              <div className="row">
                <div className="col-md-12 m-2">
                  <NewsSlider
                  />
                </div>
              </div>
              <div className="row m-1">
                <div className="col-md-12 guide-lineDiv ">
                  <ul data-aos="fade-up" data-aos-duration="2000">
                    <h5 className="font-weight-bold font1 text-white m-4">
                    <i className="fa fa-key fa-1x"></i>MISSION & VISION
                      
                    </h5>
                    <li className="font text-white">
                      To equip students with advanced skills with a view to
                      increasing manpower and capacity for national development
                    </li>
                    <li className="font text-white">
                      To provide consultancy services to the Government,
                      industry, privatesector and the community at large{" "}
                    </li>
                    <li className="font text-white">
                      To collaborate with other academic, professional,
                      technical, and research institutions in and outside of
                      Rwanda for educational and technological development.
                    </li>
                    <li className="font text-white">
                      To contribute to the cultural, civic and moral training of
                      its students and to participate actively in the economic
                      and socio cultural development of the country.{" "}
                    </li>
                    <li className="font text-white">
                      To develop and promote close collaboration with the
                      private sector and the community.
                    </li>
                    <li className="font text-white">
                      To award diplomas of the categories of the courses it
                      offers
                    </li>
                    <li className="font text-white">
                      To award certificates concluding short period courses
                    </li>
                    <li className="font text-white">
                      To conclude bilateral cooperation agreements with various
                      institutions in charge of education as well as other high
                      national and international institutions of learning.
                    </li>
                  </ul>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
