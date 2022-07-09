FROM node:14-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]