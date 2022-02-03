import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Docs from './pages/Docs'

// Components
import NavbarGlobal from './components/global/NavbarGlobal'
import Footer from './components/global/Footer'
import ScrollToTopBtn from './components/global/ScrollToTopBtn'
import Banner from './components/global/Banner'
import { useGlobalContext } from './context'

const App = () => {
  const { fetchDogById } = useGlobalContext()
  useEffect(() => {
    fetchDogById()
  }, [fetchDogById])

  return (
    <>
      <Router>
        <NavbarGlobal />
        <Banner />
        <Routes>
          <Route path='/' element={<Navigate to='/get-started' />} />
          <Route path='/get-started' element={<Home />} />
          <Route path='/docs' element={<Docs />} />
        </Routes>
        {/* Scroll to top button */}
        <ScrollToTopBtn />
        <Footer />
      </Router>
    </>
  )
}

export default App
