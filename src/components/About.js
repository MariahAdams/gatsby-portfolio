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
    render={data => (
      <section>
        <hgroup>
        <h2>About Mariah.</h2>
        <img src={data.allContentfulBio.edges[0].node.picture.file.url} alt="Mariah Adams"></img>
      </hgroup>
      
      <article>
      {data.allContentfulBio.edges[0].node.body.body}
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