FROM node:14-alpine as base

COPY package*.json /
WORKDIR /src
EXPOSE 8080

ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY . /
CMD ["nodemon", "bin/www"]