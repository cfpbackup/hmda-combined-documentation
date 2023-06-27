# Use node as the base image
FROM node:16-alpine as build-stage
RUN apk update \
    && apk upgrade \
    && apk cache clean

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Set Build Version for Footer
ARG DOCKER_TAG
ENV DOCKER_TAG=${DOCKER_TAG}

# Build the Docusaurus project
ENV NODE_ENV=production
ENV BABEL_ENV=production
RUN npm run build

# Non-root user
RUN addgroup -S hmda_group && adduser -S -G hmda_group hmda_user && \
    chown -R hmda_user:hmda_group /app

USER hmda_user

EXPOSE 8080
CMD ["npm", "run", "serve", "--", "--port", "8080", "--host", "0.0.0.0"]