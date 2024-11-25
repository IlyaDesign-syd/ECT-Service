const express = require('express')
const app = express()

console.log('test nodemon')

app.listen(3001, () => {
    console.log('Server running on port 3001')
})