FROM node:latest

RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8080

CMD [ "npm", "run", "dev"]
