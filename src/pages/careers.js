import React from 'react'
import Layout from '../components/Layout'
import { Link, withAssetPrefix } from 'gatsby'
import { Seo } from "../components/Seo";

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
          <p className="text-center mb-4">
            Cerberus Risk Management is actively seeking to expand our team by hiring qualified guards who possess a strong background in security, law enforcement (LEO), and military operations. We have a particular interest in individuals whose experience includes infantry, intelligence, counterintelligence, and signals. Our ideal candidates are those who have served within CENTCOM (U.S. Central Command), SOCOM (U.S. Special Operations Command), or JSOC (Joint Special Operations Command), reflecting our commitment to excellence and the complexity of the environments we operate in. At Cerberus, we value the unique skills, discipline, and perspectives that veterans from these specialized areas bring to our operations, aiming to enhance our capabilities in managing and mitigating risks in a dynamic global landscape. Join us in our mission to provide unparalleled security solutions by leveraging your expertise and experience in these critical fields.
          </p>

          <p className="text-center mb-4">
            <Link to='/application' className="btn btn-primary btn-lg">Apply Now</Link>
          </p>

          <p className='text-center mb-4'>
            Must Possess Florida D Security License to apply. Florida G license preferred and will fast track their progression into Executive Protection. Must be willing to undergo G License course for career progression. Must possess active license for application. Must be willing to fill out a W-9 and have an active bank account in order to receive payments.
          </p>

          <div className='d-flex justify-content-center'>
            <h2 className='mb-3 text-primary'>Open Positions</h2>
          </div>

          <div className='border-start border-primary border-5 ps-3 mb-5 '>
            <h3>CCTV Security Agent</h3>
            <p className='fw-bold text-primary'>Job Description:</p>
            <p>Cerberus Risk Management is seeking a diligent and proactive CCTV Security Guard to join our team. As a CCTV Security Guard, you will be responsible for monitoring surveillance equipment, reviewing footage, and ensuring the safety of our premises, assets, and personnel. Your primary duties will include operating and maintaining CCTV systems, identifying and responding to suspicious activities, and coordinating with on-site security personnel.</p>

            <p>The ideal candidate will possess excellent observation skills, strong attention to detail, and the ability to remain calm and composed under pressure. Additionally, you must have strong communication skills to effectively interact with clients, vendors, executives, employees, law enforcement, and visitors. CRM is a concierge service that adds value to our security services. We hire people who, in the pursuit of excellent safety protocols, also possess the ability to offer 5-star amenity services to visitors and our entire team. Prior experience in security or law enforcement is preferred, and a valid security license or certification is required. Join us at Cerberus Risk Management to play a crucial role in maintaining the security and integrity of our organization, our state, and our nation.</p>

            <p className='fw-bold text-primary'>Requirements:</p>
            <ul>
              <li>High school diploma or equivalent</li>
              <li>Strong customer service & communications skills</li>
              <li>At least 21 years old</li>
              <li>"D" Unarmed License required for a Security Position</li>
            </ul>
            <p className='fw-bold text-primary'>Preferred:</p>
            <ul>
              <li>"G" License (priority for promotions)</li>
              <li>College Education</li>
              <li>Military Experience</li>
              <li>LEO Experience</li>
              <li>Government Experience</li>
              <li>Paramedic Experience </li>
            </ul>

            <p>If you would like to become a part of our dedicated team and contribute to our mission of ensuring safety and security at Cerberus Risk Management, <span className='fw-bold'>please <Link to='/application'>submit an application</Link></span>.</p>
            <Link to='/application' className="btn btn-primary btn-lg">Apply Now</Link>
          </div>
          
          <div className='d-flex justify-content-center mb-5'>
            <div className='w-50 border border-1'></div>
          </div>

          <div className='border-start border-primary border-5 ps-3 mb-5 '>
            <h3>Roving Armed Security Agent</h3>
            <p className='fw-bold text-primary'>Job Description:</p>
            <p>Cerberus Risk Management is seeking a diligent and proactive Roving Armed Security Agent to join our team. As a Roving Armed Security Agent, you will be responsible for patrolling our premises, safeguarding assets, and ensuring the safety of our personnel. Your primary duties will include conducting security checks, responding to incidents, and providing a visible security presence to deter potential threats.</p>

            <p>The ideal candidate will possess excellent observation skills, strong attention to detail, and the ability to remain calm and composed under pressure. Additionally, you must have strong communication skills to effectively interact with clients, vendors, executives, employees, law enforcement, and visitors. CRM is a concierge service that adds value to our security services. We hire people who, in the pursuit of excellent safety protocols, also possess the ability to offer 5-star amenity services to visitors and our entire team. Prior experience in security or law enforcement is preferred, and a valid security license or certification is required. Join us at Cerberus Risk Management to play a crucial role in maintaining the security and integrity of our organization, our state, and our nation.</p>

            <p className='fw-bold text-primary'>Requirements:</p>
            <ul>
              <li>High school diploma or equivalent</li>
              <li>Strong customer service & communications skills</li>
              <li>At least 21 years old</li>
              <li>"D" & "G" Armed License required for the Security Position</li>
            </ul>
            <p className='fw-bold text-primary'>Preferred:</p>
            <ul>
              <li>College Education</li>
              <li>Military Experience</li>
              <li>LEO Experience</li>
              <li>Government Experience</li>
              <li>Paramedic Experience </li>
            </ul>

            <p>If you would like to become a part of our dedicated team and contribute to our mission of ensuring safety and security at Cerberus Risk Management, <span className='fw-bold'>please <Link to='/application'>submit an application</Link></span>.</p>
            <Link to='/application' className="btn btn-primary btn-lg">Apply Now</Link>
          </div>

          <div className='d-flex justify-content-center mb-5'>
            <div className='w-50 border border-1'></div>
          </div>

          <div className='border-start border-primary border-5 ps-3 mb-5 '>
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

          <div className='border-start border-primary border-5 ps-3 mb-5 '>
            <h3>On Call / Event</h3>
            <p className='fw-bold text-primary'>Job Description:</p>
            <p><strong>Cerberus Risk Management is hiring a qualified candidate to work ON CALL/EVENT HOURS at Armature Works, The Attic, and other locations. Please indicate days and times you are available to accept work opportunities.</strong></p>
            
            <p>D License for unarmed On Call/Event positions.<br/>
            G License for armed On Call/Event positions.</p>

            <p>Cerberus Risk Management (CRM) emulates a military leadership structure and values attention to detail. We implement 5-star standards and expect our employees to adhere to those standards. Candidates who demonstrate leadership skills, attention to detail, and the ability to go above and beyond their duties will be considered for leadership positions within our organization.</p>

            <p>As a special operations veteran-owned business, this position serves as a career stepping stone into Department of Defense Federal contracted security jobs. We expect you to rise through the ranks with us. If you believe you have the intestinal fortitude to work within the confines of our organization, you will work towards a financially rewarding and ethically fulfilling career. Our service, compliance goals, and attention to detail set us apart from our competition.</p>

            <p className='fw-bold text-primary'>Requirements:</p>
            <ul>
              <li>High school diploma or equivalent</li>
              <li>Strong customer service & communications skills</li>
              <li>At least 21 years old</li>
              <li>D License required for unarmed security positions</li>
              <li>G License required for armed security positions</li>
            </ul>
            <p className='fw-bold text-primary'>Preferred:</p>
            <ul>
              <li>G License preferred for unarmed positions</li>
              <li>College Education</li>
              <li>Military Experience</li>
              <li>Law enforcement officer (LEO) experience</li>
              <li>Government Experience</li>
              <li>Paramedic Experience </li>
            </ul>

            <p>Do you think you can stand alongside some of the nation's finest Special Operations Veterans, SWAT officers, and DoD Hostage Rescue Team operators? If you believe that's you, then we would love to hear from you! <span className='fw-bold'>Please <Link to='/application'>submit an application</Link></span>.</p>
            <Link to='/application' className="btn btn-primary btn-lg">Apply Now</Link>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export const Head = () => (
  <>
  <Seo title="Careers" />
  </>
)

export default Page