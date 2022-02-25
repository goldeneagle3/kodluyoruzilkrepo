// TASK 1
let taskFirstQuery = `SELECT AVG(rental_rate) FROM film; `
let answerOne = 2.9800000000000000


// TASK 2
let taskTwoQuery = `SELECT COUNT(*) FROM film WHERE title LIKE 'C%';`
let answerTwo = 92


// TASK 3
let taskThreeQuery = `
  SELECT MAX(length) 
  FROM film 
    WHERE rental_rate= 0.99; 
`
let answerThree = 184


// TASK 4
let taskFourQuery = `
  SELECT COUNT( DISTINCT replacement_cost ) FROM film 
    WHERE length > 150; 

`