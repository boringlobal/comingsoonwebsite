const path = require('path');

module.exports = {
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components')
    config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles')
    return config
  },
};