FROM node:latest

WORKDIR /code

ADD package.json /code

RUN npm install

ADD . /code

RUN npm install -g ionic

EXPOSE 8100

CMD ["ionic","serve"]
