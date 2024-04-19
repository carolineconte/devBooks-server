const { Router } = require('express');
const { getBooks, getBook, postBook, patchBook,deleteBookById,getBooksByCategory} = require('../controladores/books')
const router = Router();

router.get('/', getBooks)
router.get('/:id', getBook)
router.get('/category/:category', getBooksByCategory)

router.post('/', postBook)

router.patch('/:id', patchBook)

router.delete('/:id', deleteBookById)

module.exports = router