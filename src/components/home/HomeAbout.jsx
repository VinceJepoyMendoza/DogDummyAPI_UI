import React from 'react'
// import { Col, Row } from 'react-bootstrap'

const HomeAbout = () => {
  return (
    <section id='home-info' className='my-5 py-5'>
      <div className=' text-center lead'>
        <h6 className='title-underline mb-5'>
          {' '}
          Tired of local and improvise data for your personal website project?
        </h6>
        <p>
          <span className='fw-normal text-secondary'>DogDummyAPI</span> is a
          free rest API about dogs with the goal of providing students or
          experience developer a simple dummy rest API that everyone can access
          and use anytime, anywhere free of charges.
        </p>
        <p>
          <span className='fw-normal text-secondary'>DogDummyAPI</span>'s main
          goal is to provide students who are new to APIs a beginner friendly
          dummy rest API that they can use to study, practice and even use for
          their school website project.
        </p>
      </div>
    </section>
  )
}

export default HomeAbout
