const express = require("express")
const app = express()



app.get("/", (req, res)=>{
    res.json([
        {
            id: 1,
            name: "Nikhil",
            isAdmin: true
        },
        {
            id: 2,
            name: "Ansh",
            isAdmin: false
        }
    ])
})

app.listen(8080, ()=>{
    console.log("App is listening on port 8080")
})