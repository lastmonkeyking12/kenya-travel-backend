const express = require('express');
const router = express.Router();
const { getResorts, addResort, trackClick } = require('../controllers/resortsController');

router.get('/', getResorts);
router.post('/', addResort);
router.post('/:id/click', trackClick);

module.exports = router;
