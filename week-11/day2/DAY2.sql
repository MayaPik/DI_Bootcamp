
CREATE TABLE costumers (
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL
)

CREATE TABLE items (
	name VARCHAR(50) NOT NULL,
	price SMALLINT NOT NULL
)

INSERT INTO items (name, price)
VALUES
	('Small Desk', 100),
	('Large desk', 300),
	('Fan', 80);

INSERT INTO costumers (first_name, last_name)
VALUES
	('Greg', 'Jones'),
	('Sandra', 'Jones'),
	('Scott', 'Scott'),
	('Trevor', 'Green'),
	('Melanie', 'Johnson');
	
SELECT * FROM items
SELECT * FROM items WHERE price > 80
SELECT * FROM items WHERE price <= 300

SELECT first_name || ' ' || last_name FROM costumers WHERE last_name = 'Smith'

SELECT first_name || ' ' || last_name FROM costumers WHERE last_name = 'Jones'

SELECT first_name || ' ' || last_name FROM costumers WHERE first_name != 'Scott'











