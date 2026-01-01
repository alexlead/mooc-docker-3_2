const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1><p>This is Dockerized Node.js application.</p><p>Prepared for MOOC ex 3.2.</p><p>Enjoy!</p>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})