import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { WebPageProvider } from '../../Context'
import Navbar from '../../Components/Navbar'
import Home from '../Home'

const App = () => {
  return (
    <>
      <HashRouter>
        <WebPageProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          {/* <CheckoutSideMenu /> */}
          {/* <Footer /> */}
        </WebPageProvider>
      </HashRouter>
    </>
  )
}

export default App
