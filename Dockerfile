FROM node:18

WORKDIR /app

# Copy entire project
COPY . .

# Move to backend
WORKDIR /app/backend

# Install dependencies
RUN npm install

# Expose port
<<<<<<< HEAD
EXPOSE 3000
=======
EXPOSE 3001
>>>>>>> b331590 (final fixes)

# Start server
CMD ["node", "server.js"]