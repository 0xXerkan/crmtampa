import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import RequestAQuote from './RequestAQuote';
import { AnimatePresence } from 'framer-motion';
import { withAssetPrefix } from 'gatsby';

const Navbar = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "unset";
  }, [modalOpen]);

  return (
      <nav className="navbar navbar-expand-lg bg-black navbar-dark sticky-top py-2 border-bottom border-primary border-3">
        <div className="container">
          <Link to="/" className='navbar-brand m-0 p-0'>
            <div className='d-flex align-items-center navbar-brand m-0'>
              <div className="navbar-brand border-end border-light border-2 pe-2 m-0 __nav-small CRM">CRM</div>
              <div className='navbar-brand m-0 mx-1 __nav-small'>
                <img src={withAssetPrefix("/logo.png")} alt="logo" height='46' width='auto' />
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
                <Link to="/#services" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <div aria-hidden="true" className="nav-link" onClick={toggleModal}>Request a Quote</div>
              </li>
              <li className="nav-item">
                <Link to="/#contact" className="nav-link">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/careers" className="nav-link">Careers</Link>
              </li>
              <li className="nav-item">
                <Link to="tel:(656) 224-3903" className="nav-link">
                  <button className='btn btn-primary' type='button'>(656) 224-3903</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <AnimatePresence>
          { modalOpen && <RequestAQuote toggleModal={toggleModal} />}
        </AnimatePresence>
      </nav>
  )
}

export default Navbar