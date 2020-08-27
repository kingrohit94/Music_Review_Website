const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const {Review, validate} = require('../models/review'); 
const {Song} = require('../models/song'); 
const {User} = require('../models/user'); 
const mongoose = require('mongoose');
const Fawn = require('fawn');
const express = require('express');
const router = express.Router();

Fawn.init(mongoose);

//get all reviews sorted by rating
router.get('/', async (req, res) => {
  const reviews = await Review.find().sort('-rating');
  res.send(reviews);
});

//post new review
router.post('/', [auth], async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findById(req.body.userId);
  if (!user) return res.status(400).send('Invalid user.');

  const song = await Song.findById(req.body.songId);
  if (!song) return res.status(400).send('Invalid song.');

  //if (song.artist === 0) return res.status(400).send('artist not found.');

  const review = new Review({ 

   user: {
      _id: user._id,
      name: user.name, 
      email: user.email
    },
    song: {
      _id: song._id,
      title: song.title,
      album: song.album
    },
    rating: req.body.rating,
    reviewtext: req.body.reviewtext
  });
 
  try {
    new Fawn.Task()
      .save('reviews', review)
.update('songs', { _id: song._id}, {
$inc: {rev: +1}
})
      .run();
  
    res.send(review);
  }
  catch(ex) {
    res.status(500).send('Something failed.');
  }
});

//find review by song id
router.get('/:id', async (req, res) => {
  const review = await Review.find({"song._id": req.params.id});

  res.send(review);
});


    


module.exports = router; 