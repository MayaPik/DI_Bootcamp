SELECT name FROM language;

SELECT film.title, language.name FROM film FULL OUTER JOIN language 
ON film.language_id = language.language_id;

-- CREATE TABLE new_film(
-- 	id integer PRIMARY KEY ,
-- 	name varchar(255)NOT NULL
-- )

-- INSERT into  new_film(id, name) VALUES 
-- (1, 'Good Will Hunting'),
-- (2, 'The Martian'),
-- (3, 'Oceans Twelve'),
-- (4, 'Up in the Air');


-- CREATE TABLE customer_review(
-- 	review_id SERIAL PRIMARY KEY ,
-- 	film_id INTEGER NOT NULL,
--  language_id INTEGER NOT NULL,
--  title varchar(255) NOT NULL,
--  score INTEGER NOT NULL,
--  review_text varchar(255) NOT NULL,
--  last_update TIMESTAMP NOT NULL,
-- 	FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
-- 	FOREIGN KEY (language_id) REFERENCES language (language_id)
-- )


-- INSERT into customer_review(film_id, language_id, title, score, review_text, last_update) VALUES 
-- (1,1, 'Good Will Hunting',10,'great','2020-03-23'),
-- (2,1, 'The Martian',6,'nice', '2021-03-23 00:00:00');

DELETE FROM new_film where id = 1;

--SELECT * FROM customer_review;

-- UPDATE film
-- SET language_id = 3
-- WHERE film_id > 990;

-- UPDATE film
-- SET language_id = 2
-- WHERE film_id > 995;

-- drop table customer_review

SELECT COUNT(*) AS outstanding FROM RENTAL WHERE return_date IS NULL;

SELECT film.title, film.rental_rate
FROM(rental JOIN inventory ON inventory.inventory_id = rental.inventory_id)
JOIN film ON film.film_id = inventory.film_id WHERE rental.return_date IS NULL ORDER BY Replacement_cost DESC LIMIT 30;

--The First Movie:
SELECT film.title  FROM (actor JOIN film_actor ON actor.actor_id = film_actor.actor_id )
JOIN film ON film.film_id = film_actor.film_id  WHERE first_name = 'Penelope' AND last_name = 'Monroe' AND description ILIKE '%SUMO%';

--The Second Movie:
SELECT film.title FROM (film JOIN film_category ON film.film_id = film_category.film_id )
JOIN category ON category.category_id = film_category.category_id  WHERE rating ='R' AND category.name = 'Documentary' AND length < 60;

--The Third Movie:
SELECT film.title FROM inventory INNER JOIN film ON film.film_id = inventory.film_id
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id INNER JOIN customer ON customer.customer_id = rental.customer_id 
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' AND film.rental_rate >= 4.00 
AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';


--The Forth Movie:
SELECT film.title FROM inventory INNER JOIN film ON film.film_id = inventory.film_id
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id INNER JOIN customer ON customer.customer_id = rental.customer_id 
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' AND film.description ILIKE '%boat%' order By film.replacement_cost DESC
LIMIT 1;
