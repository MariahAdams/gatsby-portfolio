import React from 'react';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <div>
    <h1>{data.allContentfulBio.edges[0].node.name}</h1>
  </div>
);

export const query = graphql `
  query {
    allContentfulBio {
      edges {
        node {
          name
          body {
            id
            body
          }
        }
      }
    }
  }
`