module.exports = app => {
  const playlist = require("../controllers/playlist.controller.js");
  const tracks = require("../controllers/tracks.controller.js");

  var router = require("express").Router();

  // Create a new Playlist
  router.post("/playlist", playlist.addPlaylist);

  // Retrieve all Playlist
  router.get("/playlist", playlist.listAll);

  // Retrieve a single Playlist with id
  router.get("/playlist/:id", playlist.findById);

  // Update a Playlist with id
  router.put("/playlist/:id", playlist.updatePlaylist);

  // Add Track to Playlist
  router.post("/playlist/addTrack", playlist.addTrackToPlaylist);

  // Delete a Playlist with id
  router.delete("/playlist/:id", playlist.deletePlaylist);

  // Create a new Track
  router.post("/tracks", tracks.addTrack);

  // Retrieve all Tracks
  router.get("/tracks", tracks.listAll);

  // Retrieve a single Track with id
  router.get("/tracks/:id", tracks.findById);

  // Update a Track with id
  router.put("/tracks/:id", tracks.updateTrack);

  // Delete a Track with id
  router.delete("/tracks/:id", tracks.deleteTrack);

  app.use('/api', router);
};