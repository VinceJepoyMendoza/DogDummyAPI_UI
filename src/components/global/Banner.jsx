import React from 'react'
import { Container } from 'react-bootstrap'
import { AiOutlineClose, AiOutlineStar } from 'react-icons/ai'
import { useGlobalContext } from '../../context'

const Banner = () => {
  const { closeBanner, isBannerClose } = useGlobalContext()

  return (
    <Container
      fluid
      className={`flew-center-row bg-white text-dark text-center py-2 border-bottom ${
        isBannerClose && 'd-none'
      }`}
    >
      <small className='font-weight-bold'>
        If you like <span className='text-secondary fw-bold'>DogDummyAPI</span>,
        consider connecting with me in my{' '}
        <a
          href='https://www.linkedin.com/in/vince-jepoy-mendoza-5b93a6223/'
          className='text-secondary'
          title='Visit my LinkedIn profile'
        >
          LinkedIn
        </a>{' '}
        or giving the github repo a <AiOutlineStar />
      </small>
      <button onClick={closeBanner} className='btn p-0'>
        <AiOutlineClose />
      </button>
    </Container>
  )
}

export default Banner
