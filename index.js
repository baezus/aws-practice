const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('hey bb butthead')
})

app.listen(3000, () => console.log('Tootin n bootin on port 3000'))
