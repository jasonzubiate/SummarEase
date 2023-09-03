/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RAPID_API_ARTICLE_KEY: process.env.RAPID_API_ARTICLE_KEY,
  }
}

module.exports = nextConfig
