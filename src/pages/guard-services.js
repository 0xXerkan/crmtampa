import React from "react";
import Layout from "../components/Layout";
import { withAssetPrefix } from "gatsby";
import { Seo } from "../components/Seo";

const GuardServices = () => {
  return (
    <Layout>
      <section id="services" className="py-4 bg-black text-light">
        <div className="container">
          <div className="d-flex justify-content-center">
            <h1 className="text-center mb-3 text-primary">Guard Services</h1>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <img
              src={withAssetPrefix("/guardServices.png")}
              alt="security-guard"
              className="img-fluid w-50 rounded-2"
            />
          </div>
          <p className="text-center mb-4">
            Our security services can provide invaluable protection for
            businesses such as restaurants and bars. Trained security personnel
            can monitor the premises, identify potential security threats, and
            take proactive measures to prevent incidents from occurring. They
            can also assist with crowd control during busy periods, handle
            difficult situations with unruly customers, and provide a sense of
            safety and security for both customers and employees. Investing in
            security services can not only help prevent losses due to theft or
            vandalism but also improve the overall customer experience and
            increase business reputation.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export const Head = () => (
  <>
  <Seo title="Guard Services" />
  </>
)

export default GuardServices;