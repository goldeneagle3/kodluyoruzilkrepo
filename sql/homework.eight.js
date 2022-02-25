// TASK 1 
let taskOneQuery = `
create table employee (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	birthday DATE,
	email VARCHAR(100)
)
`

// TASK TWO
let taskTwoQuery = `
insert into employee (name, email, birthday) values ('Edvard Ross', 'eross0@technorati.com', null);
// -------- 50 query like this -----------

`

//  Task THREE
let taskThreeQuery = `

update employee 
set email = 'Ensar',
  name = 'Ezber',
  birthday = '1992-10-10'
where id = 12
returning *;

// ------------ 5 update query like this -----------
`

//  Task FOUR
let taskFourQuery = `

delete employee 
where id = 11;

// ------------ 5 delete query like this -----------
`