import React from "react"
import Layout from "../components/Layout"

import { Hero, Services, Mission, Team,  } from "/src/components/home";

// import { Link, graphql } from "gatsby";
// import Img from "gatsby-image";

export default function Home({data}) {
  return (
    <Layout>
     <>
      <Hero />
      <Services />
      <Mission />
      <Team />     
    </>
    </Layout>
  )
}

// export const query = graphql`
//   query Banner {
//     file(relativePath: {eq: "banner.png"}) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

