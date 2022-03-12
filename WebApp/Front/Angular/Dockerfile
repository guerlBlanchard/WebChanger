FROM angular/ngcontainer:latest

WORKDIR /app
COPY package*.json /
EXPOSE 3000
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY . .
CMD ["nodemon", "bin/www"]