module.exports = {
  apps: [{
    name: "astreavirtual-backend",
    script: "./dist/main.js",
    instances: process.env.ENVIRONMENT == 'production' ? 'max' : '2'
  }]
}
