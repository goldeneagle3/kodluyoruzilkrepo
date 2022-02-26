//  TASK 1 
let taskOneQuery = `
  SELECT city , country 
  FROM city 
    INNER JOIN country 
    ON city.country_id = country.id;
`

//  TASK TWO
let taskTwoQuery = `
  SELECT payment.payment_id  , customer.first_name , customer.last_name  
  FROM customer 
    INNER JOIN payment 
    ON payment.customer_id = customer.customer_id;
`

//  TASK THREE
let taskThreeQuery = `
  SELECT rental.rental_id  , customer.first_name , customer.last_name  
  FROM customer 
    INNER JOIN rental 
    ON rental.customer_id = customer.customer_id;
`
