import book from "../models/book.js";
import mongoose from "mongoose";

export const getAllBooks = async (req, res) => {
  try {
    const books = await book.find().populate("authorId");

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid book id",
      });
    }

    const books = await book.findById(id).populate("authorId");

    if (!books) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createBook = async (req, res) => {
  try {
    const books = await book.create(req.body);

    res.status(201).json(books);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid book id",
      });
    }

    const books = await book
      .findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      })
      .populate("authorId");

    if (!books) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid book id",
      });
    }

    const books = await book.findByIdAndDelete(id);

    if (!books) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
