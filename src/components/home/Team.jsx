import React from 'react'
import { withAssetPrefix } from 'gatsby'

const Team = () => {
  return (
    <section id="team" className="py-4 bg-black text-light __crm-founders">
      <div className="container">
        <h1 className="text-center mb-4 text-primary">Founders</h1>
        <div className="row text-center g-5">
          <div className="col-md-6">
            <div className="card bg-light">
              <div className="card-body">
                <img src={withAssetPrefix("/ryan.png")} alt="team-member" className="rounded-circle mb-3" width='128px' height='auto' />
                <h3 className="card-title">Ryan Stryker</h3>
                <h4>Co-Founder</h4>
                <a href="https://www.linkedin.com/in/0xstryker" target='_blank' rel="noreferrer">
                  <i className="bi bi-linkedin" style={{fontSize: '2rem'}}></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card bg-light">
              <div className="card-body">
                <img src={withAssetPrefix("/mike.png")} alt="team-member" className="rounded-circle mb-3" width='128px' height='auto' />
                <h3 className="card-title">Michael Gerovitz</h3>
                <h4>Co-Founder</h4>
                <a href="https://www.linkedin.com/in/mike-gerovitz-179b1b196" target='_blank' rel="noreferrer">
                  <i className="bi bi-linkedin" style={{fontSize: '2rem'}}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Team