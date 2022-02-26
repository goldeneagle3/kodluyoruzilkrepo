  -- TASK ONE
(
  SELECT first_name   
  FROM actor
)
UNION
(
  SELECT first_name  
  FROM customer 
)


  -- TASK TWO
(
  SELECT first_name   
  FROM actor
)
INTERSECT
(
  SELECT first_name  
  FROM customer 
)


  -- TASK THREE
(
  SELECT first_name   
  FROM actor
)
EXCEPT
(
  SELECT first_name  
  FROM customer 
)


  -- TASK FOUR
//  -------------- First -------------
(
  SELECT first_name   
  FROM actor
)
UNION ALL
(
  SELECT first_name  
  FROM customer 
)

//---------------- Second --------------
(
  SELECT first_name   
  FROM actor
)
INTERSECT
(
  SELECT first_name  
  FROM customer 
)

//----------------- Third ----------------
(
  SELECT first_name   
  FROM actor
)
EXCEPT
(
  SELECT first_name  
  FROM customer 
)
