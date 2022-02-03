import React from 'react'
import ResTable from './ResTable'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Resources = () => {
  return (
    <Container fluid as='section' className='my-5 py-5'>
      <h6 className='title-underline mb-5'>Main Routes and Resources</h6>
      <Row>
        <Col xs={12} lg={6} className='lead fw-normal pe-5'>
          <p className='text-center'>
            Free and quality dummy rest API for anykind of use for your personal
            or school projects
          </p>
          <Link to='/docs' className='btn btn-secondary mt-3'>
            View more
          </Link>
        </Col>
        <Col xs={12} lg={6}>
          <ResTable />
        </Col>
      </Row>
    </Container>
  )
}

export default Resources
