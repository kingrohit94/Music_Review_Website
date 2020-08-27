const Joi = require('joi');
const mongoose = require('mongoose');
const moment = require('moment');

//playlist schema
const playlistSchema = new mongoose.Schema({
  
     name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
      },
 
      desc: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
      },      
 
  song: [{
    type: new mongoose.Schema({
      title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
album: { 
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  }
})
}],

  status: { 
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  } 
    });
    
playlistSchema.statics.lookup = function(songId) {
  return this.findOne({
    'song._id': songId
  });
}



const Playlist = mongoose.model('Playlist', playlistSchema);

//validating playlist schema using joi
function validatePlaylist(playlist) {
  const schema = {
    songId: Joi.objectId().required(),
    desc: Joi.string().min(5).max(255).required(),
    name: Joi.string().min(5).max(50).required(),
status: Joi.string().min(5).max(50).required(),

  };

  return Joi.validate(playlist, schema);
}

exports.Playlist = Playlist; 
exports.validate = validatePlaylist;