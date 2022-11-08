const mongoose = require("mongoose");

//schema of teacher
const teacherSchema = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
});
//schema of student
const studentSchema = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
});
//schema of course
const courseSchema = new mongoose.Schema({
  id: Number,
  name: String,
  author: String,
});

const Student = new mongoose.model("Student", studentSchema);
const Teacher = new mongoose.model("teacher", teacherSchema);
const Course = new mongoose.model("Course", courseSchema);
module.exports = { Teacher, Student, Course };