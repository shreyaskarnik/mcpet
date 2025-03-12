FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY tsconfig.json ./
COPY src/ ./src/

# Build the TypeScript project
RUN npm run build

# Create a volume for persistent pet data
VOLUME /data

# Set environment variable for pet data storage
ENV PET_DATA_DIR=/data

# Set the command to run the server
CMD ["node", "build/index.js"]
