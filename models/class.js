import mongoose from "mongoose";

const classSchema = mongoose.Schema({
  name: String,
  teacher: String,
  avatar: String,
});

const ClassModel = mongoose.model("ClassModel", classSchema);
export default ClassModel;
