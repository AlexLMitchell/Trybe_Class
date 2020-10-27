-- Write a query to get the job_id and related employee's id.

SELECT job_id, GROUP_CONCAT(employee_id, ' ') AS 'Employees ID'
FROM hr.employees
GROUP BY job_id;

-- Write a query to update the portion of the phone_number in the employees table, within the phone number the substring '124' will be replaced by '999'.

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '124', '999') 
WHERE phone_number LIKE '%124%';

-- Write a query to get the details of the employees where the length of the first name greater than or equal to 8.

SELECT * FROM hr.employees
WHERE LENGTH(first_name) >= 8;

-- Write a query to display leading zeros before maximum and minimum salary.

SELECT job_id,  LPAD( max_salary, 7, '0') AS ' Max Salary',
LPAD( min_salary, 7, '0') AS ' Min Salary' 
FROM hr.jobs;

-- Write a query to append '@example.com' to email field.

UPDATE hr.employees
SET email = CONCAT(email, '@example.com');

-- Write a query to get the employee id, first name and hire month. 

SELECT employee_id, first_name, MONTH(hire_date) AS 'hire_month' from hr.employees;

-- Write a query to get the employee id, email id (discard the last three characters).

SELECT employee_id, LEFT(email, LENGTH(email)-3) AS 'email' FROM hr.employees;

-- Write a query to find all employees where first names are in upper case.

SELECT * FROM hr.employees
WHERE first_name = UCASE(first_name);

-- Write a query to extract the last 4 character of phone numbers.

SELECT RIGHT(phone_numer,4) AS 'phone_number' FROM hr.employees;

-- Write a query to get the last word of the street address

SELECT SUBSTRING_INDEX(REPLACE(REPLACE(REPLACE(street_address,',',' '),')',' '),'(',' '),' ',-1)
AS 'last word' from hr.locations;
