# Use official Node.js runtime
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY src/ ./src/

# Build TypeScript
RUN npm run build

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S cubeuser -u 1001

# Change ownership of the app directory
RUN chown -R cubeuser:nodejs /app
USER cubeuser

# Set environment variables
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]