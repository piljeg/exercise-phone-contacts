const express = require("express");
const axios = require("axios");
var cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

app.get("/countries", (req, res) => {
  fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(data => {
      res.send(data);
    });
});

app.get("/contacts", (req, res) => {
  fetch("https://6381c6f753081dd549884a67.mockapi.io/users")
    .then(response => response.json())
    .then(data => {
      res.send(data);
    });
});

app.post("/contacts", (req, res) => {
  fetch("https://6381c6f753081dd549884a67.mockapi.io/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })
    .then(response => response.json())
    .then(data => {
      res.send(data);
    });
});
