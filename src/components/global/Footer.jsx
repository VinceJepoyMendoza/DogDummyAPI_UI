import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container
      fluid
      style={{ background: '#6c757d67' }}
      className='main-footer py-3 text-dark text-center'
      as='footer'
    >
      <p className='m-0'>
        DogDummyApi by{' '}
        <a
          href='https://www.linkedin.com/in/vince-jepoy-mendoza-5b93a6223/'
          title='Go to my linkedin profile'
        >
          Vince Jepoy Mendoza
        </a>{' '}
        | All rights reserved &copy; {new Date().getFullYear().toString()}
      </p>
    </Container>
  )
}

export default Footer
