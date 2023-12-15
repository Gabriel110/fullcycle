const express = require("express")
const router = require('./router')
const app = express()
const port = 3000 || process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(router)

app.listen(port, ()=>{
  console.log(`Api rodando na porta ${port}`)
})