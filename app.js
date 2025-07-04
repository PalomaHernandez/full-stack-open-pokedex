const express = require('express')
const app = express()

app.get('/version', (req, res) => {
  res.send('3')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {})
