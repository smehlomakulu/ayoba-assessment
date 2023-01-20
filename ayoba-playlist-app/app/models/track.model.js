module.exports = (sequelize, Sequelize) => {
  const Track = sequelize.define("track", {
    title: {
      type: Sequelize.STRING
    },
    album: {
      type: Sequelize.STRING
    },
    artist: {
      type: Sequelize.STRING
    },
    duration: {
      type: Sequelize.STRING
    },
    releaseDate: {
      type: Sequelize.STRING
    },
    audioUrl: {
      type: Sequelize.STRING
    },
    artworkUrl: {
      type: Sequelize.STRING
    }
  });

  Track.associate = function(models) {
    Track.belongsToMany(models.Playlist, {
        through: 'TrackPlaylist',
        as: 'playlists',
        foreignKey: 'track_id'
    });
  };
  return Track;
};