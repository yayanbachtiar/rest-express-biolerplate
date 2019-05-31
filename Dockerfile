FROM node:10

ENV HOME /express-rest-biolerplate

WORKDIR ${HOME}
ADD . $HOME

RUN yarn install

EXPOSE 3000
