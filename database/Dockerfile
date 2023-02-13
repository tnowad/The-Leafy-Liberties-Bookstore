# Use an official MySQL image as the base image
FROM mysql:8.0.32-debian

# Set the environment variables for the database
ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_DATABASE=database_name

# Copy the SQL scripts to create the database and its tables
COPY database_setup.sql /docker-entrypoint-initdb.d/