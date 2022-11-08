const mongoose = require("mongoose");
const { Student } = require("./03_models");
const mongo = mongoose.connect("mongodb://localhost/classroom");
mongo
  .then(() => {
    console.log("conneted successfully...");
  })
  .catch((err) => console.log("error occured:-", err));
const studentData = [
  {
    id: 01,
    name: "ramesh",
    age: 22,
  },
  {
    id: 02,
    name: "veeresh",
    age: 24,
  },
  {
    id: 03,
    name: "sumanth",
    age: 20,
  },
  {
    id: 04,
    name: "sahana",
    age: 14,
  },
  {
    id: 05,
    name: "Bharath",
    age: 15,
  },
  {
    id: 06,
    name: "madhu",
    age: 16,
  },
];
Student.insertMany(studentData)
  .then(() => console.log("saved data.."))
  .catch(() => {
    console.log("student data not saved");
  });
