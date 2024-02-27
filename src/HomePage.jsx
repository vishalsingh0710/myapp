import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import "./styles.css"
import Banner from './components/Banner'
import Machines from './components/Machines'

const Homepage = () => {
  return (
    <div className="homepage">
        <Header/>
        <Banner/>
        <Machines/>
        <Footer/>
    </div>
  )
}

export default Homepage
