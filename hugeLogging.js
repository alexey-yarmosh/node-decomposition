const json = require('./json')

module.exports = (callback) => {
  parse(10000)
  callback('done')
}

const parse = n => {
  for (let i = 0; i < n; i++) {
    JSON.parse(JSON.stringify(json))
  }
}
