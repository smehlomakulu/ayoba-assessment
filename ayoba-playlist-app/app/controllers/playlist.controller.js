const Track = require("../models/track.model").Track;
const Playlist = require("../models/playlist.model").Playlist;
const TrackPlaylist = require("../models/playlist.model").TrackPlaylist;

module.exports = {

    addPlaylist(req, res) {
       return Playlist
        .create({
            title: req.body.title,
            creator: req.body.creator,
            duration: req.body.duration,
            trackCount: req.body.trackCount
        })
        .then((playlist) => res.status(201).send(playlist))
        .catch((error) => res.status(400).send(error));
    },

    findById(req, res) {
        return Playlist
            .findById(req.params.id, {
                include: [{
                  model: Track,
                  as: 'tracks'
                }],
              })
              .then((playlist) => {
                if (!playlist) {
                  return res.status(404).send({
                    message: 'Playlist Not Found',
                  });
                }
                return res.status(200).send(playlist);
              })
              .catch((error) => res.status(400).send(error));
    },

    listAll(req, res) {
      return Playlist
        .findAll({
          include: [{
            model: Track,
            as: 'tracks'
          }],
        })
        .then((playlist) => res.status(200).send(playlist))
        .catch((error) => { res.status(400).send(error); });
    },

    updatePlaylist(req, res) {
        return Playlist
          .findById(req.params.id, {
            include: [{
              model: Track,
              as: 'tracks'
            }],
          })
          .then((playlist) => {
            if (!playlist) {
              return res.status(404).send({
                message: 'Playlist Not Found',
              });
            }
            return playlist
              .update({
                title: req.body.title,
                creator: req.body.creator,
                duration: req.body.duration,
                trackCount: req.body.trackCount
              })
              .then(() => res.status(200).send(playlist))
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
    },

    deletePlaylist(req, res) {
        return Playlist
            .findById(req.params.id)
            .then(playlist => {
              if (!playlist) {
                return res.status(400).send({
                  message: 'Playlist Not Found',
                });
              }
              return playlist
                .destroy()
                .then(() => res.status(204).send())
                .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    addTrackToPlaylist(req, res) {
        return TrackPlaylist.create(req.body.playlist_id,req.body.track_id)
                            .then((trackPlaylist) => res.status(201).send(trackPlaylist))
                            .catch((error) => res.status(400).send(error));
    }
};