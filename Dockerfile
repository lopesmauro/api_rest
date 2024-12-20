FROM node:latest
WORKDIR /
COPY . .

RUN rm -rf node_modules
RUN npm i

CMD ["node", "./src/app.ts"]
