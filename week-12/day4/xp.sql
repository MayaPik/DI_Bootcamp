--Write a query to find the first_name, last_name and salaries of the employees 
--who have a higher salary than the employee whose last_name is Bull.

SELECT first_name, last_name, salary FROM employees WHERE salary > (SELECT salary FROM employees WHERE last_name = 'Bell');

--Write a SQL subquery to find the first_name and last_name of the employees under a manager who works
--for a department based in the United States.

SELECT first_name, last_name FROM employees
INNER JOIN departments ON departments.department_id = employees.department_id
INNER JOIN locations ON departments.location_id = locations.location_id
WHERE country_id = 'US';

--Write a SQL subquery to find the first_name and last_name of the employees who are working as managers.

SELECT first_name, last_name FROM employees INNER JOIN jobs ON jobs.job_id = employees.job_id WHERE job_title ILIKE '%Manager%';

--Write a SQL subquery to find the employee(s) first_name and last_name, which salary is greater than the average salary of the employees.

SELECT first_name, last_name FROM employees WHERE salary > (SELECT avg(salary) FROM employees);

--Write a SQL subquery to find the employee(s) first_name and last_name, which salary is equal to the minimum salary of their job position.

SELECT first_name, last_name from employees INNER JOIN jobs
ON employees.job_id = jobs.job_id WHERE salary = min_salary;

--Write a query to find the names (first_name, last_name) of the employees who are not supervisors.

SELECT first_name, last_name from employees where manager_id IS NULL;

--Write a SQL subquery to find the employee(s) ID, first name, last name and salary of all employees whose salary is above the average salary for their departments.
SELECT * FROM employees WHERE salary > (SELECT avg(salary) FROM employees where department_id = employees.department_id);

--Write a subquery to find the 5th maximum salary of all salaries.
SELECT salary AS fifth_salary FROM employees ORDER BY salary desc offset 4 limit 1;

--Write a subquery to find the 4th maximum salary of all salaries.
SELECT salary AS forth_salary FROM employees ORDER BY salary desc offset 3 limit 1;

--Write a query to list the department name and number, of all the departments in which there are no employees.

SELECT employees.first_name, departments.department_name, departments.department_id FROM departments
LEFT OUTER JOIN employees ON departments.department_id = employees.department_id
WHERE employees.department_id NOT IN (SELECT DISTINCT employees.department_id FROM employees);



--Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments.

SELECT * FROM departments INNER JOIN locations ON locations.location_id = departments.location_id;

--Write a query to make a join with the employees and departments table to find the name of the employee, 
--including first_name and last name, department ID and name of departments.

SELECT * FROM employees INNER JOIN departments ON departments.department_id = employees.department_id;

--Write a SQL query to make a join with three tables: employees, departments and locations to find the name,
--including first_name and last_name, jobs, department name and ID, of the employees working in London.

SELECT * FROM employees INNER JOIN departments ON departments.department_id = employees.department_id 
INNER JOIN locations ON departments.location_id = locations.location_id
WHERE city = 'London';

--Write a query to make a join with two tables to find the employee id, last_name as 
--Employee along with their manager_id and last name as Manager.

SELECT A.employee_id, B.last_name AS EMPLOYEE , a.last_name AS MANAGER
FROM employees A, employees B
WHERE A.employee_id = B.manager_id;

--Write a query to make a join with two tables employees and departments, 
--to get the employees working in each department (retrieve the employees details, and the department name and number).
SELECT * FROM departments INNER JOIN employees ON departments.department_id = employees.department_id order by departments.department_id asc;


--Write a query to make a join to find the employees who worked in a department which ID is 90 
--(retrieve the employee ID, job title and number of days the employee worked).

SELECT * FROM employees INNER JOIN jobs
ON jobs.job_id = employees.job_id WHERE department_id = 9;

--Write a query to make a join with three tables, departments, employees, and locations to display 
--the department name, manager name, and city.

SELECT DISTINCT departments.department_name, 
locations.city, employees.manager_id FROM employees INNER JOIN departments ON employees.department_id = departments.department_id INNER JOIN locations ON  departments.location_id = locations.location_id;

--Write a query to make a join with two tables, employees and jobs to display the job title and average salary of the employees.

SELECT jobs.job_title, avg(salary) FROM employees INNER JOIN jobs
ON jobs.job_id = employees.job_id GROUP BY jobs.job_title;

--Write a query to make a join with two tables, employees and departments to display department name,
--first_name and last_name, hire date and salary for all the managers who achieved a working experience of more than 15 years.

SELECT departments.department_name, employees.first_name, employees.last_name, employees.hire_date, employees.salary
FROM employees
INNER JOIN departments
ON employees.department_id = departments.department_id
WHERE employee_id in (SELECT DISTINCT manager_id FROM employees) AND hire_date < '2007-12-06';

--Write a query to update phone_number records. If the the substring ‘124’ was found in that column, 
--update the phone_number to ‘999’.

UPDATE employees SET phone_number = 999 WHERE phone_number LIKE '%124%';

--Write a query to find the details of the employees who contain eight or more characters in their first name.

SELECT * FROM employees WHERE length(first_name) > 8;

--Write a query to join in uppercase, the first letter of the first_name, with the last_name, 
--with '@example.com‘ in the email column.
SELECT SUBSTRING(first_name, 1, 1) || UPPER(last_name) || '@example' from employees;


--Write a query to get the employee id, email but discard the last three characters of the email.
select employee_id, SUBSTRING(email, 1, (LENGTH(email)-3)) from employees;

--Write a query to display the first word in the job title,
-- if the job title contains more than one words.

SELECT SUBSTRING(job_title, 1, (POSITION(' ' in job_title))) from jobs
WHERE job_title like '% %';

--Write a query that displays the first name and the length of the first name for all employees whose 
--name starts with the letters ‘A’, ‘J’ or ‘M’. Give each column an appropriate label. 
--Sort the results by the employees’ first names.

SELECT first_name, LENGTH(first_name) lenght_first_name FROM employees
WHERE first_name LIKE 'A%' OR
first_name LIKE 'J%' OR
first_name LIKE 'M%'
order by first_name;

--Write a query to display the first name and salary for all employees.
-- Display the salary with the $ symbol. Label the column as SALARY.

SELECT first_name, '$' || salary AS SALARY FROM employees;

