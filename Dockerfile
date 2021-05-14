FROM node:16-alpine as build

WORKDIR /app

COPY . .
RUN npm i
RUN npm run build

FROM nginx:alpine as host
COPY --from=build /app/dist /usr/share/nginx/html