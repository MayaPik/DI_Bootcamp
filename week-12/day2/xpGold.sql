SELECT title FROM rental 
JOIN inventory ON inventory.inventory_id = rental.inventory_id 
JOIN film ON film.film_id = inventory.film_id
WHERE return_date IS NULL;

SELECT DISTINCT customer.first_name, customer.last_name  FROM rental 
JOIN customer ON customer.customer_id =  rental.customer_id
WHERE return_date IS NULL;

SELECT title FROM film_actor
JOIN actor ON actor.actor_id = film_actor.actor_id 
JOIN film ON film.film_id = film_actor.film_id
JOIN film_category ON film_category.film_id = film.film_id
JOIN category ON category.category_id = film_category.category_id
WHERE first_name = 'Joe' AND last_name = 'Swank'AND category.name = 'Action';

SELECT * FROM city