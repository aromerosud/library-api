import author from "../models/author.js";
import mongoose from "mongoose";

export const getAllAuthors = async (req, res) => {
  try {
    const authors = await author.find();

    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid author id",
      });
    }

    const authors = await author.findById(id);

    if (!authors) {
      return res.status(404).json({
        message: "Author not found",
      });
    }

    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createAuthor = async (req, res) => {
  try {
    const authors = await author.create(req.body);

    res.status(201).json(authors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid author id",
      });
    }

    const authors = await author.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!authors) {
      return res.status(404).json({
        message: "Author not found",
      });
    }

    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid author id",
      });
    }

    const authors = await author.findByIdAndDelete(id);

    if (!authors) {
      return res.status(404).json({
        message: "Author not found",
      });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
