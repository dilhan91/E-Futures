import React, {useState} from "react";
import { Navbar, Nav, Dropdown, Container} from "react-bootstrap";

import "./NavBar.css";

const NavBarComponent = (props) => {


const [sortBy, setSortBy] = useState("ASC")

const selectSortHandel = (sort) => {
  setSortBy(sort)
}


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">My Albums</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"/>
          <Nav>
            
            <Dropdown>
            <Dropdown.Toggle variant="secondary" > Sort by : Title {sortBy} </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item onClick={() => selectSortHandel('ASC')}>Title ASC</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => selectSortHandel('DESC')}>Title DESC</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export const NavBar = NavBarComponent;
