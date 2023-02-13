# Use an official PHP image as the base image
FROM php:8.2.2-fpm-alpine3.17

# Copy the PHP application code to the appropriate location
COPY . /var/www/html

# Install dependencies required by the application
RUN apk add --no-cache \
        composer \
        libzip-dev \
    && docker-php-ext-install zip \
    && composer install --no-dev --optimize-autoloader

# Expose port 9000 to the host machine
EXPOSE 9000

# Start PHP-FPM when the container is run
CMD ["php-fpm"]