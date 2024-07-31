const Story = require('../models/Story');
const cloudinary = require('../config/cloudinary');
const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);

exports.createStory = async (req, res) => {
  try {
    let mediaUrl = '';
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'stories',
      });
      mediaUrl = result.secure_url;
    }

    const newStory = new Story({
      user: req.body.user,
      content: req.body.content,
      mediaUrl: mediaUrl
    });

    await newStory.save();

    // Eliminar el archivo local después de subirlo a Cloudinary
    await unlinkFile(req.file.path);

    res.status(201).json(newStory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.json(stories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateStory = async (req, res) => {
  try {
    const updatedStory = await Story.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedStory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteStory = async (req, res) => {
  try {
    await Story.findByIdAndDelete(req.params.id);
    res.json({ message: 'Story deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};