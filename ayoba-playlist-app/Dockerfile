FROM node:14

WORKDIR /ayoba-playlist-app
COPY package.json .
RUN npm install
COPY ../.. .
CMD npm start