import React from 'react'
import Layout from '../components/Layout'
import { withAssetPrefix } from 'gatsby'

const Page = () => {
  return (
    <Layout>
      <section id="careers" className="py-4 bg-black text-light">
        <div className="container">
          <div className='d-flex justify-content-center'>
          <h1 className="text-center mb-3 text-primary">Careers</h1>
          </div>
          <div className='d-flex justify-content-center mb-3'>
            {/* <img
            src={withAssetPrefix("/eventSecurity.png")}
            alt="event-security"
              className="img-fluid w-50 rounded-2"
            /> */}
          </div>
          <p className="lead text-center mb-4">
            At Cerberus Risk Management, our commitment to excellence drives our constant growth and expansion, resulting in a range of exciting career opportunities within our organization. Whether you're a seasoned professional in security services or a newcomer eager to embark on a fulfilling career path, we welcome individuals from diverse backgrounds and experiences. We believe in more than just offering jobs; we provide pathways to rewarding careers. With a culture dedicated to promoting from within, we take pride in nurturing talent and empowering employees to reach their full potential. Join us at Cerberus Risk Management and let us help you achieve your career aspirations by equipping you with the skills and support you need to succeed.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Page