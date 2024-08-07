import React, {useState} from 'react'
import { withAssetPrefix, Link } from 'gatsby';
import { Seo } from "../components/Seo";

const Page = () => {
  //isLoading state for button
  const [isLoading, setIsLoading] = useState(false);
  //submitSuccess for form change and redirect
  const [submitSuccess, setSubmitSuccess] = useState(false);

  //perform validation
  //submit data to google sheet
  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    const form = document.getElementById('application-form');
    const data = new FormData(form);
    const isOnCall = (data.get('position') === "On Call / Event");

    //dev
    // const action = "https://script.google.com/macros/s/AKfycbxo9Q1KDF9_ibGPodn_gx-MIpJ02LSBf4LDt4Y17n8purMo56akNohkC0NkKAm9X7HP/exec";
    //prod
    const onCallScriptUrl = "https://script.google.com/macros/s/AKfycbx2rFiV1QCyC7S6x0N8NCPynY_vtn3tDvh8hxTPnJ6ipNDRZzVnsWa-5kETGB1IqRlE/exec"
    const applicationScriptUrl = "https://script.google.com/macros/s/AKfycbydtHEHJMfj31n4B4M_TUeT9wyYJO0Lg0IDeFvU_eOUWjFUcD2V1A9e_tsc2K4oms_E5A/exec";

    const action = isOnCall ? onCallScriptUrl : applicationScriptUrl;
    
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      setSubmitSuccess(true);      
    })
    .catch(() => {
      alert("There was an error submitting the form. Please try again later")
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  const ApplicationForm = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [zip, setZip] = useState('');
    const [isOtherChecked, setIsOtherChecked] = useState(false);

    const handleOtherChange = (event) => {
      setIsOtherChecked(event.target.checked);
    };


    const handleZipChange = (e) => {
      const inputValue = e.target.value.replace(/\D/g, '').substring(0, 5); // Remove non-digit characters, Limit to 5 digits
      setZip(inputValue);
    }

    const handlePhoneChange = (e) => {
      const inputValue = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
      let x = inputValue.match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      console.log(x[1], x[2], x[3]);
      let formattedValue = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      // console.log(formattedValue);
      // console.log(formattedValue.length);
      setPhoneNumber(formattedValue);
    };
    
    return (
      <div>
        <p>We've made the job application process quick and easy. Take a moment to fill out the application below, and let's get started on the journey together. Your skills and talents are exactly what we're looking for, and we can't wait to learn more about you!</p>
        <form
          className='application-form'
          id='application-form'
          onSubmit={handleSubmit}
        >
          {/* <input type="hidden" name="_captcha" value="false" /> */}
          {/* <input type="text" name="_honey" style={{display: 'none'}} /> */}


          <label htmlFor="position" className=''>Position Appying For</label>
          <select defaultValue="" id="position" name="position" required className="form-control">
              <option disabled value="">Please Select</option>
              <option value="CCTV Security Agent">CCTV Security Agent</option>
              <option value="Roving Armed Security Agent">Roving Armed Security Agent</option>
              <option value="Security Officer">Security Officer</option>
              <option value="On Call / Event">On Call / Event</option>
          </select>

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
          <select defaultValue="" id="state" name="state" required className="form-control">
            <option disabled value="">Please Select</option>
            <option value="AK">Alaska</option>
            <option value="AL">Alabama</option>
            <option value="AR">Arkansas</option>
            <option value="AZ">Arizona</option>
            <option value="CA">California</option>
            <option value="CO">Colorada</option>
            <option value="CT">Conneticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="IA">Iowa</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="MA">Massachusetts</option>
            <option value="MD">Maryland</option>
            <option value="ME">Maine</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MO">Missouri</option>
            <option value="MS">Mississippi</option>
            <option value="MT">Montana</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="NE">Nebraska</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NV">Nevada</option>
            <option value="NY">New York</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WI">Wisconsin</option>
            <option value="WV">West Virginia</option>
            <option value="WY">Wyoming</option>    
          </select>

          <label htmlFor="zip">Zip Code</label>
          <input type="text" pattern="[0-9]{5}" title="Please enter a 5-digit zip code" value={zip} onChange={handleZipChange} id="zip" name="zip" required className="form-control" />

          <label htmlFor="phone">Phone Number</label>
          <input type="text" minLength='14' maxLength='14' id="phone" value={phoneNumber} onChange={handlePhoneChange} placeholder="(###) ###-####" title="Please enter a valid 10-digit phone number" name="phone" required className="form-control" />

          <label htmlFor="gender">Gender</label>
          <select defaultValue="" id="gender" name="gender" required className="form-control">
              <option disabled value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
          </select>

          <div className='border p-2 mb-3'>
            <p>What languagues are you fluent in? (Please select all that apply)</p>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type="checkbox" name="english" id='english' value="1" />
              <label className='form-check-label' htmlFor="english">English</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type="checkbox" name="spanish" id='spanish' value="1" />
              <label className='form-check-label' htmlFor="spanish">Spanish</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type="checkbox" id='otherlang' onChange={handleOtherChange} />
              <label className='form-check-label' htmlFor='otherlang' >Other</label>
            </div>
            <div className='form-check-inline'>
              <input className='form-control' type="text" name="lang_other" placeholder="If other, please specify" disabled={!isOtherChecked} />
            </div>
          </div>

          <div className='border p-2 mb-3'>
            <p>Shift Availability: (Please select all that apply)</p>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type="checkbox" name="morning" id='morning' value="1" />
              <label className='form-check-label' htmlFor="morning">Morning</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type="checkbox" name="evening" id='evening' value="1" />
              <label className='form-check-label' htmlFor="evening">Evening</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type="checkbox" name="overnight" id='overnight' value="1" />
              <label className='form-check-label' htmlFor="overnight">Overnight</label>
            </div>
          </div>

          <div className='border p-2 mb-3'>
            <p>Day Availability: (Please select all that apply)</p>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type="checkbox" name="mon" id='mon' value="1" />
              <label className='form-check-label' htmlFor="mon">Mon</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type="checkbox" name="tue" id='tue' value="1" />
              <label className='form-check-label' htmlFor="tue">Tue</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type="checkbox" name="wed" id='wed' value="1" />
              <label className='form-check-label' htmlFor="wed">Wed</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type="checkbox" name="thur" id='thur' value="1" />
              <label className='form-check-label' htmlFor="thur">Thur</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type="checkbox" name="fri" id='fri' value="1" />
              <label className='form-check-label' htmlFor="fri">Fri</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type="checkbox" name="sat" id='sat' value="1" />
              <label className='form-check-label' htmlFor="sat">Sat</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type="checkbox" name="sun" id='sun' value="1" />
              <label className='form-check-label' htmlFor="sun">Sun</label>
            </div>
          </div>

          <label htmlFor="criminal_history">Do you have a Criminal History?</label>
          <select defaultValue="" id="criminal_history" name="criminal_history" required className="form-control">
              <option disabled value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
          </select>

          <label htmlFor="class_d_license">Security Class-D License Number</label>
          <div className='d-flex'>
            <div className="d-flex align-items-center">
              <p>D-</p>
            </div>
            <input type="text" pattern="[0-9]{7}" title='Please enter a valid license number. Enter only the numbers after the "D-" in this field.' id="class_d_license" name="class_d_license" required className="form-control" />
          </div>

          <label htmlFor="class_g_license">Security Class-G License Number (if applicable)</label>
          <div className='d-flex'>
            <div className="d-flex align-items-center">
              <p>G-</p>
            </div>
            <input type="text" pattern="[0-9]{7}" title='Please enter a valid license number. Enter only the numbers after the "G-" in this field.' id="class_g_license" name="class_g_license" className="form-control" />
          </div>

          <label htmlFor="military_experience">Years of Military Experience</label>
          <input type="number" max="100" id="military_experience" name="military_experience" required className="form-control" />

          <label htmlFor="leo_experience">Years of LEO Experience</label>
          <input type="number" max="100" id="leo_experience" name="leo_experience" required className="form-control" />

          <label htmlFor="security_experience">Years of Security Experience</label>
          <input type="number" max="100" id="security_experience" name="security_experience" required className="form-control" />

          <label htmlFor="paramedic_experience">Years of Paramedic Experience</label>
          <input type="number" max="100" id="paramedic_experience" name="paramedic_experience" required className="form-control" />

          <label htmlFor="bjj_training">Years of BJJ Training</label>
          <input type="number" max="100" id="bjj_training" name="bjj_training" required className="form-control" />

          <label htmlFor="boxing_training">Years of Boxing Training</label>
          <input type="number" max="100" id="boxing_training" name="boxing_training" required className="form-control" />

          <label htmlFor="cpr_expiration">If CPR Certified, please enter CPR Certification Expiration Date</label>
          <input type="date" id="cpr_expiration" name="cpr_expiration"  className="form-control" />


          <div className='d-flex justify-content-between'>
            <button className="btn btn-primary mt-2" disabled={isLoading}>{isLoading ? "Submitting..." : "Submit Application"}</button>
            <Link to='/' className='mt-auto'>Back to Home<i className="bi bi-chevron-right"></i></Link>
          </div>
        </form>
      </div>
    )
  }

  const SubmitSuccess = () => {

    return (
      <div>
        <p className="lead text-center mb-4">
        Thank you! Your application has been submitted. Our team will review your application and will notify you on any further action. Thank you for your interest in joining the Cerberus Risk Management Team.
        </p>
        <div className='d-flex justify-content-end'>
        <Link to='/' className='mt-auto'>Back to Home<i className="bi bi-chevron-right"></i></Link>
        </div>
      </div>
    )
  }

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
                  { submitSuccess ? <SubmitSuccess /> : <ApplicationForm /> }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )

}

export const Head = () => (
  <>
  <Seo title="Application" />
  </>
)

export default Page