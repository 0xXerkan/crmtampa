import React from 'react'
import Layout from '../components/Layout'
import { Seo } from "../components/Seo";

export default function NotFound() {
  return (
    <Layout>
      <h2>404</h2>
      <p>Sorry, that page doesn't exist (yet)!</p>
    </Layout>
  )
}

export const Head = () => (
  <>
  <Seo />
  </>
)
