const mongoose = require('mongoose');

const ReelSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  description: String,
  likes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Reel', ReelSchema);