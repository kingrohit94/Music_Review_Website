const Joi = require('joi');
const mongoose = require('mongoose');


//songs schema
const Song = mongoose.model('Songs', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  genre: { 
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  artist: { 
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  album: { 
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
rev: { 
    type: Number,
    required: true, 
    minlength: 1,
    maxlength: 2
  },
  hidden: {
    type: String,
    required: true, 
    minlength: 5,
    maxlength: 5
}
}));

//validate songs schema
function validateSong(song) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    genre: Joi.string().min(5).max(50).required(),
    artist: Joi.string().min(5).max(50).required(),
    album: Joi.string().min(5).max(50).required(),
rev: Joi.number().min(1).max(2).required(),
hidden: Joi.string().min(5).max(5).required(),
  };

  return Joi.validate(song, schema);
}

exports.Song = Song; 
exports.validate = validateSong;