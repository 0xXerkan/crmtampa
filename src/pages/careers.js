import React from 'react'
import Layout from '../components/Layout'
import { Link, withAssetPrefix } from 'gatsby'

// const openPositions = [
//   {
//     title: 'Title',
//     description: [
//       'paragraph 1',
//       'paragraph 2'
//     ],
//     requirements: [
//       1,2,3,4,5
//     ],
//     preferred: [
//       1,2,3,4,5
//     ]
//   }
// ]

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
            src={withAssetPrefix("/careers.png")}
            alt="event-security"
              className="img-fluid rounded-2 career-img"
            />
          </div>
          <p className="lead text-center mb-4">
            Cerberus Risk Management is actively seeking to expand our team by hiring qualified guards who possess a strong background in security, law enforcement (LEO), and military operations. We have a particular interest in individuals whose experience includes infantry, intelligence, counterintelligence, and signals. Our ideal candidates are those who have served within CENTCOM (U.S. Central Command), SOCOM (U.S. Special Operations Command), or JSOC (Joint Special Operations Command), reflecting our commitment to excellence and the complexity of the environments we operate in. At Cerberus, we value the unique skills, discipline, and perspectives that veterans from these specialized areas bring to our operations, aiming to enhance our capabilities in managing and mitigating risks in a dynamic global landscape. Join us in our mission to provide unparalleled security solutions by leveraging your expertise and experience in these critical fields.
          </p>
          <p className='lead text-center mb-4'>
            Must Possess Florida D Security License to apply. Florida G license preferred and will fast track their progression into Executive Protection. Must be willing to undergo G License course for career progression. Must possess active license for application. Must be willing to fill out a W-9 and have an active bank account in order to receive payments.
          </p>

          <div className='d-flex justify-content-center'>
            <h2 className='mb-3 text-primary'>Open Positions</h2>
          </div>

          <div className='border-start border-primary border-5 ps-3 '>
            <h3>Security Officer</h3>
            <p className='fw-bold text-primary'>Job Description:</p>
            <p>Cerberus Risk Management is seeking a diligent and proactive Security Officer to join our team. As a Security Officer, you will be responsible for safeguarding our premises, assets, and personnel against theft, vandalism, and unauthorized access. Your primary duties may include include checking identification, monitoring surveillance equipment, patrolling the premises, and conducting security checks to ensure a safe and secure client & work environment.</p>

            <p>The ideal candidate will possess excellent observation skills, strong attention to detail, and the ability to remain calm and composed under pressure. Additionally, you must have strong communication skills to effectively interact with clients, vendors, executives, employees, law enforcement, and most importantly visitors. CRM is a concierge service to that adds value to our security services. We hire people who in the pursuit of excellent safety protocols, also possess the ability to offer 5 star amenity services to visitors, and our entire team. Prior experience in security or law enforcement is preferred, and a valid security license or certification is required. Join us at Cerberus Risk Management if you want to try and play a crucial role in maintaining the security and integrity of our organization, our state, and our nation.</p>

            <p className='fw-bold text-primary'>Requirements:</p>
            <ul>
              <li>High school diploma or equivalent</li>
              <li>Strong customer service & communications skills</li>
              <li>At least 21 years old</li>
              <li>"D" Unarmed License required for a Security Position</li>
            </ul>
            <p className='fw-bold text-primary'>Preferred:</p>
            <ul>
              <li>"G" License</li>
              <li>College Education</li>
              <li>Military Experience</li>
              <li>LEO Experience</li>
              <li>Government Experience</li>
              <li>Paramedic Experience </li>
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