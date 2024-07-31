const express = require('express');
const router = express.Router();
const storyController = require('../controllers/storyController');
const upload = require('../middlewares/upload');

router.post('/', upload.single('media'), storyController.createStory);
router.get('/', storyController.getStories);
router.put('/:id', storyController.updateStory);
router.delete('/:id', storyController.deleteStory);

module.exports = router;