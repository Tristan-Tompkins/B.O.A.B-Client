import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Footer = () => (
  <Navbar className="nav" expand="md">
    <Navbar.Brand href="#expenses">
      B.O.A.B
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    </Navbar.Collapse>
)

export default Footer
