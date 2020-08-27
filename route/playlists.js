const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const {Playlist, validate} = require('../models/playlist'); 
const {Song} = require('../models/song');
//const Fawn = require('fawn');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Fawn.init(mongoose);

//get all playlists
router.get('/', async (req, res) => {
  const playlists = await Playlist.find().sort('name');
  res.send(playlists);
});

//add new playlist
router.post('/', [auth], async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const song = await Song.findById(req.body.songId);
  if (!song) return res.status(400).send('Invalid song.');


  const playlist = new Playlist({ 
    name: req.body.name,
	song: {
	_id: song._id,
      title: song.title,
      album: song.album
    },   
    desc: req.body.desc,
    status: req.body.status
  });

  await playlist.save();
  
  res.send(playlist);
});

//get playlist by id
router.get('/:id', async (req, res) => {
  const playlist = await Playlist.findById(req.params.id);

  if (!playlist) return res.status(404).send('The playlist with the given ID was not found.');

  res.send(playlist);
});

//update playlist and change status
router.put('/update', [auth], async (req, res) => {
 

 
 const playlist = await Playlist.updateOne({playlistId: req.body.id},{$set:{name: req.body.name, desc: req.body.desc, status: req.body.status}});

  
  
  res.send(playlist);

});

//validate playlist credentials
function validatePlaylist(playlist) {
  const schema = {
    status: Joi.string().min(1).max(255).required(),
songId: Joi.objectId().required(),
    name: Joi.string().min(5).max(50).required(),
    desc: Joi.string().min(5).max(255).required(),
  };

  return Joi.validate(playlist, schema);
}
module.exports = router;