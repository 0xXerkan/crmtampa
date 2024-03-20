import React from 'react';
import { withAssetPrefix } from 'gatsby';
// import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      {/* Hero Section */} 

      {/* Hero Section LG+ Screen */} 
      <section className='bg-black d-none d-lg-block'>
        <div className="hero-container">
          <div className="hero-content-container">
            <div className="container d-flex h-100 align-items-center  bg-black bg-opacity-50 rounded-5 ">
              {/* <!-- Left --> */}
              <div className="text-light w-50 p-3">
                {/* <h6 className='text-primary'>WELCOME TO CERBERUS RISK MANAGEMENT</h6> */}
                <h1 className='hero-h1'>Secure your<br/>
                  <span className='text-primary hero-text-shadow'>Operations</span>, Safeguard<br/>
                  your <span className='text-primary hero-text-shadow'>Future</span>
                </h1>
                <p className="text-secondary fs-5">This agency, founded by former special operations veterans and executive protection agents, offers
                  executive protection with unmatched expertise and experience. With a focus on precision
                  and excellence, this company prioritizes safety and protection for high-value individuals and
                  organizations.</p>
                <a href='#services' className="btn btn-primary btn-lg">Learn More</a>
              </div>
              {/* <!-- Right --> */}
              <div className="d-flex w-50 justify-content-center">
                <img src={withAssetPrefix('/logo.png')} alt="security"  width={0} height={0} className='rounded-5 w-50' style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </div>

          <div className="hero-bg">
            <img src={withAssetPrefix('/TampaMJ3.png')} alt="" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* Hero Section xs-md Screen */} 
        <section className='bg-black d-lg-none'>
          <div className="hero-container">
            <div className="hero-content-container">
              <div className="container d-flex h-100 align-items-center  bg-black bg-opacity-50 rounded-5 ">
                {/* <!-- Left --> */}
                <div className="text-light p-3">
                  {/* <h6 className='text-primary hero-h6'>WELCOME TO CERBERUS RISK MANAGEMENT</h6> */}
                  <h1 className='hero-h1'>Secure your<br/>
                  <span className='text-primary hero-text-shadow'>Operations</span>, Safeguard<br/>
                  your <span className='text-primary hero-text-shadow'>Future</span>
                  </h1>
                  <p className="text-secondary fs-5">This agency, founded by former special operations veterans and executive protection agents, offers
                  executive protection with unmatched expertise and experience. With a focus on precision
                  and excellence, this company prioritizes safety and protection for high-value individuals and
                  organizations.</p>
                  <a href='#services' className="btn btn-primary btn-lg">Learn More</a>
                </div>
              </div>
            </div>

            <div className="hero-bg">
            <img src={withAssetPrefix('/TampaMJ3.png')} alt="" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </section>
    </>
  )
}

export default Hero