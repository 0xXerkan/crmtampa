import React from 'react'
import { withAssetPrefix } from 'gatsby'

const UpperNavbar = () => {
  return (
    <div className='bg-black'>
      <div className='container py-3 d-flex align-items-center justify-content-between'>
        <div className='text-light'>
          <a className='text-decoration-none' href='https://licensing.fdacs.gov/access/agency.aspx?TYPE=AGENCY&CATEGORY=&COUNTY=00&LICENSE=B%203300204&STATUS=ORG_DETAIL&ORG_ID=' target='_blank' rel="noreferrer">License # B 3300204</a>
        </div>
        <div className="text-light">
        {/* <button className='btn btn-primary' type='button'>(401) 588-2449</button> */}
        <img className='ms-2' src={withAssetPrefix("/vet.png")} alt="vetOwned" height='40' width='auto' />
        </div>
      </div>
    </div>
  )
}

export default UpperNavbar