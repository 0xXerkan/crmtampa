import React from 'react'

const RequestAQuote = ({ toggleModal }) => {
  return (
    <div className='modal-wrapper'>
      <section id="request-a-quote" className="py-4 bg-black text-light">
        <div className="container">
          <div className="d-flex justify-content-center">
            <h1 className="text-center mb-3 text-primary">Request a Quote</h1>
          </div>
          <p className="lead text-center mb-4">
            Looking for services? Let us know what you need by filling out the
            form below and one of our agents will get in touch with you!
          </p>
          <div className="card quote-form-container">
            <div className="card-body">
              <form
                className="quote-form"
                action="https://formsubmit.co/31aee523a5e7db1381cf87d0da5ebbc5"
                method="POST"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} />
                {/* <!-- edit redirect location for production --> */}
                <input
                  type="hidden"
                  name="_next"
                  value="https://www.crmtampa.com/thankyou"
                />

                <div className="d-flex gap-3 group">
                  <div className="flex-grow-1 item">
                    <label htmlFor="firstname">First Name</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1 item">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      required
                      className="form-control"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-control"
                  />
                </div>

                <div>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="form-control"
                  />
                </div>

                <div>
                  <label htmlFor="service">
                    What services are you looking for?
                  </label>
                  <select
                    name="service"
                    id="service"
                    required
                    className="form-select"
                  >
                    <option selected disabled>
                      Please select an option
                    </option>
                    <option value="guard">Guard Services</option>
                    <option value="executive">Executive Protection</option>
                    <option value="event">Event Safety and Security</option>
                    <option value="vehicles">Armored Vehicles</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Additional details about your request
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="form-control"
                    placeholder=""
                  ></textarea>
                </div>
                <button className="btn btn-primary mt-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RequestAQuote;
