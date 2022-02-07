const express = require('express')

const app = express();

app.use(express.json());

/*
    GET - Search for info in server
    POST - Insert info in server
    PUT - Change info in server
    DELETE - Delete a info in server
    PATCH - Change a specific info in server
*/

/*
    Types of parameters

    Route Params => Identify one resource Edit/Delete/Search
    Query Params => Pagination/Filter
    Body Params => Objects for Insertion/Change (JSON)
*/



app.get("/courses", (req, res)=> {
    const query = req.query;
    console.log(query)
    return res.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.post("/courses", (req, res)=> {
    const body = req.body;
    console.log(body)
    return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.put("/courses/:id", (req, res) => {
    const { id } = req.params;
    console.log(id)
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