CREATE DATABASE cardapio;

CREATE TABLE item(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    price VARCHAR(5),
    description VARCHAR(200)
); 
