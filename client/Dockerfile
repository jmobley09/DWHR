FROM node:current-alpine

# Bundle app source
COPY . ./

RUN npm install
RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "serve"]