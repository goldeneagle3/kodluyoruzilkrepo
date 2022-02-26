--  TASK 1 
SELECT COUNT(*)
FROM film
  WHERE length > ANY
  (
    SELECT AVG(length)
    FROM film
  )
var answerOne = 489


--  TASK 2
SELECT COUNT(*)
FROM film
WHERE rental_rate  = ALL
(
  SELECT MAX(rental_rate)
  FROM film
)
var answerTwo = 336;


-- TASK 3
SELECT *
FROM film
  WHERE rental_rate   = ANY
    (
      SELECT MIN(rental_rate )
      FROM film
    )
    AND
    replacement_cost  = ANY
    (
      SELECT MIN(replacement_cost)
      FROM film
    )


-- TASK 4
SELECT customer_id, COUNT(payment_id) FROM payment 
GROUP BY customer_id ORDER BY COUNT(payment_id) DESC;

