import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DocSideBar from '../components/documentation/DocSideBar'
import DocRoutes from '../components/documentation/DocRoutes'
import DocTable from '../components/documentation/DocTable'
import { AiOutlineThunderbolt } from 'react-icons/ai'

const Docs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <Container fluid as='section'>
      <Row>
        <Col className='ps-0 d-none d-lg-block' lg={3} as='aside'>
          <DocSideBar />
        </Col>
        <Col xs={12} lg={9} className='py-3'>
          <header className='py-4 mb-5'>
            <h6 className='text-secondary fs-5 mb-3'>
              Say no more to your Local and Improvise data
            </h6>
            <p className='text-muted'>
              DogDummyApi provides you with dummy API that you can use for
              placeholders with any data type. from String, Number, Array,
              Object and even nested Object. You can even use DogDummyAPI for
              your dummy site that you can include to your portfolio.
            </p>
          </header>
          {/* All routes */}
          <DocRoutes />

          {/* Queries */}
          <h6 className='title-underline pt-4 fs-4 mb-5' id='query-heading'>
            Queries
          </h6>
          <p className='text-muted'>
            <AiOutlineThunderbolt />
            See individual route for their available queries. filter route have
            all of the queries.
          </p>
          <DocTable />
        </Col>
      </Row>
    </Container>
  )
}

export default Docs
