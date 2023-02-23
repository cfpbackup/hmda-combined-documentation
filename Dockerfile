# Use node as the base image
FROM node:16.14 as build-stage

# Set the working directory to /app
WORKDIR /app
ARG DOCKER_TAG="latest"

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Docusaurus project
RUN npm run build

# Serve the built files using a lightweight web server
FROM nginx:alpine

ENV NGINX_USER=svc_nginx_hmda

COPY nginx /etc/nginx
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY --from=build-stage /app/build /usr/share/nginx/html/documentation

RUN adduser -S $NGINX_USER nginx && \
    addgroup -S $NGINX_USER && \
    addgroup $NGINX_USER $NGINX_USER && \
    touch /run/nginx.pid && \
    chown -R $NGINX_USER:$NGINX_USER /etc/nginx /run/nginx.pid /var/cache/nginx/

EXPOSE 8080

USER svc_nginx_hmda

CMD ["nginx", "-g", "daemon off;"]