import React from "react"
import 'bootstrap/dist/css/bootstrap.css';

import Layout from "../components/layout"
import Home from "../components/home"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `ecommerce`]} />
    <Home/>
  </Layout>
)

export default IndexPage
