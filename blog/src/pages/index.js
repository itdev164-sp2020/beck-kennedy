import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <ul>
      {
        data.allContentfulBlogPost.edges.map(edge => (
          <li>
            <Link to={edge.node.slug} key={edge.node.id}>{edge.node.title}</Link>
          </li>
        ))
      }
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql` 
{
  allContentfulBlogPost {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
}
`