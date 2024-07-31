const Reel = require('../models/Reel');
const cloudinary = require('../config/cloudinary');
const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);

exports.createReel = async (req, res) => {
  try {
    let videoUrl = '';
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "video",
        folder: "reels",
      });
      videoUrl = result.secure_url;
    }

    const newReel = new Reel({
      user: req.body.user,
      videoUrl: videoUrl,
      description: req.body.description
    });

    await newReel.save();
    
    // Eliminar el archivo local después de subirlo a Cloudinary
    await unlinkFile(req.file.path);

    res.status(201).json(newReel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getReels = async (req, res) => {
  try {
    const reels = await Reel.find();
    res.json(reels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateReel = async (req, res) => {
  try {
    const updatedReel = await Reel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedReel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteReel = async (req, res) => {
  try {
    await Reel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Reel deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};