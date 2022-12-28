-- CREATE TABLE product_orders (
-- 	order_id SERIAL,
-- 	PRIMARY KEY (order_id)
-- 	)

-- CREATE TABLE items (
-- 	id SERIAL PRIMARY KEY,
-- 	title varchar(255),
-- 	price INT NOT NULL,
-- 	order_id INTEGER NOT NULL,
-- 	FOREIGN KEY (order_id) REFERENCES product_orders(order_id) ON DELETE CASCADE
-- )

--INSERT INTO product_orders Values (1), (2);

--INSERT INTO items VALUES (1, 'Box', 300, 1), (2, 'Toy', 50, 1), (3, 'Game', 200, 2); 


SELECT * FROM items;
SELECT * FROM product_orders;

SELECT * FROM items
INNER JOIN product_orders
ON items.order_id = product_orders.order_id
ORDER BY product_orders.order_id;