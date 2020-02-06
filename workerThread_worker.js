const { parentPort } = require('worker_threads')
const hugeLogging = require('./hugeLogging')

parentPort.on('message', () => {
  hugeLogging((message) => {parentPort.postMessage(message)})
})
