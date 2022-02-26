--  TASK ONE
SELECT rating , COUNT(*) 
FROM film
  GROUP BY rating;


--  TASK TWO
SELECT replacement_cost  , COUNT(*) 
FROM film
  GROUP BY replacement_cost
  HAVING COUNT(*) > 50;



--  TASK THREE
SELECT store_id , COUNT(customer) 
FROM customer
  GROUP BY store_id;

var answerThree = `
    1	326
    2	273
`

--  TASK FOUR
SELECT count(city) , country_id  
FROM city
  GROUP BY country_id 
  ORDER BY count(city) desc
  LIMIT 1

var answerFour = `
  count : 60 ; 
  country_id : 44 ;
`
