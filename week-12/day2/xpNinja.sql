SELECT * FROM FILM 
INNER JOIN inventory ON inventory.film_id = film.film_id 
INNER JOIN rental on inventory.inventory_id = rental.inventory_id 
WHERE (rating ='G' OR rating='PG') AND (return_date IS NULL OR rental_date IS NULL);

-- CREATE TABLE waiting_list (
-- 	id SERIAL PRIMARY KEY,
--   child_name TEXT NOT NULL,
--   movie_id INTEGER NOT NULL,
--   FOREIGN KEY (movie_id) REFERENCES film(film_id)
-- );

-- INSERT INTO waiting_list (child_name, movie_id)
-- VALUES ('John', 123);

-- INSERT INTO waiting_list (child_name, movie_id)
-- VALUES ('Niv', 21);

Select film.title ,count(film_id) as number_of_waiting_for from waiting_list 
INNER JOIN film on film.film_id = waiting_list.movie_id group by film.title;