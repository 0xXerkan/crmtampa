import React from 'react';
import { Link } from 'gatsby';
import { withAssetPrefix } from 'gatsby';


const ServiceCard = ({ title, imgUrl, desc, linkTo }) => {
  return (
    <div className="col-md-6 col-xxl-3 d-flex">
        <div className="card bg-dark text-light service-card">
          <div className="card-body">
            <h3 className="card-title mb-3">{title}</h3>
            <div className="card-img mb-3">
              <img src={withAssetPrefix(imgUrl)} alt="security-guard"
                className="img-fluid __service-card-img rounded-2" />
            </div>
            <p className="card-text">{desc}</p>
            <Link to={linkTo} className="btn btn-primary">Learn More</Link>
          </div>
        </div>
    </div>
  )
}

const Services = () => {
  return ( 
      <section id="services" className="py-4 bg-black text-light">
        <div className="container">
          <div className='d-flex justify-content-center'>
            <h1 className="text-center mb-3 text-primary">Services</h1>
          </div>
          <p className="lead text-center mb-4">
            We offer a number of services to meet your needs and are equiped to
            accomodate both large scale and small operations
          </p>
          
          <div className="row text-center justify-content-center g-4 d-flex">
            <ServiceCard 
              title="Guard Services"
              imgUrl='/guardServices_300.png'
              desc='Investing in our security services can protect businesses such as restaurants and bars, with trained
              personnel to prevent incidents, handle difficult situations, and ultimately improve the customer
              experience and business reputation.'
              linkTo='/guard-services'
            />

            <ServiceCard 
              title="Executive Protection"
              imgUrl='/executiveSecurity_300.png'
              desc='Our special operations veterans offer exceptional executive protection for high-value personnel due to
              their training and experience in identifying and mitigating potential threats while maintaining a low
              profile.'
              linkTo='/executive-protection'
            />

            <ServiceCard 
              title="Event Safety and Security"
              imgUrl='/eventSecurity_300.png'
              desc='Our highly skilled and battle-hardened veteran teams execute diverse security tasks, tailored to any
              event size or complexity, ensuring safety and security while you relax and enjoy the spectacle.'
              linkTo='/event-security'
            />

            {/* <ServiceCard 
              title="AI Driven Data Analytics Recruitment"
              imgUrl={Analytics}
              desc='Our AI/LLM-driven recruitment and digital analytics company provides businesses with the tools they need
              to make informed hiring decisions. Our data-driven approach, powered by cutting-edge artificial
              intelligence and machine learning technology, enables us to identify top candidates quickly and
              efficiently.'
              linkTo='/recruitment'
            /> */}

            <ServiceCard 
              title="Armored Vehicles"
              imgUrl='/ac2_300.jpeg'
              desc='Introducing our latest innovation in vehicle security: Level B6 Up Armored Vehicles. Engineered to
              provide unparalleled protection without compromising performance, these formidable vehicles are designed
              to withstand the most demanding environments and ensure the safety of their occupants.'
              linkTo='/armored-vehicles'
            />

          </div>         
        </div>
      </section>
  )
}

export default Services