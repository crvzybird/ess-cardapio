const express = require("express");
const app = express();
const mysql = require("mysql");
const cors=require("cors");
const { response } = require("express");
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

    db.query(request, [name, price, description], (err) => {
        err ? res.send({"message": "false"}) : res.send({"message": "true"});
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
        err ? res.send({"message": "false"}) : res.send({"message": "true"});
    });
});

//DELETE
app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;

    let request = "DELETE FROM item WHERE id = ?";
    
    db.query(request, id, (err) => {
        err ? res.send({"message": "false"}) : res.send({"message": "true"});
    });
});
/*
//CREATE CATEGORY
app.post('/category', (req, res) => {
    const name = req.body.name;

    let request = "INSERT INTO category (name) VALUES (?)";

    db.query(request, name, (err, result) => {
        console.log(err);
        if(!err){
            res.send({
                "id": result.insertId,
                "name": name
            });
        }
        else{
            res.send({"message": "Nome da categoria não foi informado."});
        }
    });
});

//UPDATE CATEGORY
app.put('/category', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    
    let request = "UPDATE category SET name= ? WHERE id = ?";

    db.query(request, [name, id], (err, result) => {
        console.log(result)
        if(result.affectedRows !== 0){
            res.send({
                "id": result.insertId,
                "name": name
            });
        }
        else{
            res.send({"message": "Id inválido!"});
        }
    });
});

//READ CATEGORY
app.get("/category", (req, res) => {
    let request = "SELECT * FROM category";
    
    db.query(request, (err, result) => {
        err ? console.log(err) : res.send(result);
    });
});


//DELETE CATEGORY
app.delete("/category/:id", (req, res) => {
    const { id } = req.params;

    let request = "DELETE FROM category WHERE id = ?";

    console.log(request);
    
    db.query(request, id, (err, result) => {
        err ? console.log(err) : res.send(result);
    });
});

//ADD ITEM TO CATEGORY
app.post("/itemToCategory", (req, res) => {
    
    const itemId = req.body.itemid;
    const categoryId = req.body.categoryid;
    let request = "INSERT INTO category_items (category_id, item_id) VALUES (?, ?)";
    
    db.query(request, [categoryId, itemId], (err, result) => {
        if(!err){
            res.send({
                "itemid": itemId,
                "categoryid": categoryId
            })
        }
        else{
            console.log(err);
            res.send("error 6002 entre em contato com o suporte!")
        }
    });
});

//REMOVE ITEM FROM CATEGORY
app.delete("/itemToCategory", (req, res) => {
    const itemId = req.body.itemid;
    const categoryId = req.body.categoryid;
    console.log(req.body)
    console.log(itemId)
    console.log(categoryId)
    let request = "DELETE FROM category_items WHERE category_id = ? and item_id = ?";
    
    db.query(request, [categoryId, itemId], (err, result) => {
        if(!err){
            console.log(result)
            res.send({
                "itemid": itemId,
                "categoryid": categoryId
            })
        }
        else{
            console.log(err);
            res.send("error 6002 entre em contato com o suporte!")
        }
    });
});

function query1(){
    return new Promise(function(resolve, reject) {

        let request = "SELECT * FROM category";

        db.query(request, function (err, rows, fields) {
            // Call reject on error states,
            // call resolve with results
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
}

function query2(element){
    return new Promise(function(resolve, reject) {
        let queryItemsFromCategory = "SELECT * FROM category_items WHERE category_id = ?";
        db.query(queryItemsFromCategory, element.id, (err, result2) => {
            resolve(result2);
        });
    });
}

function query3(element){
    return new Promise(function(resolve, reject) {
        let queryItem = "SELECT * FROM item WHERE id = ?";
        db.query(queryItem, element.item_id, (err, result3) => {
            resolve(result3);
        })
    });
}

async function getMenu(){
    var response = {}
    let promises = []
    const q1 = await query1();
    catmaps = {}
    q1.forEach(item => {
        catmaps[item.id] = item.name
        let q2 = query2(item);
        promises.push(q2)
    });
    const result = await Promise.all(promises);
    let promises2 = []
    let it = {"cat": [], "prom": []}
    result.forEach(element => {
        if(typeof Object.keys !== 'undefined' && Object.keys(element).length > 0){

            response[catmaps[element[0].category_id]] = []
            
            element.forEach(element2 => {
                it.cat.push(element[0].category_id)
                let q3 = query3(element2);
                
                it.prom.push(q3)
            });   
            }
        })
    const result2 = await Promise.all(it.prom);
    let i = 0;

    result2.forEach(item => {
        // console.log(it.cat[i])
        // console.log(catmaps[it.cat[i]])
        // console.log("item")
        // console.log(item)
        // console.log("resp")
        // console.log(response)
        response[catmaps[it.cat[i]]].push(item[0]);
        i = i+1;
    });
    return response
}

app.get("/menu", async (req, res) => {
    const menu = await getMenu();
    res.send(menu);
    
});

*/

app.listen(3001, () => {
    console.log("Server running!");
});