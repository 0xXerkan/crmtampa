import React from 'react'
import Navbar from './Navbar'
import UpperNavbar from './UpperNavbar'
import Footer from './Footer'
import { Script } from 'gatsby'
import '../styles/globals.css'
import '../styles/custom.css'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <UpperNavbar />
      <Navbar />
      <div className="content">
        { children }
      </div>
      <Footer />
      {/* <!-- Start of Tawk.to Script--> */}
      <Script 
        type="text/javascript" id='Tawkto'>{`
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
          var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
          s1.async = true;
          s1.src = 'https://embed.tawk.to/644fc6b031ebfa0fe7fb5ece/1gvbq0853';
          s1.charset = 'UTF-8';
          s1.setAttribute('crossorigin', '*');
          s0.parentNode.insertBefore(s1, s0);
        })();`}
      </Script>
      {/* <!--End of Tawk.to Script --> */}
    </div>
  )
}

export default Layout