import { useState } from 'react'
import './App.css'
import DestinationContainer from './components/DestinationContainer'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Search from './components/Search'


function App() {

  return (
   <>
   <Routes>
     <Route path="/" element={<DestinationContainer />} />
        <Route path="Search" element={<Search />} />
        <Route path="LogIn" element={<LogIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="DestinationContainer" element={<DestinationContainer />} />
   </Routes>
    <Footer />
   </>
  )
}

export default App
