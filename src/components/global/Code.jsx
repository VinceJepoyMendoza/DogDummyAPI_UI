import React from 'react'
import CodeReq from '../home/CodeReq'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

const Code = ({ output }) => {
  const link = 'https://dogdummyapi.herokuapp.com/dog/id/1'
  const title = `Get Single Dog`
  // const newOutput = transformOutput(output)
  return (
    <Container className='sample-codes py-4' as='section'>
      <h6 className='title-underline mb-5'>
        Get a look of what DogDummyApi offers
      </h6>
      <h6>{title}</h6>
      <p className='text-primary'>Link: {link}</p>
      <Row as='article'>
        <Col as='pre' xs={12} className='bg-primary text-white p-3'>
          {/* JS Request fetch */}
          <CodeReq link={link} className='overflow-scroll' />
        </Col>
        <Col xs={12} className='p-0'>
          <Accordion flush>
            <Accordion.Item eventKey='0'>
              {/* Header */}
              <Accordion.Header as='h6'>Run code above</Accordion.Header>
              <Accordion.Body as='pre' className='bg-primary text-white'>
                {/* Output */}
                <p className='code-methods'>&#123;</p>
                {Object.keys(output).map((key, index) => {
                  return (
                    <p key={index} className='mx-1'>
                      <span className='code-string'>{key}</span>:{' '}
                      {JSON.stringify(output[key])}
                    </p>
                  )
                })}
                <p className='code-methods'>&#125;</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
}

export default Code
