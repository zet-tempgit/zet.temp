# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build your React app (replace 'npm run build' with your actual build command)
RUN npm run build

# Expose a port (e.g., 80) that the application will run on
EXPOSE 3000

# Define the command to start your application
CMD ["npm", "start"]
