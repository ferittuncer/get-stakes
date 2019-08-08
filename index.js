const express = require('express')
const app = express()
const port = 3000
const klerosLiquidSetStake = require('./src/kleros-liquid-set-stake.js')
const csv = require('csv')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', async function(req, res) {
  const rows = await klerosLiquidSetStake(
    '0x988b3A538b618C7A603e1c11Ab82Cd16dbE28069'
  )
  res.setHeader('Content-disposition', 'attachment; filename=testing.csv')
  res.writeHead(200, {
    'Content-Type': 'text/csv'
  })

  csv.stringify(rows).pipe(res)
  // res.send(filePath) // Set disposition and send it.
})
