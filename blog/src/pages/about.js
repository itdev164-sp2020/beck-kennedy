import React from "react"
import { Link } from "gatsby"

import {Layout} from "../components/layout"
import {Image} from "../components/image"
import {SEO} from "../components/seo"

const About = ({ data }) => {
    const {name, company} = data.site.siteMetadata.contact;
    return (
        <Layout>
            <SEO title="About" />
            <h1>About Us</h1>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <p>{`${company} started by ${name}`}</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default About

export const query = graphql`
    query {
        site {
            siteMetadata {
                contact 
                {
                    name
                    company
                    address
                }
            }
        }
    }
    `
