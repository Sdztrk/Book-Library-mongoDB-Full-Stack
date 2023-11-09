const router = require("express").Router()
const bookControllers = require("../Controllers/bookControllers")


router.route("/books")
.get(bookControllers.getBooks)
.post(bookControllers.postBook)

router.route("/books/:id")
.get(bookControllers.getBook)
.put(bookControllers.updateBook)
.delete(bookControllers.deleteBook)

module.exports = router;