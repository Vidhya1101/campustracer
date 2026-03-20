<<<<<<< HEAD
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
=======
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
>>>>>>> 4e6e953 (Fixed claim logic, data update, docker handling)
CMD ["node", "server.js"]