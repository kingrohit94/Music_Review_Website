const Joi = require('joi');
const mongoose = require('mongoose');
const moment = require('moment');

//reviews schema 
const reviewSchema = new mongoose.Schema({
  user: { 
    type: new mongoose.Schema({
      name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
      },
 
      email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
      }      
    }),  
    required: true
  },
  song: {
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
}),
required: true
},

reviewtext:
{	type: String,
	required: true, 
        minlength: 5,
        maxlength: 255
      },

rating: {        
	type: String,
        required: true, 
        minlength: 1,
        maxlength: 5
      } 
    });
    
reviewSchema.statics.lookup = function(userId, songId) {
  return this.findOne({
    'user._id': userId,
    'song._id': songId
  });
}



const Review = mongoose.model('Review', reviewSchema);

//validating reviews schema
function validateReview(review) {
  const schema = {
    userId: Joi.objectId().required(),
    songId: Joi.objectId().required(),
    rating: Joi.string().min(1).max(5).required(),
    reviewtext: Joi.string().min(5).max(255).required(),

  };

  return Joi.validate(review, schema);
}

exports.Review = Review; 
exports.validate = validateReview;