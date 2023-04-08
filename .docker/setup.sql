CREATE DATABASE IF NOT EXISTS node_crud;

-- create the users for each database
CREATE USER 'node_crud'@'%' IDENTIFIED BY 'somepassword';
GRANT ALL PRIVILEGES ON *.* TO 'node_crud'@'%' WITH GRANT OPTION;

FLUSH PRIVILEGES;