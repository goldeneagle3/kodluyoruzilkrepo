//  TASK ONE
let taskOneQuery = `
(
  SELECT first_name   
  FROM actor
)
UNION
(
  SELECT first_name  
  FROM customer 
)
`

//  TASK TWO
let taskTwoQuery = `
(
  SELECT first_name   
  FROM actor
)
INTERSECT
(
  SELECT first_name  
  FROM customer 
)
`

//  TASK THREE
let taskThreeQuery = `
(
  SELECT first_name   
  FROM actor
)
EXCEPT
(
  SELECT first_name  
  FROM customer 
)
`

//  TASK FOUR


let taskFourQuery = `

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
`