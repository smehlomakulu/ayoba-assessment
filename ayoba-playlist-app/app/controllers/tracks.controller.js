const Track = require("../models/track.model.js");
const Playlist = require("../models/playlist.model.js")

module.exports = {

    addTrack(req, res) {
       return Track
        .create({
            title: req.body.title,
            album: req.body.album,
            artist: req.body.artist,
            duration: req.body.duration,
            releaseDate: req.body.releaseDate,
            audioUrl: req.body.audioUrl,
            artworkUrl: req.body.artworkUrl
        })
        .then((track) => res.status(201).send(track))
        .catch((error) => res.status(400).send(error));
    },

    findById(req, res) {
        return Track
            .findById(req.params.id, {
                include: [{
                  model: Playlist,
                  as: 'playlists'
                }],
              })
              .then((track) => {
                if (!track) {
                  return res.status(404).send({
                    message: 'Track Not Found',
                  });
                }
                return res.status(200).send(track);
              })
              .catch((error) => res.status(400).send(error));
    },

    listAll(req, res) {
      return Track
        .findAll({
          include: [{
            model: Playlist,
            as: 'playlists'
          }],
        })
        .then((tracks) => res.status(200).send(tracks))
        .catch((error) => { res.status(400).send(error); });
    },

    updateTrack(req, res) {
        return Track
          .findById(req.params.id, {
            include: [{
              model: Playlist,
              as: 'playlists'
            }],
          })
          .then(track => {
            if (!track) {
              return res.status(404).send({
                message: 'Track Not Found',
              });
            }
            return track
              .update({
                title: req.body.title,
                album: req.body.album,
                artist: req.body.artist,
                duration: req.body.duration,
                releaseDate: req.body.releaseDate,
                audioUrl: req.body.audioUrl,
                artworkUrl: req.body.artworkUrl
              })
              .then(() => res.status(200).send(track))
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
    },

    deleteTrack(req, res) {
        return Track
            .findById(req.params.id)
            .then(track => {
              if (!track) {
                return res.status(400).send({
                  message: 'Track Not Found',
                });
              }
              return track
                .destroy()
                .then(() => res.status(204).send())
                .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};