FROM debian:stretch
MAINTAINER Forestier Florian <Florian.Forestier@etu.uca.fr>

RUN apt-get update && apt-get install --yes curl git openjdk-8-jdk wget unzip 
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install build-essential nodejs -y

COPY bot.js bot.js
COPY package.json package.json
COPY auth.json auth.json

RUN npm install

CMD ["node", "bot.js"]
