FROM php:8.2.3-alpine3.17

WORKDIR /var/www/

# Create user and group
RUN addgroup -g 1000 -S www && adduser -u 1000 -S www -G www && \
  mkdir -p /var/www && chown -R www:www /var/www
# Run as user
USER www

# RUN docker-php-ext-install pdo pdo_mysql
