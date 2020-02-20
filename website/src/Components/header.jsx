import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavbarBrand,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
  Modal, ModalBody,ModalHeader
} from "reactstrap";
import SignIn from './sign/signin';
import { NavLink, Link } from "react-router-dom";
import logo from "../images/logo.png";
import { firebase } from "../firebase";
class Header extends Component {
  constructor(props) {
    super(props);
  console.log(props)
    
    this.state = {
      dropdownOpen: false,
      dropdownOpen1: false,
      dropdownOpen2: false,
      isOpenNav: false,
      logged: false,
      open: false,
       setOpen:false,
       focusAfterClose:true, 
       setFocusAfterClose:true
    };
  }
  isLogged = user => {
    return(
      user ?  this.setState({
        logged: !this.state.logged
      }) : ''
    )
   
  };
  
  openNav = () => {
    this.setState({
      isOpenNav: !this.state.isOpenNav
    });
  };
  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

 toggleModal = () => {
  this.setState({
    open: !this.state.open
  });
};
//  handleSelectChange = ({target: { value }}) => {
//       setFocusAfterClose(JSON.parse(value));
//   }
  // onMouseEnter = () => {
  //   this.setState({ dropdownOpen: true });
  // };

  // onMouseLeave =()=> {
  //   this.setState({dropdownOpen: false});
  // }
  toggle1 = () => {
    this.setState({
      dropdownOpen1: !this.state.dropdownOpen1
    });
  };
  // onMouseEnter1 = () => {
  //   this.setState({ dropdownOpen1: true });
  // };

  // onMouseLeave1 =()=> {
  //   this.setState({dropdownOpen1: false});
  // }

  toggle2 = () => {
    this.setState({
      dropdownOpen2: !this.state.dropdownOpen2
    });
  };
  // onMouseEnter2 = () => {
  //   this.setState({ dropdownOpen2: true });
  // };

  // onMouseLeave2 =()=> {
  //   this.setState({dropdownOpen2: false});
  // }
  logo = () => {
    return (
      <Link to="/">
        <img
          src={logo}
          alt="sjitc-logo"
          height="70"
          width="80"
          className="img-fluid"
        />
      </Link>
    );
  };

  render() {
    
    return (
      <React.Fragment>
        <Navbar light expand="md" className="bg-white">
          <div className="container">
            <NavbarBrand className="mr-auto" to="/home">
              <img
                src={logo}
                alt="sjitc-logo"
                height="70"
                width="80"
                className="img-fluid"
              />
              <span className="brand-text font-weight-bold ">
                SAINT JOSEPH INTERGRATED TECHNICAL COLLEGE
              </span>
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpenNav} navbar>
              <Nav className="ml-auto " navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/contact-us">
                    <span className="purple font-weight-bold">Find Us on:</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <a
                    className="nav-link "
                    href="https://m.facebook.com/Saint-Joseph-Integrated-Technical-College-SJITC-Nyamirambo-642601879173487/"
                  >
                    <i className="fa fa-facebook fa-lg purple font-weight-bold" />
                  </a>
                </NavItem>
                <NavItem>
                  <a className="nav-link " href="/twitter.com">
                    <i className="fa fa-twitter fa-lg purple" />
                  </a>
                </NavItem>
                <NavItem>
                  <a className="nav-link " href="/instagram.com">
                    <i className="fa fa-instagram fa-lg purple" />
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        {/* =============================================================== */}
        <Navbar light expand="md" className="titlebar-yellow"></Navbar>
        {/* ====================================================================== */}
        <Navbar light expand="md" className="titlebar-blue">
          <div className="container">
            <NavbarToggler onClick={this.openNav} className="mr" />

            <Collapse isOpen={this.state.isOpenNav} navbar>
              <Nav className="mr-auto " navbar>
                <NavItem>
                  <NavLink
                    className="nav-link menu  font-weight-bold text-white "
                    to="/home"
                  >
                    <i className="fa fa-home" />
                    HOME
                  </NavLink>
                </NavItem>
                <Dropdown
                  nav
                  inNavbar
                  isOpen={this.state.dropdownOpen1}
                  toggle={this.toggle1}
                  // onMouseEnter={this.onMouseEnter1}
                  // onMouseLeave={this.onMouseLeave1}
                >
                  <DropdownToggle
                    className="font-weight-bold menu text-white "
                    nav caret
                  >
                    <i className="fa fa-info-circle" />
                    ABOUT
                  </DropdownToggle>
                  <DropdownMenu className="bg-dark ">
                    <DropdownItem className=" bg-dark ">
                      {" "}
                      <Link to="/history" className=" font">
                        {" "}
                        History of SJITC
                      </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className=" bg-dark ">
                      <Link to="/mission-vision" className=" font">
                        Mission & Vision
                      </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className=" bg-dark ">
                      <Link to="/administration" className=" font">
                        Team
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown
                  nav
                  inNavbar
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggle}
                  // onMouseEnter={this.onMouseEnter}
                  // onMouseLeave={this.onMouseLeave}
                >
                  <DropdownToggle
                    className="font-weight-bold menu text-white "
                    nav caret
                  >
                    <i className="fa fa-graduation-cap" />
                    ACADEMICS
                  </DropdownToggle>
                  <DropdownMenu className="dropDown-menu bg-dark ">
                    <DropdownItem className=" bg-dark ">
                      <Link to="/advenced-level" className="text-white font">
                        Advanced Level(A2)
                      </Link>{" "}
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className="text-white bg-dark ">
                      {" "}
                      <Link to="/advenced-diploma" className="text-white font">
                        Advanced Diploma & Diploma
                      </Link>
                    </DropdownItem>
                    {/* <DropdownItem divider />
                    <DropdownItem className="text-white bg-dark ">
                      <Link to="/" className="text-white font">
                        Short Courses
                      </Link>
                    </DropdownItem> */}
                  </DropdownMenu>
                </Dropdown>
                <Dropdown
                  nav
                  inNavbar
                  isOpen={this.state.dropdownOpen2}
                  toggle={this.toggle2}
                  // onMouseEnter={this.onMouseEnter2}
                  // onMouseLeave={this.onMouseLeave2}
                >
                  <DropdownToggle
                    className="font-weight-bold menu text-white "
                    nav caret
                  >
                    ADMISSION
                  </DropdownToggle>
                  <DropdownMenu className="dropDown-menu bg-dark ">
                    <DropdownItem className=" bg-dark ">
                      <Link
                        to="/admission-for-advenced-level"
                        className="text-white font"
                      >
                        Advanced Level(A2)
                      </Link>{" "}
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className="text-white bg-dark ">
                      {" "}
                      <Link
                        to="/admission-for-advenced-diploma"
                        className="text-white font"
                      >
                        Advanced Diploma & Diploma
                      </Link>
                    </DropdownItem>
                    {/* <DropdownItem divider />
                    <DropdownItem className="text-white bg-dark ">
                      <Link to="/" className="text-white font">
                        Short Courses
                      </Link>
                    </DropdownItem> */}
                  </DropdownMenu>
                </Dropdown>
                <NavItem>
                  <NavLink
                    className="nav-link menu  font-weight-bold text-white"
                    to="/contact-us"
                  >
                    <i className="fa fa-phone"></i>CONTACT US
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto " navbar>
                <NavItem>
                  <a
                    className="nav-link font-weight-bold text-white sin"
                    href="http://localhost:5050/"
                  >
                    Apply Online
                  </a>
                </NavItem>
                <NavItem style={{display:!this.state.logged ? 'block' : 'none'}}>
                  <NavLink
                    className="nav-link font-weight-bold text-white sin"
                    to="#" onClick={this.toggleModal}
                  >
                    Sign In
                  </NavLink>
                </NavItem>
                <NavItem style={{display:this.state.logged ? 'block' : 'none'}}>
                  <NavLink
                    className="nav-link font-weight-bold text-white sin"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </NavItem>
                <NavItem style={{display:this.state.logged ? 'block' : 'none'}}>
                  <NavLink
                    onClick={() => {
                      firebase
                        .auth()
                        .signOut()
                        .then(() => {
                          this.props.history.push("/home");
                        });
                    }}
                    className="nav-link font-weight-bold text-white sin" to=""
                  >
                    Sign Out
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        {/* =================sign in modal======================== */}
        <Modal  isOpen={this.state.open}>
        <ModalHeader toggle={this.toggleModal}/>
                <ModalBody>
                  <SignIn/>
                </ModalBody>
            </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
