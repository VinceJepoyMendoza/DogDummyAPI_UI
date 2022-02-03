import React from 'react'
import HomeHeader from '../components/home/HomeHeader'
import HomeAbout from '../components/home/HomeAbout'
import Code from '../components/global/Code'
import Resources from '../components/home/Resources'
import { Container } from 'react-bootstrap'
import { useGlobalContext } from '../context'

const Home = () => {
  const { dogId } = useGlobalContext()

  return (
    <Container as='main' id='home' className='py-5 mt-lg-5'>
      {/* Infos and buttons */}
      <HomeHeader />
      {/* Info */}
      <HomeAbout />
      {/* Sample code */}
      <Code output={dogId} />
      {/* Main resources */}
      <Resources />
    </Container>
  )
}

export default Home
