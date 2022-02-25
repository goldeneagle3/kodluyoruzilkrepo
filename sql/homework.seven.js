// TASK ONE
let taskOneQuery = `
    SELECT rating , COUNT(*) 
    FROM film
      GROUP BY rating;
`

// TASK TWO
let taskTwoQuery = `
  SELECT replacement_cost  , COUNT(*) 
  FROM film
    GROUP BY replacement_cost
    HAVING COUNT(*) > 50;

`

// TASK THREE
let taskThreeQuery = `
  SELECT store_id , COUNT(customer) 
  FROM customer
    GROUP BY store_id;
`
let answerThree = `
    1	326
    2	273
`

// TASK FOUR
let taskFourQuery = `
  SELECT count(city) , country_id  
  FROM city
    GROUP BY country_id 
    ORDER BY count(city) desc
    LIMIT 1
`
let answerFour = `
  count : 60 ; 
  country_id : 44 ;
`
