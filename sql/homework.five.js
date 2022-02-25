// TASK ONE
let taskOneQuery = `
  Select * From film 
  Where title 
    LIKE '%n' 
    ORDER BY length DESC 
    LIMIT 5;
`

// TASK TWO
let taskTwoQuery = `
  Select * From film 
    Where title 
    LIKE '%n' 
    ORDER BY length ASC 
    OFFSET 5 
    LIMIT 5;
`

// TASK THREE
let taskThreeQuery = `
  Select * From customer 
    WHERE store_id = 1  
    ORDER BY last_name DESC
    LIMIT 4
`