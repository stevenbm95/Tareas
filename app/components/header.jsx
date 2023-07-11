import { Link } from '@remix-run/react'
import React from 'react'
import { NavDropdown,Nav,Container, Navbar } from 'react-bootstrap'

export default function Header() {
  return (
    <header>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">Tasks Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav >
                    <Link to="/home" >home</Link>                
                </Nav>
                <Nav>
                    <Link to="/tasks">tasks</Link>
                </Nav>
                <Nav>
                <Link to="/about">about</Link>
                </Nav>          
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  )
}

      
      