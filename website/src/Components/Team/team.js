import React from "react";
import TeamList from "./teamList";
import NewsList from "../newsList";

const Team = props => {
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
                    ANNOUNCEMENTS
                  </h4>
                  <NewsList/>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12  m-2">
              <div className="row">
                <div className="col bg-white " >
                  <h5 className="font-weight-bold font m-4 purple">
                    ADMINISTRATION
                  </h5>
                  <TeamList/>
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

export default Team;
