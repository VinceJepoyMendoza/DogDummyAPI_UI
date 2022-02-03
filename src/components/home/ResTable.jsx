import React from 'react'
import resources from '../../jsons/main-routes.json'
import { Table } from 'react-bootstrap'

const ResTable = () => {
  return (
    <Table striped hover borderless className='mt-4 mt-lg-0'>
      <tbody>
        {/* Resources */}
        {resources.map((source, index) => {
          const { method, path, link, title, length } = source
          return (
            <tr key={index}>
              <td>{method}</td>
              <td>
                <a
                  href={link}
                  title={title}
                  target='_blank'
                  rel='noreferrer'
                  className='text-secondary'
                >
                  /{path}
                </a>
              </td>
              <td>{length} items</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default ResTable
