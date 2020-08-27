const express = require('express');
const songs = require('../route/songs');
const reviews = require('../route/reviews');
const users = require('../route/users');
const auth = require('../route/auth');
const playlists = require('../route/playlists');

const error = require('../middleware/error');

//main routes handler
module.exports = function(app) {
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
  app.use(express.json());
  app.use('/api/songs', songs);
  app.use('/api/reviews', reviews);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
app.use('/api/playlists', playlists);
  app.use(error);
}