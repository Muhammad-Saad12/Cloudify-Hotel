FROM node:current-alpine
COPY package*.json .
RUN npm install 
COPY . .
ENV PORT=8003
EXPOSE 8003
CMD [ "node", "app.js" ]


