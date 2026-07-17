/**
 * @swagger
 * components:
 *   schemas:
 *     Author:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - birthDate
 *         - nationality
 *         - genre
 *         - active
 *       properties:
 *         firstName:
 *           type: string
 *           example: J.K.
 *         lastName:
 *           type: string
 *           example: Rowling
 *         birthDate:
 *           type: string
 *           format: date
 *           example: 1965-07-31
 *         nationality:
 *           type: string
 *           example: British
 *         genre:
 *           type: string
 *           example: Fantasy
 *         biography:
 *           type: string
 *           example: Author of the Harry Potter series.
 *         awards:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - Hugo Award
 *             - British Book Awards
 *         active:
 *           type: boolean
 *           example: true
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - isbn
 *         - publicationDate
 *         - pages
 *         - genre
 *         - publisher
 *         - language
 *         - available
 *         - authorId
 *       properties:
 *         title:
 *           type: string
 *           example: Harry Potter and the Philosopher's Stone
 *         isbn:
 *           type: string
 *           example: 9780747532699
 *         publicationDate:
 *           type: string
 *           format: date
 *           example: 1997-06-26
 *         pages:
 *           type: integer
 *           example: 223
 *         genre:
 *           type: string
 *           example: Fantasy
 *         publisher:
 *           type: string
 *           example: Bloomsbury
 *         language:
 *           type: string
 *           example: English
 *         available:
 *           type: boolean
 *           example: true
 *         authorId:
 *           type: string
 *           example: 6a5a47be04bd89a760aba143
 */
