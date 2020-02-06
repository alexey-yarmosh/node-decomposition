const http = require('http')
const { Worker } = require('worker_threads')
const worker = new Worker('./workerThread_worker.js')
worker.on('message', (message) => {
  console.log(message)
})

http.createServer((req, res) => {
  if (req.url === '/favicon.ico') return

  const startTime = process.hrtime()
  worker.postMessage('ping')
  res.end('OK')

  const endTime = process.hrtime(startTime)
  console.info('Execution time: %ds %dms', endTime  [0], endTime  [1] / 1000000)
}).listen(3000)
