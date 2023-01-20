FROM node:14

WORKDIR /ayoba-playlist-app
COPY ayoba-playlist-app/package.json .
RUN npm install
COPY .. .
CMD npm start