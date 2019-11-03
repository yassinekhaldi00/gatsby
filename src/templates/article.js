import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticale.title}</h1>
    <p>by <Link to={`/author/User_${data.strapiArticale.author.id}`}>{data.strapiArticale.author.username}</Link></p>
    <Img fluid={data.strapiArticale.image.childImageSharp.fluid} />
    <p>{data.strapiArticale.content}</p>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticale(id: {eq: $id}) {
      title
      content
      image {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        id
        username
      }
    }
  }
`