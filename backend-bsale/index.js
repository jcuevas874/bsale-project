require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT;
const { connection } = require("./connection.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const queryConnection = (res, query) => {
  connection.query(query, (err, rows) => {
    if (err) throw err;
    if (rows.length > 0) {
      res.status(200).json({ results: rows });
    } else {
      res.status(200).json({ error: 'no existen productos!' });
    }
  });
}

app.get("/products", (req, res) => {
  const sort = req.query.sort && req.query.sort !== "undefined" ? req.query.sort : "ASC";
  const query = `select p.id,
    p.name,
    p.url_image,
    p.price, p.discount,
    c.name as category
    from product as p
    inner join category as c on p.category = c.id
    group by c.name, p.name
    order by name ${sort}
    `;
  queryConnection(res, query)
});

app.get("/categories", (req, res) => {
  const query = "select * from category order by name";
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  const sort = req.query.sort && req.query.sort !== "undefined" ? req.query.sort : "ASC";
  const query = `select
        p.id, 
        p.name,
        p.url_image,
        p.price,
        p.discount,
        c.name as category,
        p.category
        from product as p 
        inner join category as c on p.category = c.id
        where c.id = '${id}'
        group by c.name, p.name
        order by name ${sort}`;
  queryConnection(res, query)
});

app.get("/searchs/:searchValue/category/:category", (req, res) => {
  const searchWord = req.params.searchValue;
  const category = req.params.category && req.params.category !== "undefined" ? req.params.category : null;
  const sort = req.query.sort && req.query.sort !== "undefined" ? req.query.sort : "ASC";
  let query = '';
  if (category && category !== 0) { 
    query = `select
        p.id, 
        p.name,
        p.url_image,
        p.price,
        p.discount,
        c.name as category,
        p.category
        from product as p 
        inner join category as c on p.category = c.id
        where c.id = '${category}' and p.name like '%${searchWord}%'
        group by c.name, p.name
        order by name ${sort}`;
  } else {
    query = `select
        p.id, 
        p.name,
        p.url_image,
        p.price,
        p.discount,
        c.name as category,
        p.category
        from product as p 
        inner join category as c on p.category = c.id
        where p.name like '%${searchWord}%'
        group by c.name, p.name
        order by name ${sort}`;
  }
  queryConnection(res, query)
});

app.listen(port, () => console.log(`Server running on port ${port}`));
