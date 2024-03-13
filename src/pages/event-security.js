import React from 'react'
import Layout from '../components/Layout'

const Page = () => {
  return (
    <Layout>
      <section id="services" className="py-4 bg-black text-light">
        <div className="container">
          <div className='d-flex justify-content-center'>
          <h1 className="text-center mb-3 text-primary">Event Safety and Securty</h1>
          </div>
          <div className='d-flex justify-content-center mb-3'>
            <img
            src="/eventSecurity.png"
            alt="event-security"
              className="img-fluid w-50 rounded-2"
            />
          </div>
          <p className="lead text-center mb-4">
            Our highly skilled teams are rigorously trained to execute a diverse range of security-related tasks, tailored to meet the unique needs of any event, irrespective of its size or complexity. Our unwavering commitment to excellence ensures that you can confidently relax and immerse yourself in the spectacle, knowing that our battle-hardened veterans, drawn from some of the most lethal combat teams on the planet, are tirelessly working behind the scenes to ensure your safety and security.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Page