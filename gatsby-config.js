module.exports = {
  siteMetadata: {
    title: "green-drive.by",
    description: "сайт по продаже машин",
    author: "VSDM",
    keywords: "купить автомобиль, купить электромобиль",
    siteUrl: "https://green-drive.by"
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Green-Drive`,
        short_name: `GDrive`,
        start_url: `/`,
        background_color: `rgb(174, 211, 212)`,
        theme_color: `rgb(174, 211, 212)`,
        display: `standalone`,
        icon: "src/images/cart.png",
        display: "standalone",
        icons: [
          {
            "src": "src/images/maskable_icon_x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
          }
        ]
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};