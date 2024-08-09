FROM node:20.13.1 as dev-deps
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install


FROM node:20.13.1 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:1.27.0 as prod
EXPOSE 80
COPY --from=builder /app/dist/demo-angular /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;" ]