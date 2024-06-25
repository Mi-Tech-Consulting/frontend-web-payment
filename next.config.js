/** @type {import('next').NextConfig} */

var devconfig = {};
try {
devconfig = require('./dev.next.config.js')
} catch (ex) {}


const nextConfig = {
  basePath: '/payment',
  crossOrigin: 'use-credentials',
  ...devconfig
};

module.exports = nextConfig;
