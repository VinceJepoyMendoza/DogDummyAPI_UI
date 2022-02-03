import React from 'react'

const CodeReq = ({ link }) => {
  link = <span className='code-string'>{link}</span>

  return (
    <>
      <span className='code-methods'>fetch</span>('{link}')
      <span className='mx-4 d-block'>
        .<span className='code-methods'>then</span>((resp) =&gt; resp.
        <span className='code-methods'>json()</span>)
      </span>
      <span className='mx-4 d-block'>
        .<span className='code-methods'>then</span>((data) =&gt; console.
        <span className='code-methods'>log</span>(data))
      </span>
    </>
  )
}

export default CodeReq
