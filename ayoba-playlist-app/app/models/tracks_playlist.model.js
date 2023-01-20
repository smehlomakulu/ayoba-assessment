module.exports = (sequelize, Sequelize) => {
  const TrackPlaylist = sequelize.define("TrackPlaylist", {
    playlist_id: {
        type: Sequelize.INTEGER
    },
    track_id: {
        type: Sequelize.INTEGER
    }
  });

};