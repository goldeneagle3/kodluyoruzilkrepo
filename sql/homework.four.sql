--  Task One
select distinct replacement_cost from film;

--  Task Two
select count(distinct replacement_cost ) from film;

--  Task Three
Select count(*) From film 
Where 
  title LIKE 'T%' 
AND 
  rating = 'G' ;


--  Task Four
Select count(*) From country Where country LIKE '_____'; 


--  Task Five
Select Count(*) From city Where city ILIKE '%r'; 
