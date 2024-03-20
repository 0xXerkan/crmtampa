import React, { useState } from 'react';
import { Link } from 'gatsby';
import RequestAQuote from './RequestAQuote';

const Navbar = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black navbar-dark sticky-top py-2 border-bottom border-primary border-3">
        <div className="container">
          <Link to="/" className='navbar-brand m-0 p-0'>
            <div className='d-flex align-items-center navbar-brand m-0'>
              <div className="navbar-brand border-end border-light border-2 pe-2 m-0 __nav-small">CRM</div>
              <div className='navbar-brand m-0 mx-1 __nav-small'>
                <img src="/logo.png" alt="logo" height='46' width='auto' />
              </div>
              <div className="navbar-brand m-0 __nav-small">Cerberus Risk Management</div>
            </div>
          </Link>


          <button className="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav ms-auto d-lg-flex align-items-lg-center">
              <li className="nav-item">
                <a href="/#services" className="nav-link">Services</a>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={toggleModal}>Request a Quote</div>
              </li>
              <li className="nav-item">
                <a href="/#contact" className="nav-link">Contact Us</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Careers</a>
              </li>
              <li className="nav-item">
                <a href="tel:(401) 588-2449" className="nav-link">
                  <button className='btn btn-primary' type='button'>(401) 588-2449</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      { modalOpen && <RequestAQuote toggleModal={toggleModal} />}
    </div>
  )
}

export default Navbar