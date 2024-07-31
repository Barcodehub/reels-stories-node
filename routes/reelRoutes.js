const express = require('express');
const router = express.Router();
const reelController = require('../controllers/reelController');
const upload = require('../middlewares/upload');

router.post('/', upload.single('video'), reelController.createReel);
router.get('/', reelController.getReels);
router.put('/:id', reelController.updateReel);
router.delete('/:id', reelController.deleteReel);

module.exports = router;