import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import allRoutes from '../../jsons/all-routes.json'
import recommended from '../../jsons/recommended.json'
import queries from '../../jsons/queries.json'

const DocSideBar = () => {
  const [active, setActive] = useState('#route-dogs')
  return (
    <Nav
      variant='pills'
      defaultActiveKey='#route-dogs'
      className='bg-white sticky-top pb-3'
      as='ul'
      id='doc-sidebar'
      onSelect={(e) => setActive(e)}
    >
      <a href='#recommended-heading' className='text-decoration-none'>
        <h6 className='pt-3 pb-1 text-secondary px-3'>Top routes</h6>
      </a>
      {/* Recommended */}
      {recommended.map((route, index) => {
        const { link, title } = route
        return (
          <Nav.Item as='li' key={index}>
            <Nav.Link
              href={`#${transformUrltoId(link)}`}
              className={
                active === `#${transformUrltoId(link)}`
                  ? 'text-white'
                  : 'text-dark'
              }
            >
              {title}
            </Nav.Link>
          </Nav.Item>
        )
      })}

      {/* All routes */}
      <a href='#routes-heading' className='text-decoration-none'>
        <h6 className='pt-3 pb-1 text-secondary px-3'>All routes</h6>
      </a>
      {allRoutes.map((route, index) => {
        const { link, title } = route
        return (
          <Nav.Item as='li' key={index}>
            <Nav.Link
              href={`#${transformUrltoId(link)}`}
              className={
                active === `#${transformUrltoId(link)}`
                  ? 'text-white'
                  : 'text-dark'
              }
            >
              {title}
            </Nav.Link>
          </Nav.Item>
        )
      })}

      {/* All queries */}
      <a href='#query-heading' className='text-decoration-none'>
        <h6 className='pt-3 pb-1 text-secondary px-3'>All Queries</h6>
      </a>

      {queries.map((query, index) => {
        const { name } = query
        return (
          <Nav.Item as='li' key={index}>
            <Nav.Link
              href={`#query-${name}`}
              className={
                active === `#query-${name}` ? 'text-white' : 'text-dark'
              }
            >
              {name}
            </Nav.Link>
          </Nav.Item>
        )
      })}
    </Nav>
  )
}

export const transformUrltoId = (link) =>
  `route${link.split('/').join('-').replace('?', '')}`

export default DocSideBar
