import React from 'react'
import Contact from './Contact';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Contact />
      <div className="ntsa-widget">
        <iframe src="https://www.dhs.gov/ntas/" name="National Terrorism Advisory System" title="National Terrorism Advisory System" width="170" height="180" scrolling="no" frameBorder="0" seamless border="0"></iframe>
      </div>

      <section id="copyright" className="py-4 bg-black text-primary">
        <div className='container text-center'>
        <p><i className="bi bi-c-circle"> </i>{year} CERBERUS RISK MANAGEMENT. All Rights Reserved</p>
        </div>
      </section>
    </>
  )
}

export default Footer