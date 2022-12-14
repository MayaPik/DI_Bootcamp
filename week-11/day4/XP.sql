SELECT * FROM customer
SELECT first_name || ' ' || last_name AS full_name FROM customer
SELECT DISTINCT create_date FROM customer
SELECT * FROM customer ORDER BY first_name DESC

SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC

SELECT address, phone FROM address WHERE district IN ('Texas')

SELECT * FROM film WHERE film_id IN (15,150)

SELECT * FROM film ORDER BY replacement_cost ASC LIMIT 10

SELECT * FROM film ORDER BY replacement_cost ASC LIMIT 10 OFFSET 10

SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id

SELECT film.film_id, title FROM film
LEFT JOIN inventory
ON inventory.film_id = film.film_id
WHERE inventory.film_id IS NULL

SELECT city.city, country.country FROM city JOIN country
ON city.country_id = country.country_id;


SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date, payment.staff_id FROM customer
INNER JOIN payment 
ON customer.customer_id = payment.customer_id
ORDER BY staff_id










