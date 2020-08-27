const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const {Song, validate} = require('../models/song'); 
//const {genre} = require('../models/genre');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


//get all songs sorted
router.get('/', async (req, res) => { 
var mysort = { rev: -1 };
const songs = await Song.find().sort(mysort);
res.send(songs);
});

//add new songs
router.post('/', [auth], async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

 

  const song = new Song({ 
    title: req.body.title,
    genre: req.body.genre,
    artist: req.body.artist,
    album: req.body.album,
rev: req.body.rev,
hidden: req.body.hidden,
  });
  await song.save();
  
  res.send(song);
});


//update songs
router.put('/update', [auth, admin], async (req, res) => {


 
 const song = await Song.updateOne({songId: req.body.id},{$set:{hidden: req.body.hidden}});

  
  
  res.send(song);

});


//get song by id
router.get('/:id', async (req, res) => {
  const song = await Song.findById(req.params.id);

  if (!song) return res.status(404).send('The song with the given ID was not found.');

  res.send([song]);
});





module.exports = router; 