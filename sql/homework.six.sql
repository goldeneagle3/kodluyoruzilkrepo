--  TASK 1
SELECT AVG(rental_rate) FROM film;
vat answerOne = 2.9800000000000000


--  TASK 2
SELECT COUNT(*) FROM film WHERE title LIKE 'C%'
var answerTwo = 92


--  TASK 3
SELECT MAX(length) 
FROM film 
  WHERE rental_rate= 0.99; 

var answerThree = 184


--  TASK 4
SELECT COUNT( DISTINCT replacement_cost ) FROM film 
  WHERE length > 150; 

