const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Alive! a.k.a. juice')
})

app.listen(port, () => {
  console.log(`Schrodinger app listening on port ${port}`)
})
