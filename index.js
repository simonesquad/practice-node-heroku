// require('dotenv').config()
// at the top of index.js 

const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 4000

console.log('practice node heroku')
console.log(__dirname)

console.log(process.env.LADY)
console.log(process.env.FOO)
console.log(process.env.ALWAYS)
console.log(process.env.PORT)

const app = express()
app.use(cors())
app.use(express.json())

// api
app.use('/api/*', (_, res) => {
    res.json({ data: 'practice node heroku'})
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})
