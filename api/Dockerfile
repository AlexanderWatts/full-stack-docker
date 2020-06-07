FROM node:alpine 

WORKDIR /api/

COPY package*.json /api/

RUN npm install

COPY . /api/

EXPOSE 4000

CMD ["npm", "start"]
