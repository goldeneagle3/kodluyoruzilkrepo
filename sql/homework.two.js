// Task One
let taskOneQuery = 'Select * From film Where replacement_cost Between 12.99 And 16.99;'


// Task One
let taskTwoQuery = `
    Select first_name , last_name From actor 
    Where first_name IN ('Penelope','Nick','Ed');
`

// Task Three
let taskThreeQuery = `
Select * From film 
Where 
  rental_rate  IN (0.99, 2.99, 4.99) 
And 
  replacement_cost IN (12.99, 15.99, 28.99); ;
`