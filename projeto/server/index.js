const express = require("express");
const app = express();
const mysql = require("mysql");
const cors=require("cors");
app.use(express.json());

const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}

app.use(cors(corsOptions));

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "cardapio"
});

//CREATE
app.post('/add', (req, res) => {
    const { name } = req.body;
    const { price } = req.body;
    const { description } = req.body;

    let request = "INSERT INTO item (name, price, description) VALUES (?, ?, ?)";

    db.query(request, [name, price, description], (err, result) => {
        res.send(result);
    });
});

//READ
app.get("/all", (req, res) => {
    let request = "SELECT * FROM item";

    db.query(request, (err, result) => {
        err ? console.log(err) : res.send(result);
    });
});

//UPDATE - EDIT
app.put("/edit", (req, res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { price } = req.body;
    const { description } = req.body;

    let request = "UPDATE item SET name= ?, price = ?, description = ? WHERE id = ?";

    db.query(request, [name, price, description, id], (err, result) => {
        err ? console.log(err) : res.send(result);
    });
});


app.listen(3001, () => {
    console.log("Server running!");
}); 