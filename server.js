const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "It is working"
    })
})

app.listen(8080, () =>{
    console.log("server is running on port 8000");
})

