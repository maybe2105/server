import ClassModel from "../models/class.js";

export const getClass = async (req, res) => {
  try {
    const classes = await ClassModel.find();

    res.status(200).json(classes || []);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createClass = async (req, res) => {
  const classInfo = req.body;
  const newClass = new ClassModel(classInfo);

  try {
    await newClass.save();
    res.status(201).json(newClass);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
