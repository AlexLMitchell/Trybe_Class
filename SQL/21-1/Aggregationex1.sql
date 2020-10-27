-- Find the longest time that an employee has been at the studio ✓
-- For each role, find the average number of years employed by employees in that role ✓
-- Find the total number of employee years worked in each building ✓

SELECT name, MAX(years_employed)
FROM employees;

SELECT role, AVG(years_employed)
FROM employees
GROUP BY role;

SELECT building, SUM(years_employed)
FROM employees
GROUP BY building;

-- Find the number of Artists in the studio (without a HAVING clause) ✓
-- Find the number of Employees of each role in the studio ✓
-- Find the total number of years employed by all Engineers ✓

SELECT COUNT(role) FROM employees WHERE role = 'Artist';

SELECT COUNT(role), role
FROM employees
GROUP BY role;

SELECT role, SUM(years_employed)
FROM employees
GROUP BY role
HAVING role = 'Engineer';
