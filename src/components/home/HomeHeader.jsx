import React from 'react'
import homeImg from '../../images/homeImg.svg'
import { Link } from 'react-router-dom'
import { BsJournalBookmark, BsCodeSquare } from 'react-icons/bs'
import { Button, Col, Image, Row } from 'react-bootstrap'

const NavHeader = () => {
  return (
    <Row className='py-lg-5' as='header'>
      <Col lg={5} className='pb-2 pb-lg-0 my-auto'>
        <h2>DogDummyAPI</h2>
        <p className='lead'>
          Dummy rest API about dogs perfect for beginners learning APIs
        </p>
        <Row>
          <Col xs={12} lg={7} className='mb-2'>
            <Link to='/docs'>
              <Button variant='secondary' className='w-100'>
                Read Docs
                <BsJournalBookmark className='mx-3' />
              </Button>
            </Link>
          </Col>
          <Col xs={12} lg={7}>
            <a
              href='https://github.com/VinceJepoyMendoza/DogDummyAPI'
              target='_blank'
              rel='noreferrer'
            >
              <Button className='w-100'>
                View on GitHub
                <BsCodeSquare className='mx-3' />
              </Button>
            </a>
          </Col>
        </Row>
      </Col>
      {/* Image */}
      <Col lg={7} as='figure'>
        <Image
          src={homeImg}
          fluid
          className='w-75 h-100 mt-3 pt-lg-0 d-block mx-auto'
        />
      </Col>
    </Row>
  )
}

export default NavHeader
