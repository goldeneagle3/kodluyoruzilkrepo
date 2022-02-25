// Task One
let taskFirstQuery = `select distinct replacement_cost from film;`;

// Task Two
let taskTwoQuery = `select count(distinct replacement_cost ) from film;`;

// Task Three
let taskThreeQuery = `
    Select count(*) From film 
    Where 
      title LIKE 'T%' 
    AND 
      rating = 'G' ;
`

// Task Four
let taskFourQuery = `
  Select count(*) From country Where country LIKE '_____'; 
`

// Task Five
let taskFiveQuery = `
  Select Count(*) From city Where city ILIKE '%r'; 
`