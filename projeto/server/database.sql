CREATE DATABASE cardapio;

CREATE TABLE item(
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(50),
    item_price VARCHAR(5),
    item_description VARCHAR(200)
); 