SELECT count(rating), rating FROM film GROUP BY rating

SELECT * FROM film WHERE rating in ('G', 'PG-13') 
AND length < 120 AND rental_rate < 3.00 ORDER BY title ASC

UPDATE customer 
SET first_name = 'Maya', last_name = 'Pik', email = 'maya.pik@gmail.com'
WHERE customer_id = 4

UPDATE address 
SET address = 'Uziel 42 Ramat Gan'
WHERE address_id = 4