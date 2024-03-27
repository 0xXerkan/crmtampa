import React from 'react'
import Layout from '../components/Layout'
import { Link, withAssetPrefix } from 'gatsby'

const Page = () => {
  return (
    <Layout>
      <section id="careers" className="py-4 bg-black text-light">
        <div className="container">
          <div className='d-flex justify-content-center'>
          <h1 className="text-center mb-3 text-primary">Careers</h1>
          </div>
          <div className='d-flex justify-content-center mb-3'>
            <img
            src={withAssetPrefix("/eventSecurity.png")}
            alt="event-security"
              className="img-fluid w-50 rounded-2"
            />
          </div>
          <p className="lead text-center mb-4">
            At Cerberus Risk Management, our commitment to excellence drives our constant growth and expansion, resulting in a range of exciting career opportunities within our organization. Whether you're a seasoned professional in security services or a newcomer eager to embark on a fulfilling career path, we welcome individuals from diverse backgrounds and experiences. We believe in more than just offering jobs; we provide pathways to rewarding careers. With a culture dedicated to promoting from within, we take pride in nurturing talent and empowering employees to reach their full potential. Join us at Cerberus Risk Management and let us help you achieve your career aspirations by equipping you with the skills and support you need to succeed.
          </p>

          <div className='d-flex justify-content-center'>
            <h2 className='mb-3 text-primary'>Open Positions</h2>
          </div>

          <div className='border-start border-primary border-5 ps-3 '>
            <h3>Security Officer</h3>
            <p className='fw-bold text-primary'>Job Description:</p>
            <p>Cerberus Risk Management is seeking a diligent and proactive Security Officer to join our team. As a Security Officer, you will be responsible for safeguarding our premises, assets, and personnel against theft, vandalism, and unauthorized access. Your primary duties will include monitoring surveillance equipment, patrolling the premises, and conducting security checks to ensure a safe and secure environment.</p>

            <p>The ideal candidate will possess excellent observation skills, strong attention to detail, and the ability to remain calm and composed under pressure. Additionally, you must have strong communication skills to effectively interact with employees, visitors, and law enforcement personnel when necessary. Prior experience in security or law enforcement is preferred, and a valid security license or certification is required. Join us at Cerberus Risk Management and play a crucial role in maintaining the security and integrity of our organization.</p>

            <p className='fw-bold text-primary'>Requirements:</p>

            <ul>
              <li>High school diploma or equivalent</li>
              <li>Strong customer service & communications skills</li>
              <li>At least 18 years old</li>
              <li>"D" Unarmed License required for a Security Position</li>
              <li>We welcome candidates from outside the security industry to apply for our career opportunities.</li>
            </ul>

            <p>If you would like to become a part of our dedicated team and contribute to our mission of ensuring safety and security at Cerberus Risk Management, <span className='fw-bold'>please <Link to='/application'>submit an application</Link></span>.</p>
            <Link to='/application' className="btn btn-primary btn-lg">Apply Now</Link>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default Page