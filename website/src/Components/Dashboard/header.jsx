import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem
} from "reactstrap";
import { NavLink, Link, withRouter } from "react-router-dom";
import { firebase } from "../../firebase";
class Header extends Component {
  constructor(props) {
    super(props);
  console.log(props)
    
    this.state = {
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


  render() {
    
    return (
      <React.Fragment>
        
        <Navbar light expand="md" className="titlebar-blue">
          <div className="container">
            <NavbarToggler onClick={this.openNav} className="mr" />

            <Collapse isOpen={this.state.isOpenNav} navbar>
             
              <Nav className="ml-auto " navbar>
                <NavItem >
                  <NavLink
                    className="nav-link font-weight-bold text-white sin"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </NavItem>
                <NavItem>
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
        
      </React.Fragment>
    );
  }
}

export default withRouter(Header);
