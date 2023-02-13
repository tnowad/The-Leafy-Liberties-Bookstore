# Use an official Nginx image as the base image
FROM nginx:alpine

# Copy the Nginx configuration file to the appropriate location
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the host machine
EXPOSE 80

# Start Nginx when the container is run
CMD ["nginx", "-g", "daemon off;"]