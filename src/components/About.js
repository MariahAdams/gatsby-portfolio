import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulBio {
          edges {
            node {
              name
            }
          }
        }
      }
    `
}
    render={data => (
      <div>
        {data.allContentfulBio.edges[0].node.name}
      </div>
    )}
  />
)