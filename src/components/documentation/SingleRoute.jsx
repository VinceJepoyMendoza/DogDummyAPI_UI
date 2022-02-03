import React from 'react'
import { Accordion } from 'react-bootstrap'
import { BsInfoCircleFill, BsFillQuestionCircleFill } from 'react-icons/bs'
import { transformUrltoId } from './DocSideBar'

const SingleRoute = ({ link, title, description, queries }) => {
  return (
    <article id={transformUrltoId(link)} className='py-5'>
      <h6>{title.toUpperCase()}</h6>
      {/* Route link */}
      <p>
        <span className='d-none d-lg-inline text-muted'>Link: </span>
        <a
          href={`https://dogdummyapi.herokuapp.com${link}`}
          title={`Go to https://dogdummyapi.herokuapp.com${link}`}
          className='doc-links text-secondary text-nowrap  pb-2 mb-1 hover-primary d-block d-lg-inline'
        >
          https://dogdummyapi.herokuapp.com{link}
        </a>
      </p>

      {/* Description/queries accordion */}
      {
        <Accordion defaultActiveKey='0' flush alwaysOpen>
          {description && (
            <Accordion.Item eventKey='0'>
              <Accordion.Header as='pre'>
                <BsInfoCircleFill /> Description
              </Accordion.Header>
              <Accordion.Body className='text-wrap text-muted'>
                {description}
              </Accordion.Body>
            </Accordion.Item>
          )}
          {queries && (
            <Accordion.Item eventKey='1'>
              <Accordion.Header as='pre'>
                <BsFillQuestionCircleFill /> Queries
              </Accordion.Header>
              <Accordion.Body>
                {queries.map((query, index) => (
                  <p key={index} className='m-0 my-2'>
                    {query}
                  </p>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          )}
        </Accordion>
      }
    </article>
  )
}

export default SingleRoute
