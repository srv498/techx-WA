# Use Ubuntu 20.04 base image
FROM ubuntu:20.04

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Set the DEBIAN_FRONTEND to noninteractive
ENV DEBIAN_FRONTEND noninteractive

# Install Node.js and npm
RUN apt-get update && apt-get install -y nodejs npm

# Install the dependencies from the package.json file
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 3000 for incoming connections
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
