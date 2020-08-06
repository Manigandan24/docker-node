 FROM node:alpine
 
 WORKDIR '/app'
 
 VOLUME '/app/logs'
 
 COPY ./package.json ./
 
 RUN npm install
 
 COPY ./ ./
 
 CMD ["npm" , "start"]