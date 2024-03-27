import React from 'react'
import { withAssetPrefix, Link } from 'gatsby';

const Page = () => {
  return (
      <section id="application" className="py-4 bg-black text-light">
        <div className="container">
          <div className='my-5 application-form-container'>
            <div className="col-md">
              <div className="card">
                <div className="card-body p-4">
                  <div className='d-flex justify-content-center'>
                    <img src={withAssetPrefix("/logo.png")} alt="logo" height='80' width='auto' className='my-3 rounded-5' />
                  </div>
                  <p>We've made the job application process quick and easy. Take a moment to fill out the application below, and let's get started on the journey together. Your skills and talents are exactly what we're looking for, and we can't wait to learn more about you!</p>
                  <form action="https://formsubmit.co/31aee523a5e7db1381cf87d0da5ebbc5" method="POST" className='application-form'>
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="text" name="_honey" style={{display: 'none'}} />
                    {/* <!-- edit redirect location for production --> */}
                    <input type="hidden" name="_next" value="https://www.crmtampa.com/thankyou" />


                    <label htmlFor="first_name" className=''>First Name</label>
                    <input type="text" id="first_name" name="first_name" required className="form-control" />

                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" id="last_name" name="last_name" required className="form-control" />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required className="form-control" />

                    <label htmlFor="address">Street Address</label>
                    <input type="text" id="address" name="address" required className="form-control" />

                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" required className="form-control" />

                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" required className="form-control" />

                    <label htmlFor="zip">Zip Code</label>
                    <input type="text" id="zip" name="zip" required className="form-control" />

                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required className="form-control" />

                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender" required className="form-control">
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" id="dob" name="dob" required className="form-control" />

                    <label htmlFor="class_d_license">Security Class-D License Number</label>
                    <input type="text" id="class_d_license" name="class_d_license" className="form-control" />

                    <label htmlFor="class_g_license">Security Class-G License Number (if applicable)</label>
                    <input type="text" id="class_g_license" name="class_g_license" className="form-control" />

                    <div className='d-flex justify-content-between'>
                      <button className="btn btn-primary mt-2">Submit Application</button>
                      <Link to='/' className='mt-auto'>Back to Home<i class="bi bi-chevron-right"></i></Link>
                    </div>

                  </form>
                </div>
              </div>
            </div>

          </div>



        </div>
      </section>
  )
}

export default Page