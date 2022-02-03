import React from 'react'
import Logo from '../../images/logo.png'
import NavbarSide from './NavbarSide'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { ImGithub } from 'react-icons/im'

const NavbarGlobal = () => {
  return (
    <>
      <Navbar expand='lg' className='bg-primary'>
        <Container className='d-flex justify-content-between'>
          <Navbar.Brand
            href='/get-started'
            title='DogDummyAPI'
            className='text-white'
          >
            <img src={Logo} alt='DogDummyAPI' />
            <small>DogDummyAPI</small>
          </Navbar.Brand>
          <Nav className='d-none d-lg-block'>
            <Nav.Link
              href='/get-started'
              className='navlinks hover-secondary'
              title='Home'
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='/docs'
              className='navlinks hover-secondary'
              title='Read more from documentation'
            >
              Documentation
            </Nav.Link>
            <Nav.Link
              href='https://github.com/VinceJepoyMendoza/DogDummyAPI'
              className='navlinks hover-secondary'
              title="Visit API\'s Github repository"
              target='_blank'
            >
              <ImGithub />
            </Nav.Link>
          </Nav>
          {/* Sidebar */}
          <NavbarSide />
        </Container>
      </Navbar>
      {/* <Banner /> */}
    </>
  )
}

export default NavbarGlobal
