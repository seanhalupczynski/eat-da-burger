DROP DATABASE IF EXISTS eat_da_burger_db;

CREATE DATABASE eat_da_burger_db;

USE eat_da_burger_db;

CREATE TABLE burgers(
	id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY(id)
    );
    
INSERT INTO burgers (burger_name, devoured)
VALUES ("Whopper", 1), ("BigMac", 0), ("Baconator", 0), ("Imposible Whopper", 0);

select * from burgers;