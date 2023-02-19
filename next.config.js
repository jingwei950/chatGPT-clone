/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'] //Add this to trust domains of image
  },
  experimental: {
    appDir: true,
  },
};
