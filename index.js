const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/stuti',(req,res)=>{
  res.send('this is a good platform to learn node js')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})