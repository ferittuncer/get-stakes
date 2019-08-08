const express = require('express')
const app = express()
const port = 3000
const klerosLiquidSetStake = require('./src/kleros-liquid-set-stake.js')
const csv = require('csv')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', async function(req, res) {
  const address = '0x988b3a538b618c7a603e1c11ab82cd16dbe28069'
  const rows = await klerosLiquidSetStake(address)

  const date = new Date()

  res.setHeader(
    'Content-disposition',
    `attachment; filename=kleros-liquid-set-stake-${address}-${date.toISOString()}.csv`
  )
  res.writeHead(200, {
    'Content-Type': 'text/csv'
  })

  csv.stringify(rows).pipe(res)
  // res.send(filePath) // Set disposition and send it.
})
