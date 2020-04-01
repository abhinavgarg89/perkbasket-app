import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/Nav";
import logo from "./logo.png";
import MerchantList from "./merchantlist";
import { Button } from "react-bootstrap";

import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

// class NavBarTest extends React.Component {
//   render() {
//     return (
//       <div>
//         <Navbar bg="light" variant="light">
//           <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mr-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#link">Link</Nav.Link>
//               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">
//                   Something
//                 </NavDropdown.Item>
//                 {/* <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item> */}
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

class NavBarTest extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="home">
            {/* <img src={logo} alt="Logo" height="100px" width="100px" /> */}
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home" activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link href="/merchantlist" activeClassName="active">
              Merchants
            </Nav.Link>
            <Nav.Link href="/merchantHome" activeClassName="active">
              MerchantHome
            </Nav.Link>
            <Button variant="primary" href="/login">
              Login
            </Button>{" "}
            <Button variant="primary" href="/signup">
              SignUp
            </Button>{" "}
            <Button variant="primary">Schedule a Demo</Button>{" "}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBarTest;
/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
    </Form> */
