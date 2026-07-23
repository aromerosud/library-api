import express from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/booksController.js";

import { isAuthenticated } from "../middleware/authenticate.js";

const router = express.Router();

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: List of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *       500:
 *         description: Server error
 */
router.get("/", getAllBooks);

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Get book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Book ObjectId
 *     responses:
 *       200:
 *         description: Book found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: Invalid book id
 *       404:
 *         description: Book not found
 *       500:
 *         description: Server error
 */
router.get("/:id", getBookById);

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a new book
 *     description: Requires GitHub OAuth authentication.
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Book created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Server error
 */
router.post("/", isAuthenticated, createBook);

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Update a book
 *     description: Requires GitHub OAuth authentication.
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Book ObjectId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Book updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: Invalid book id
 *       404:
 *         description: Book not found
 *       500:
 *         description: Server error
 */
router.put("/:id", isAuthenticated, updateBook);

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Delete a book
 *     description: Requires GitHub OAuth authentication.
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Book ObjectId
 *     responses:
 *       204:
 *         description: Book deleted successfully
 *       400:
 *         description: Invalid book id
 *       404:
 *         description: Book not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", isAuthenticated, deleteBook);

export default router;
