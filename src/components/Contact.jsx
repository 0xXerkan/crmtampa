import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-4 bg-black text-light">
      <div className="container">
        <div className='h1 text-center mb-4 text-primary'>Contact Us</div>
        <div className="row g-4">
          <div className="col-md text-primary">
            <div className='border-start border-light border-5 ps-3'>
              <div className='lead'><span className="fw-bold text-light">Mailing Address:</span> 7901 4th St N, Suite 300, St.
                Petersburg, FL</div>
              <div className='lead'><span className="fw-bold text-light">Phone:</span> (401) 588-2449</div>
              <div className='lead'><span className="fw-bold text-light">Email:</span> info@crmtampa.com</div>
            </div>
          </div>

          <div className="col-md">
            <div className="card">
              <div className="card-body">
                <form action="https://formsubmit.co/31aee523a5e7db1381cf87d0da5ebbc5" method="POST">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="text" name="_honey" style={{display: 'none'}} />
                  {/* <!-- edit redirect location for production --> */}
                  <input type="hidden" name="_next" value="https://www.crmtampa.com/thankyou" />


                  <label htmlFor="name">Name</label>
                  <input type="text" id='name' name='name' required className='form-control' />

                  <label htmlFor="email">Email</label>
                  <input type="email" id='email' name='email' required className='form-control' />

                  <label htmlFor="message" className='form-label'>Message</label>
                  <textarea id='message' name='message' required className='form-control' placeholder=''></textarea>
                  <button className='btn btn-primary mt-2'>Submit</button>

                </form>

              </div>


            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact