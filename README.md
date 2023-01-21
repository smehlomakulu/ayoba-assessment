# ayoba-assessment

The project makes use of Docker and docker-compose for ease of building and execution. In order to run the project, Docker with docker-compose has to be installed.

1. To run, navigate to the root folder of the project and execute command: docker-compose up
2. Below are the exposed API endpoints.
Root context:  http://localhost:6868/api
a) Tracks
1. Create Track: /tracks 
  HTTP Verb: POST
Request: 
{
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
}

2. List Tracks: /tracks
  HTTP Verb: GET
  
 3. Find track: /tracks/:id
  HTTP Verb: GET
  
 4. Update a track: /tracks/:id
  HTTP Verb: PUT

5. Delete a track: /tracks/:id
  HTTP Verb: DELETE

b) Playlist

1. Create playlist: /playlist
  HTTP Verb: POST
  request:
  {
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
  }
  
  2. List playlists: /playlist
  HTTP Verb: GET
  
  3. Find a playlist: /playlist/:id
  HTTP Verb: GET
  
  4. Update a playlist: /playlist/:id
  HTTP Verb: PUT

  5. Add Track to Playlist: /playlist/addTrack
  request:
  {
     "playlist_id":" ",
     "track_id": " "
  }
  HTTP Verb: POST
  
  5.  Delete a track: /tracks/:id
  HTTP Verb: DELETE
