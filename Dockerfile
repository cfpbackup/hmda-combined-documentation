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
ENV NODE_ENV=production
ENV BABEL_ENV=production
RUN npm run build

EXPOSE 8080
CMD ["npm", "run", "serve", "--", "--port", "8080", "--host", "0.0.0.0"]