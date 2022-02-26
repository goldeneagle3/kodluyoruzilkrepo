--  Task One
select * from country where country LIKE 'A%a';

-- Task Two
select * from country where country LIKE '_____n';

--  Task Three
select * from film where title ILIKE '%t%t%t%t%' ;

--  Task FOUR
    select * from film 
    where 
        title ILIKE 'C%' 
      And 
        length > 90 
      And 
        rental_rate = 2.99
;