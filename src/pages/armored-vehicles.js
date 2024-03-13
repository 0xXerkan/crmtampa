import React from 'react'
import Layout from '../components/Layout'

const Page = () => {
  return (
    <Layout>
      <section id="services" className="py-4 bg-black text-light">
        <div className="container">
          <div className='d-flex justify-content-center'>
            <h1 className="text-center mb-3 text-primary">Armored Vehicles</h1>
          </div>
          <div className='d-flex justify-content-center mb-3'>
            <img src="/ac2_2.webp" alt="armored-vehicles" className="img-fluid w-50 rounded-2" />
          </div>
          <p className="lead text-center mb-4">
            Introducing our latest innovation in vehicle security: Level B6 Up Armored Vehicles<br/>
            Engineered to provide
            unparalleled protection without compromising performance, these formidable vehicles are designed to withstand
            the most demanding environments and ensure the safety of their occupants. With advanced armor plating, ballistic
            glass, and reinforced structural integrity, our Level 4 Up Armored Vehicles offer a superior defense against a
            wide range of threats, including armor-piercing rifle rounds up to .30-06 M2 AP, high-velocity projectiles,
            explosive devices, and hostile environments. Equipped with state-of-the-art technology, these vehicles feature
            advanced communication systems, surveillance capabilities, and enhanced mobility, empowering you to navigate
            challenging terrains with confidence. Trust in our Level B6 Up Armored Vehicles to safeguard your mission,
            protect your personnel, and elevate your security to new heights.
          </p>
          <div className="row text-center justify-content-center d-flex">
            <div className="col">
              <img src="/ac1_600.jpeg" alt="armored-vehicles" className="img-fluid rounded-2" />
            </div>
            <div className="col">
              <img src="/ac4_600.jpeg" alt="armored-vehicles" className="img-fluid rounded-2" />
            </div>
            <div className="col">
              <img src="/ac5_600.jpeg" alt="armored-vehicles" className="img-fluid rounded-2" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Page