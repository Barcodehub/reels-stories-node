const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  mediaUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400 // Expira después de 24 horas
  }
});

module.exports = mongoose.model('Story', StorySchema);