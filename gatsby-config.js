const { ImgixSourceType } = require('@imgix/gatsby');

module.exports = {
  siteMetadata: {
      title: `Office21 Barbershop`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-background-image", 'gatsby-plugin-netlify',{
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: `@imgix/gatsby`,
    options: {
      // This is the domain of your imgix source, which can be created at
      // https://dashboard.imgix.com/.
      // Only "Web Proxy" imgix sources can be used for this configuration.
      domain: 'images-squirfox.imgix.net',

      // This is the source's secure token. Can be found under the "Security"
      // heading in your source's configuration page, and revealed by tapping
      // "Show Token".
      secureURLToken: '3kugHrzaTn98hYTq',

      // These are some default imgix parameters to set for each image. It is
      // recommended to have at least this minimal configuration.
      defaultImgixParams: { auto: 'format, compress, enhance' },

      sourceType: ImgixSourceType.WebProxy,

    },
  },
]
};