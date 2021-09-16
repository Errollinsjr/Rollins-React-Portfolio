import React from "react"

import Layout from "./src/components/layout"
import SEO from "./src/components/seo"
// Components
import Header from "./src/components/Header"
import Work from "./src/components/Work"
import About from "./src/components/about"
import Skills from "./src/components/skills"
import Promotion from "./src/components/Promotion"
import Footer from "./src/components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio Template" />
    <Header></Header>
    <Work></Work>
    <About></About>
    <Skills></Skills>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
