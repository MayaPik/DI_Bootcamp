CREATE TABLE purchases (
  id SERIAL PRIMARY KEY,
  customer_id INT NOT NULL REFERENCES customers(id),
  item_id INT NOT NULL REFERENCES items(id),
  quantity_purchased INT NOT NULL
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES(
  (SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
  (SELECT id FROM items WHERE name = 'Fan'),
  1)


INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES(
  (SELECT id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
  ( SELECT id FROM items WHERE name = 'Large desk'),
  10)


INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES(
  (SELECT id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
  (SELECT id FROM items WHERE name = 'Small Desk'),
  2)
  
  
