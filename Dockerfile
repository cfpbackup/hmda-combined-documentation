# Use node as the base image
FROM node:16.19.1-buster-slim as build-stage
RUN apt-get update --allow-releaseinfo-change \
    && apt-get update \
    && apt-get clean

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Docusaurus project
ENV NODE_ENV=production
ENV BABEL_ENV=production
RUN npm run build

# Non-root user
RUN useradd -M -d /app -s /bin/bash hmda_user && \
  chown -R hmda_user:hmda_user /app

USER hmda_user

EXPOSE 8080
CMD ["npm", "run", "serve", "--", "--port", "8080", "--host", "0.0.0.0"]