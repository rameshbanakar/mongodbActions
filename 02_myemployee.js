const mongoose = require("mongoose");
const mongo = mongoose.connect("mongodb://localhost:27017/simplilearn");
mongo
  .then(() => {
    console.log("Conneted succefully..");
  })
  .catch((err) => {
    console.log(err);
  });

const empSchema = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
});
const emp = mongoose.model("employee", empSchema, "myEmployee");
async function data(empy) {
  await empy.save();
}
function utility() {
  data(new emp({ id: 10, name: "Ramesh", age: 20 })),
    data(new emp({ id: 20, name: "kiran", age: 40 }));
}
utility();
