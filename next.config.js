const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["./src"],
    prependData: `@import "styles/variables.scss";`,
  },
}

module.exports = nextConfig
