 SELECT COUNT (*) as number_of_actors FROM actors;


INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('','Damon','08/10/1970', 6); --Work
VALUES('Matt','Damon','08/10/1970', ); --Does not work
VALUES('Matt','Damon','', 8 ); --Does not work

SELECT * FROM actors