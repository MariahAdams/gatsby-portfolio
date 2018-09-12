module.exports = {
  siteMetadata: {
    title: `Gatsby Portfolio Draft`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `n296y4mcvd8c`,
        accessToken: `4a8ab34c95a99c4e72f69b9643ee17e566f4669a7225a43920a5dbaed903077c`,
      },
    },
  ]
}