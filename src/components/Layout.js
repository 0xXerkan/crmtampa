import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

let year = new Date().getFullYear();

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Navbar />
      <div className="content">
        { children }
      </div>
      <footer>
        <p>Copyright {year} Gatsby-Tut</p>
      </footer>
    </div>
  )
}

export default Layout