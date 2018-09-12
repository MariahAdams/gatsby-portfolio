import React from 'react';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <div>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>Whaaaaat is happening......?!</p>
  </div>
);

export const query = graphql `
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`