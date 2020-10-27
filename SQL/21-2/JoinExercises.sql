-- 1. Find the domestic and international sales for each movie ✓
SELECT movies.id, movies.title, boxoffice.movie_id, boxoffice.domestic_sales, international_sales 
FROM movies
INNER JOIN boxoffice
ON movies.id = boxoffice.movie_id;

-- 2. Show the sales numbers for each movie that did better internationally rather than domestically ✓

SELECT movies.id, movies.title, boxoffice.movie_id, boxoffice.domestic_sales, international_sales 
FROM movies
INNER JOIN boxoffice
ON movies.id = boxoffice.movie_id
WHERE boxoffice.domestic_sales < boxoffice.international_sales;

-- 3. List all the movies by their ratings in descending order ✓

SELECT movies.id, movies.title, boxoffice.movie_id, boxoffice.rating
FROM movies
INNER JOIN boxoffice
ON movies.id = boxoffice.movie_id
ORDER BY rating DESC;

-- 4. Find the list of all buildings that have employees ✓
SELECT DISTINCT building FROM employees;

-- 5. Find the list of all buildings and their capacity ✓
SELECT * FROM buildings;

-- 6. List all buildings and the distinct employee roles in each building (including empty buildings) ✓
SELECT DISTINCT buildings.building_name, employees.role 
FROM buildings 
  LEFT JOIN employees
    ON buildings.building_name = employees.building;

