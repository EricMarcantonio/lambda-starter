import express from "express";
import axios from "axios";

const app = express();

app.get("/", (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/posts/42").then((data) => {
    res.json(data.data);
  });
});


// app.listen(3000)
export = app
