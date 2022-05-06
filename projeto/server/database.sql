CREATE DATABASE cardapio;

CREATE TABLE item (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `description` VARCHAR(200) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE category (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE category_items(
    category_id INT(15) NOT NULL,
    item_id INT(15) NOT NULL,
    FOREIGN KEY(category_id)
    REFERENCES category(id)
    ON DELETE CASCADE,
    FOREIGN KEY(item_id)
    REFERENCES item(id)
    ON DELETE CASCADE,
    UNIQUE(item_id, category_id)
);