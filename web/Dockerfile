#specify base image
FROM node:alpine

ENV APP_HOME /app

RUN mkdir $APP_HOME

WORKDIR $APP_HOME

#copy  from working dir to container working diretory
COPY ./package.json ./

#Install dependencies
RUN npm install

COPY ./ ./

#default command

CMD ["npm", "start"]