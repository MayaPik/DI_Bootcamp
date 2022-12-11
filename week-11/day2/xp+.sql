CREATE TABLE students (
	id_number SMALLINT NOT NULL,
	first_name VARCHAR(20) NOT NULL,
	last_name VARCHAR(20) NOT NULL,
	birth_date DATE NOT NULL
)


INSERT INTO students (id_number, first_name, last_name, birth_date)
VALUES
(1, 'Marc','Benichou','11/02/1998'),
(2, 'Yoan','Cohen','12/03/2010'),
(3, 'Lea','Benichou','07/27/1987'),
(4, 'Amelia','Dux','04/07/1996'),
(5, 'David','Grez','06/14/2003'),
(6, 'Omer','Simpson','10/03/1980'),
(7, 'Maya', 'Pik', '01/22/2000');
		
SELECT * FROM students

SELECT first_name, last_name FROM students

SELECT first_name, last_name FROM students WHERE id_number = 2

SELECT first_name, last_name FROM students WHERE first_name = 'Marc' AND last_name = 'Benichou'

SELECT first_name, last_name FROM students WHERE first_name = 'Marc' OR last_name = 'Benichou'

SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a%'

SELECT first_name, last_name FROM students WHERE first_name ILIKE 'a%'

SELECT first_name, last_name FROM students WHERE first_name NOT ILIKE '%a'

SELECT first_name, last_name FROM students WHERE id_number = 1 OR id_number = 3

SELECT * FROM students WHERE birth_date >= '2000-01-01';








