import React from 'react';
import "./dashboard.css";
import SideNavigation  from './AdminSideNav';
import avatar from "../../images/avatar.jpg";

const DashHeader = (props) =>{
        return ( 
         <React.Fragment>
        <SideNavigation  {...props}/>
        <header className="headerDash">
      <div className="container">
     
      <div className="row">
        <div> <i className="fa fa-bars fa-lg"
            onClick={props.onOpenNav}
           
        /></div>
        <div className="col-6">
        <span className="text-muted"><i className="fa fa-graduation-cap fa-lg m-2 text-muted"/>Welcome To Sjitc School Management System</span>
        </div>
        <div className="col-6">
        <form>
       <div className="form-row">
       <div className="col-8">
                      <div className="search">
  <span> <i className="fa fa-search"/></span>
  <input placeholder="Search Here..." className="form-control"/>
</div>
                    </div>
                    <div className="col-4">
                    <div className=" stud-photo">
                    <img src={avatar} alt="student-pic" />
                    {/* <Link>Admin</Link> */}
                    {/* <UncontrolledDropdown >
              <DropdownToggle nav >
              <p className="text-muted">Admin</p>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Sign Out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
                  </div>   
                    </div>
                  </div>
       </form>
        </div>
      </div>
      </div>
       
       
       </header>
      
     
        </React.Fragment>
                 
         );
    
}
 
export default DashHeader;