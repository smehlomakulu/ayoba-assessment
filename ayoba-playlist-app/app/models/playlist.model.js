module.exports = (sequelize, Sequelize) => {
  const Playlist = sequelize.define("playlist", {
    title: {
      type: Sequelize.STRING
    },
    creator: {
      type: Sequelize.STRING
    },
    duration: {
      type: Sequelize.STRING
    },
    trackCount: {
      type: Sequelize.INTEGER
    },
    createdDate: {
      type: Sequelize.STRING
    }
  });

  Playlist.associate = function(models) {
      Playlist.belongsToMany(models.Track, {
          through: 'TrackPlaylist',
          as: 'tracks',
          foreignKey: 'playlist_id'
      });
  };
  return Playlist;
};