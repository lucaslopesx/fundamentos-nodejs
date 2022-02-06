const express = require('express')

const app = express();

/*
    GET - Search for info in server
    POST - Insert info in server
    PUT - Change info in server
    DELETE - Delete a info in server
    PATCH - Change a specific info in server
*/

/*
    Route Params

    Route Params => Identify one resource edit/delete/search
*/



app.get("/courses", (req, res)=> {
    return res.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.post("/courses", (req, res)=> {
    return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.put("/courses/:id", (req, res) => {
    const params = req.params;
    console.log(params)
    return res.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
})

app.patch("/courses/:id", (req, res) => {
    return res.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"])
})

app.delete("/courses/:id", (req, res) => {
    return res.json(["Curso 6", "Curso 7", "Curso 4"])
})


//localhost:3333
app.listen(3333)