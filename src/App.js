import { useEffect, useState } from "react";
import "./styles.css";
const db = require("./db/db");

const express = require("express");

const app = express();
const place = db.place;

app.get("/", (req, res) => {
  place.find({}, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ result });
  });
});

app.listen(8080);

export default function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://localhost:8080/")
      .then((res) => res.text())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="App">
      <p>{data}</p>
    </div>
  );
}
