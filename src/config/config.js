const config = {
    bucket_name: process.env.GATSBY_APP_BUCKET_SLUG || "Gatsby-ecommerce",
    bucket_slug: process.env.GATSBY_APP_BUCKET_SLUG || "d1a0a340-4992-11ea-a254-21c9c140355c",
    bucket_id: process.env.GATSBY_APP_BUCKET_ID || "5e3d38d86b589500073210e0",
    read_key: process.env.GATSBY_APP_BUCKET_READ_KEY || "qyxOJinjzuCJ0OHIDWVLgd7LE7BSp50a6kTpUpZyePRQSklLXS",
    write_key: process.env.GATSBY_APP_BUCKET_WRITE_KEY || "KN1t8dDriaE6FHEXMcpiKAb2OqDBS9Z15a2i2U0nL7PTh0EI3t",
    url: "https://api.cosmicjs.com/v1/"
  }
  export default config;