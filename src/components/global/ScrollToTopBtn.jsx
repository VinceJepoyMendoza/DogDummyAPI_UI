import React, { useEffect, useRef } from 'react'
import { Button } from 'react-bootstrap'
import { HiArrowNarrowUp } from 'react-icons/hi'

const ScrollToTopBtn = () => {
  const scrollBtn = useRef(null)
  useEffect(() => {
    const scroll = window.addEventListener('scroll', scrollListener)

    return () => scroll.removeEventListener('scroll', scrollListener)
  }, [])

  const scrollListener = () => {
    if (window.scrollY > 100) {
      scrollBtn.current.style.transform = 'translateX(-1rem)'
    } else {
      scrollBtn.current.style.transform = 'translateX(calc(100% + 1rem))'
    }
  }

  return (
    <Button
      id='scrollToTopBtn'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      ref={scrollBtn}
    >
      <HiArrowNarrowUp className='fs-4' />
    </Button>
  )
}

export default ScrollToTopBtn
