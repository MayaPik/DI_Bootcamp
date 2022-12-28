-- CREATE TABLE customer (
-- 	id SERIAL PRIMARY KEY,
-- 	first_name varchar(255) NOT NULL,
-- 	last_name varchar(255) NOT NULL
-- 	);

-- CREATE TABLE customer_profile (
-- 	customer_id INTEGER NOT NULL,
-- 	is_logged_in BOOLEAN DEFAULT false,
-- 	PRIMARY KEY (customer_id),
-- 	CONSTRAINT fk_customer_id FOREIGN KEY (customer_id) REFERENCES customer(id)
-- );

-- INSERT INTO Customer (id, first_name, last_name) VALUES
-- (1, 'John', 'Doe'),
-- (2, 'Jerome', 'Lalu'),
-- (3, 'Lea', 'Rive');

--Insert Into customer_profile Values ((select id from customer where first_name = 'John'), true);

-- Insert Into customer_profile Values ((select id from customer where first_name = 'Jerome'), false);

SELECT customer.first_name FROM customer INNER JOIN customer_profile ON 
customer.id = customer_profile.customer_id WHERE is_logged_in = true;


SELECT customer.first_name, customer_profile.is_logged_in FROM customer LEFT JOIN customer_profile ON 
customer.id = customer_profile.customer_id ;

SELECT count(*) FROM customer
LEFT JOIN customer_profile
ON customer_profile.customer_id = customer.id
WHERE customer_profile.is_logged_in = false OR customer_profile.is_logged_in IS NULL;

-- CREATE TABLE book (
-- 	book_id SERIAL PRIMARY KEY, 
-- 	title varchar(255) NOT NULL,
-- 	author varchar(255) NOT NULL
-- )

-- INSERT INTO book (title, author) VALUES
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee');

-- CREATE TABLE student (
-- 	student_id SERIAL PRIMARY KEY, 
-- 	name varchar(255) NOT NULL UNIQUE,
-- 	age INT CHECK (age <= 15)
-- )

-- INSERT INTO student (name, age) VALUES
-- ('John',12),
-- ('Lera',11),
-- ('Patrick',10),
-- ('Bob',14);

-- CREATE TABLE Library (
--    book_fk_id INT REFERENCES Book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--    student_fk_id INT REFERENCES Student (student_id) ON DELETE CASCADE ON UPDATE CASCADE,
--    borrowed_date DATE,
--    PRIMARY KEY (book_fk_id, student_fk_id)
-- -- );

-- Insert Into Library Values ((select book_id from book where title = 'Alice In Wonderland'),
--								(select student_id from student where name = 'John'), 
-- 						   ('2022-02-15'));

-- Insert Into Library Values ((select book_id from book where title = 'To kill a mockingbird'),
-- 							(select student_id from student where name = 'Bob'),
-- 						   ('2021-03-03'));


-- Insert Into Library Values ((select book_id from book where title = 'Alice In Wonderland'),
-- 							(select student_id from student where name = 'Lera'),
-- 						   ('2021-05-23'));


-- Insert Into Library Values ((select book_id from book where title = 'Harry Potter'),
-- 							(select student_id from student where name = 'Bob'),
-- 						   ('2021-08-12'));


SELECT * FROM library;

SELECT student.name, book.title FROM student INNER JOIN Library ON library.student_fk_id = student.student_id 
INNER JOIN book ON library.book_fk_id = book.book_id;


SELECT avg(student.age) as average_age FROM student INNER JOIN Library ON library.student_fk_id = student.student_id 
INNER JOIN book ON library.book_fk_id = book.book_id WHERE title = 'Alice In Wonderland';

delete from student where student_id = 1;
SELECT * FROM library;
