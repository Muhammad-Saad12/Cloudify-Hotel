FROM node:current-alpine
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
EXPOSE 3000
# CMD [ "npm", "start" ]
ENV NODE_ENV PRODUCTION
CMD [ "npx", "serve", "build" ]
