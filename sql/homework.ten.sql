  -- TASK 1 
SELECT city , country  
FROM city 
  LEFT JOIN country 
  ON city.country_id = country.country_id;


  -- TASK TWO
SELECT customer.first_name , customer.last_name , payment.payment_id   
FROM customer 
  RIGHT JOIN payment  
  ON customer.customer_id = payment.customer_id;


--  TASK THREE
SELECT first_name , last_name , rental_id   
FROM customer 
  FULL JOIN rental  
  ON customer.customer_id = rental.customer_id;
