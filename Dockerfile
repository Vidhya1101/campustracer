FROM node:18

WORKDIR /app

# Copy entire project
COPY . .

# Move to backend
WORKDIR /app/backend

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Start server
CMD ["node", "server.js"]