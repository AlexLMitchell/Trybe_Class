-- Write a query to list the number of jobs available in the employees table.
SELECT COUNT(DISTINCT job_id) FROM hr.employees;

-- Write a query to get the total salaries payable to employees.
SELECT sum(salary) FROM hr.employees;

-- Write a query to get the minimum salary from employees table.
SELECT MIN(salary) FROM hr.employees;

-- Write a query to get the maximum salary of an employee working as a Programmer. 
SELECT MAX(salary) 
FROM hr.employees 
WHERE job_id = 'IT_PROG';

-- Write a query to get the average salary and number of employees working the department 90.
SELECT AVG(salary) AS 'average salary', COUNT(employee_id) AS 'number of employees'
FROM hr.employees
WHERE department_id = 90;

-- Write a query to get the highest, lowest, sum, and average salary of all employees.

SELECT MAX(salary) AS 'highest',
MIN(salary) AS 'lowest',
SUM(salary) AS 'sum',
ROUND(AVG(salary),2) AS 'average'
FROM hr.employees;

-- Write a query to get the number of employees with the same job.

SELECT COUNT(employee_id) AS 'number of employees', job_id AS 'job'
FROM hr.employees
GROUP BY job_id;

-- Write a query to get the difference between the highest and lowest salaries.

SELECT MAX(salary) - MIN(salary) AS 'Salary difference'
FROM hr.employees;

-- Write a query to find the manager ID and the salary of the lowest-paid employee for that manager.

SELECT manager_id, MIN(salary) AS 'lowest paycheck'
FROM hr.employees
WHERE manager_id IS NOT NULL
GROUP BY manager_id
ORDER BY MIN(salary);

-- Write a query to get the department ID and the total salary payable in each department.

SELECT department_id, SUM(salary) AS 'total pay'
FROM hr.employees
GROUP BY department_id
ORDER BY SUM(salary);

-- Write a query to get the average salary for each job ID excluding programmer.

SELECT job_id, ROUND(AVG(salary),2) AS 'avg pay'
FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG';

-- Write a query to get the total salary, maximum, minimum, average salary of employees (job ID wise), for department ID 90 only.

SELECT job_id, 
SUM(salary) as 'total salary',
MAX(salary) AS 'max salary',
MIN(salary) AS 'min salary',
ROUND(AVG(salary),2) AS 'average salary'
FROM hr.employees
WHERE department_id = 90
GROUP BY job_id;

-- Write a query to get the job ID and maximum salary of the employees where maximum salary is greater than or equal to $4000.

SELECT job_id, MAX(salary) 
FROM hr.employees 
GROUP BY job_id 
HAVING MAX(salary) >=4000;

-- Write a query to get the average salary for all departments employing more than 10 employees

SELECT department_id, ROUND(AVG(salary),2) AS 'avg salary', COUNT(DISTINCT employee_id) AS 'employees'
FROM hr.employees
GROUP BY department_id
HAVING COUNT(DISTINCT employee_id) > 10;