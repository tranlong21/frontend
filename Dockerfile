# Build Stage
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies (use ci for clean constant installs)
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Production Stage
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
