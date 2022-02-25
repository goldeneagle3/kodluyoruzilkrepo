// Task One
let taskFirstQuery = `select * from country where country LIKE 'A%a';`

//Task Two
let taskTwoQuery = `select * from country where country LIKE '_____n';`

// Task Three
let taskThreeQuery = `select * from film where title ILIKE '%t%t%t%t%' ;`

// Task Four
let taskFourQuery = `
    select * from film 
    where 
        title ILIKE 'C%' 
      And 
        length > 90 
      And 
        rental_rate = 2.99
;`