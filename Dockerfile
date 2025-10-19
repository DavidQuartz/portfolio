# Multi-stage build for React + Node.js
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy source code
COPY . .

# Build React app
RUN yarn build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built React app
COPY --from=build /app/build ./build
COPY --from=build /app/public ./public

# Copy server files
COPY server.js package*.json ./

# Install only production dependencies
RUN yarn install --production

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

# Expose port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
