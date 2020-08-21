FROM node:12 as builder
ENV NPM_CONFIG_LOGLEVEL warn
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD package.json /usr/src/app/
RUN npm install --production
ADD . /usr/src/app/
CMD ["npm", "build"]


FROM node:12
EXPOSE 3000
WORKDIR /usr/src/app/
COPY --from=0 /usr/src/app .
ENTRYPOINT [ "node", "dist/app.js"]