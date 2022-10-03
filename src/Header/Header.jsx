
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../logo.svg';

import React, { Component } from 'react';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: 'About',
      service: 'Servise',
      contacts: 'Contacts',
    }
  }
  render() {
    return (
      <>
      <Navbar fixed='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
      <Container fluid>
        <Navbar.Brand href="#">
        <img className='logo' src={Logo} alt="Logo"/>
        React bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='link' href="#about">{this.state.about}</Nav.Link>
            <Nav.Link className='link' href="#service">{this.state.service}</Nav.Link>
            <Nav.Link className='link' href="#action2">{this.state.contacts}</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="sr mr-sm-1"
              aria-label="Search"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
  }
}
