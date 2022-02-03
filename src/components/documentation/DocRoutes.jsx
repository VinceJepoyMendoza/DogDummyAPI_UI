import React from 'react'
import allRoutes from '../../jsons/all-routes.json'
import recommended from '../../jsons/recommended.json'
import SingleRoute from './SingleRoute'

const DocRoutes = () => {
  return (
    <>
      <h6 className='title-underline fs-4 mb-3' id='recommended-heading'>
        Top routes
      </h6>
      {/* Top/Recommended routes */}
      {recommended.map((route, index) => {
        const { link, title, description, queries } = route
        return (
          <SingleRoute
            link={link}
            title={title}
            description={description}
            queries={queries}
            key={index}
          />
        )
      })}
      {/* All routes */}
      <h6 className='title-underline pt-4 fs-4 mb-3' id='routes-heading'>
        All routes including queries
      </h6>
      {allRoutes.map((route, index) => {
        const { link, title, description, queries } = route
        return (
          <SingleRoute
            link={link}
            title={title}
            description={description}
            queries={queries}
            key={index}
          />
        )
      })}
    </>
  )
}

export default DocRoutes
