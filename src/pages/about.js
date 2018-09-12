import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';


class About extends Component {

  static propTypes = {
    data: PropTypes.object,
    body: PropTypes.object,
  }

  render() { 
    const { name, body } = this.props.data.allContentfulBio.edges[0].node;
    

    return (
      <div>
        <h1>{name}</h1>
        <p>{body.body}</p>
      </div>
    );
  }
}
 
export default About;


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