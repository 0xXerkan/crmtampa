import React from 'react'
import { useEffect } from 'react';
import Layout from "../components/Layout";

const Page = () => {
  
  const redirect_Page = () => {
    var tID = setTimeout(function () {
      window.location.href = "/";
      window.clearTimeout(tID);		// clear time out.
    }, 4000);
  }
  useEffect(() => {
    redirect_Page();
  }, [])
  return (
    <Layout>
      <section className="py-4 bg-black text-light">
        <div className="container">
          
          <h1 className="text-center mb-3">Your message has been sent, thank you!</h1>
          <p className="lead text-center mb-4">
          You are being redirected back to the homepage. If you are not redirected within 5 seconds, please <a href="/">click here</a>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Page