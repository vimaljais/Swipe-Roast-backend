const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/bycategory", (req, res) => {
  const { q } = req.query;
  console.log(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${q}`);
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${q}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      res.json(response);
    });
});

app.listen(3001, () => {
  console.log("3001");
});
