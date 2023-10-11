import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Content from '../components/content'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div className='Home'>
        <Navbar />
        <Banner />
        <Content />
        <Footer />
    </div>
  )
}

export default Home;