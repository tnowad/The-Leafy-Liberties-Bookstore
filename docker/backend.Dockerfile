FROM php:8.2.3-alpine3.17

WORKDIR /var/www/

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

RUN docker-php-ext-install pdo pdo_mysql && \
  docker-php-ext-enable pdo pdo_mysql

RUN addgroup -g 1000 -S backend && adduser -u 1000 -S backend -G backend && \
  mkdir -p /var/www && chown -R backend:backend /var/www

USER backend
