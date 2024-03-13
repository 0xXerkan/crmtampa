import React from "react";
import Layout from "../components/Layout";

const Page = () => {
  return (
    <Layout>
      <section id="services" className="py-4 bg-black text-light">
        <div className="container">
          <div className="d-flex justify-content-center">
            <h1 className="text-center mb-3 text-primary">Executive Protection</h1>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <img
              src="/executiveSecurity.png"
              alt="execute-security"
              className="img-fluid w-50 rounded-2"
            />
          </div>
          <p className="lead text-center mb-4">
            Our team of former special operations soldiers and private contractors
            can provide exceptional executive protection for high-value personnel
            due to their rigorous training and experience in high-stress
            situations. These individuals possess the necessary skills and
            expertise to identify and mitigate potential threats while maintaining
            a low profile. Their training in close quarters combat and defensive
            driving can provide an added layer of security for high-risk
            individuals. By hiring former special operations soldiers for
            executive protection, high-value personnel can have peace of mind
            knowing that their safety and security are in capable hands.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Page;
