const http = require('http')
const hugeLogging = require('./hugeLogging')

http.createServer((req, res) => {
  if (req.url === '/favicon.ico') return
  const startTime = process.hrtime()

  setImmediate(() => {
    hugeLogging((message) => {
      console.log(message)
    })
  })
  res.end('OK')

  const endTime = process.hrtime(startTime)
  console.info('Execution time: %ds %dms', endTime  [0], endTime  [1] / 1000000)
}).listen(3000)
