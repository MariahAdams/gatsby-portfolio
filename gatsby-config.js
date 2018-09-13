require('dotenv').config();
const SPACE_ID = process.env.SPACE_ID;
const DELIVERY_API_KEY = process.env.DELIVERY_API_KEY;

module.exports = {
  siteMetadata: {
    title: `Gatsby Portfolio Draft`,
    banana: `working?`
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: SPACE_ID,
        accessToken: DELIVERY_API_KEY,
      },
    },
    `gatsby-plugin-sass`
  ]
}