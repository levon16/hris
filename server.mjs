// const express = require('express')
import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "dbhris",
});
connection.connect();
if (connection) {
  console.log("database connected!");
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/add-absence", (req, res) => {
  const { date_from, date_to, valid_reason } = req.body;

  const sql = "INSERT INTO absences (date_from, date_to, valid_reason) VALUES (?, ?, ?)";

  // Execute query
  connection.query(sql, [date_from, date_to, valid_reason], (error, result) => {
    if (error) {
      console.error("Error inserting data: ", error);
      return res.status(500).json({ message: "Internal server error" });
    }
    res.status(200).json({ message: "Absence added successfully!",result  });
  });
});
//update
app.put("/api/update-absence", (req, res)=>{
  // console.log(req.body)
  const {id , date_from, date_to, valid_reason} = req.body

  const sql = "UPDATE `absences` SET `date_from`=?,`date_to`=?,`valid_reason`=? WHERE id=?";
  connection.query(sql, [date_from,date_to,valid_reason, id],(error, result)=>{
    if (error) {
      console.error("Error inserting data: ", error);
      return res.status(500).json({ message: "Internal server error" });
    }
    res.status(200).json({ message: "Absence Updated successfully!",result});
  })
})
app.delete("/api/delete-absence/:id", (req, res)=>{
  const {id} = req.params
  const sql ="DELETE FROM absences WHERE id=?"
  connection.query(sql,[id], (error, result)=>{
    if (error) {
      console.error("Error inserting data: ", error);
      return res.status(500).json({ message: "Internal server error" });
    }
    res.status(200).json({ message: "Absence Deleted successfully!",result});
  })
})

app.get("/api/get-absences", (req, res) => {

  const sql = "SELECT * FROM absences";
  connection.query(sql, (error, result) => {
    if (error) {
      console.error("Something went wrong.", error);
      return res.status(500).json({ message: error });
    }

    res.status(200).json(result);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
