import React from 'react';
import { graphql, StaticQuery } from 'gatsby';


export default () => (
  <StaticQuery
    query={graphql`
      query bio {
        allContentfulBio {
          edges {
            node {
              name,
              picture {
                file {
                  url,
                  details {
                    size
                  },
                  fileName,
                  contentType
                }
              },
              body {
                body
              }
            }
          }
        }
      }
    `
}
    render={({ allContentfulBio: {
      edges: [
        {
          node: {
            picture: {
              file: {
                url
              }
            },
            body: {
              body
            }
          }
        }
      ]
    } }) => (
      <section>
        <hgroup>
        <h2>About Mariah.</h2>
        <img src={url} alt="Mariah Adams"></img>
      </hgroup>
      
      <article>
      {body}
      </article>

      <div className="social-media">
        <a href="https://github.com/MariahAdams">github</a>
        <a href="https://www.linkedin.com/in/mariah-adams/">linkedin</a>
        <a href="#Instagram">Instagram</a>
      </div>
      </section>
    )}
  />
)

