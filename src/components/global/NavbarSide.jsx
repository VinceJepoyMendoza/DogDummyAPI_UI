import React from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { Navbar, Offcanvas, Nav } from 'react-bootstrap'

const NavbarSide = () => {
  return (
    <>
      {/* Toggle button */}
      <Navbar.Toggle aria-controls='sidebar' className='border-0'>
        <BiMenuAltLeft className='text-white' />
      </Navbar.Toggle>
      {/* Sidebar */}
      <Navbar.Offcanvas id='sidebar' placement='start' className='bg-primary'>
        {/* Sidebar Title */}
        <Offcanvas.Header closeButton className='text-white'>
          <Offcanvas.Title>DogDummyAPI</Offcanvas.Title>
        </Offcanvas.Header>
        {/* Sidebar Body */}
        <Offcanvas.Body>
          <Nav.Link href='/get-started'>Home</Nav.Link>
          <Nav.Link href='/docs'>Documentation</Nav.Link>
          <Nav.Link
            href='https://github.com/VinceJepoyMendoza/DogDummyAPI'
            className='navlinks hover-secondary'
            title="Visit API\'s Github repository"
          >
            GitHub
          </Nav.Link>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </>
  )
}

export default NavbarSide
