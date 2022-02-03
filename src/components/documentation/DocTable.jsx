import React from 'react'
import Table from 'react-bootstrap/Table'
import queries from '../../jsons/queries.json'
import { Row, Col } from 'react-bootstrap'

const DocTable = () => {
  return (
    <Table id='doc-table' striped hover borderless>
      <thead>
        <Row as='tr'>
          <Col as='th'>Query</Col>
          <Col as='th'>Value</Col>
          <Col as='th'>Description</Col>
        </Row>
      </thead>
      <tbody>
        {queries.map((query, index) => {
          const { name, description, values } = query
          return (
            <Row as='tr' key={index} id={`query-${name}`}>
              <Col as='td' xs={6} md={2} lg={2} className='fw-md'>
                {name}
              </Col>
              <Col as='td' xs={6} md={4} lg={2}>
                {values}
              </Col>
              <Col as='td' xs={12} md={6} lg={8}>
                {description}
              </Col>
            </Row>
          )
        })}
      </tbody>
    </Table>
  )
}

export default DocTable
