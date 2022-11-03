module.exports = {
  apps: [{
    name: 'nodejs-backend',
    script: "./dist/main.js",
    instances: process.env.ENVIRONMENT == 'production' ? 'max' : '2'
  }]
}
