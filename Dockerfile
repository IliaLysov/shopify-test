FROM node:20.10-alpine3.18 as build

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:20.10-alpine3.18
WORKDIR /app
COPY package*.json .
COPY .env .
COPY --from=build /app/dist ./dist

RUN npm install -g vite

CMD ["npm", "run", "preview"]