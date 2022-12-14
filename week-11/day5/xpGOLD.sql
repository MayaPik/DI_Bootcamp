UPDATE employees SET email='not available' WHERE department_id=11

UPDATE employees SET email='available' WHERE department_id IN 
(SELECT department_id FROM departments WHERE department_name = 'Accounting')

UPDATE employees SET salary=8000 WHERE employee_id=105 AND salary = 5000

SELECT COUNT(DISTINCT job_id) FROM employees

SELECT job_id, COUNT(*) AS num_employees
FROM employees
GROUP BY job_id ORDER BY job_id ASC;

SELECT max(salary) min(salary) FROM employees

SELECT manager_id, MIN(salary)
FROM employees
GROUP BY manager_id

SELECT jobs.job_title, avg(salary) AS avg
FROM employees INNER JOIN jobs ON jobs.job_id = employees.job_id 
WHERE jobs.job_id not in(SELECT job_id FROM jobs WHERE job_title = 'Programmer')
GROUP BY jobs.job_title

 SELECT departments.department_name, count(employees.department_id) 
 FROM Employees INNER JOIN departments ON departments.department_id = employees.department_id 
 GROUP BY departments.department_name

ALTER TABLE locations RENAME COLUMN state_province TO state;

ALTER TABLE locations
ADD PRIMARY KEY (location_id);

------------------

CREATE TABLE new_countries (
	country_id VARCHAR(3) PRIMARY KEY  ,
	country_name VARCHAR(40) NOT NULL
)

INSERT INTO new_countries (country_id, country_name)
VALUES
 ('IT', 'Italy'),
 ('CH', 'China'),
	('IN', 'India')

CREATE TABLE new_countries_copy AS
SELECT * FROM new_countries;

CREATE TABLE new_jobs (
	job_id SMALLINT PRIMARY KEY  ,
	job_title VARCHAR(40) DEFAULT '',
	min_salary SMALLINT DEFAULT 8000,
	max_salary SMALLINT CHECK (max_salary <= 25000) DEFAULT NULL
)


CREATE TABLE new_employees (
	employee_id INTEGER UNIQUE ,
	first_name VARCHAR(40) NOT NULL,
	last_name VARCHAR(40) NOT NULL,
	email VARCHAR(225) NOT NULL,
	phone_number VARCHAR(12) NOT NULL,
	hire_date date NOT NULL,
	job_id INTEGER NOT NULL,
 salary INTEGER NOT NULL,
	FOREIGN KEY (job_id) REFERENCES new_jobs(job_id)
)

CREATE TABLE new_job_history (
	employee_id INTEGER UNIQUE ,
	start_date date NOT NULL,
	end_date date NOT NULL,
	job_id INTEGER NOT NULL,
	FOREIGN KEY (job_id) REFERENCES new_jobs(job_id),
	FOREIGN KEY (employee_id) REFERENCES new_employees(employee_id)
)


INSERT INTO new_countries (country_id, country_name)

('IL', 'Israel'),
('ES', 'Spain'),
('AU', 'Austria')


CREATE TABLE new_countries_copy AS
SELECT * FROM new_countries;

INSERT INTO new_employees (first_name, last_name, email, phone_number, hire_date, job_id, salary)
SELECT first_name, last_name, email, phone_number, hire_date, job_id, salary
FROM --employee_data
WHERE job_id IN (SELECT job_id FROM new_jobs);
