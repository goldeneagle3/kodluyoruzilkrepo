// Task One
// film tablosunda bulunan title ve description sütunlarındaki verileri sıralayınız.
let taskOneQuery = 'SELECT title , description FROM film;'

// Task Two
// film tablosunda bulunan tüm sütunlardaki verileri film uzunluğu (length) 60 dan büyük VE 75 ten küçük olma koşullarıyla sıralayınız.
let taskTwoQuery = 'Select * From Film Where length > 60 AND length < 75;'

// Task Three
// film tablosunda bulunan tüm sütunlardaki verileri rental_rate 0.99 VE replacement_cost 12.99 VEYA 28.99 olma koşullarıyla sıralayınız.
let taskThreeQuery = `
    Select * From Film 
        Where  rental_rate = 0.99 AND  
        (replacement_cost  = 12.99 OR replacement_cost = 28.99);
`

// Task Four
// customer tablosunda bulunan first_name sütunundaki değeri 'Mary' olan müşterinin last_name sütunundaki değeri nedir?
let taskFourQuery = `Select first_name , last_name From customer Where first_name = 'Mary'; `

let lastNameOfMary = 'Smith';


// Task Five
// film tablosundaki uzunluğu(length) 50 ten büyük OLMAYIP aynı zamanda rental_rate değeri 2.99 veya 4.99 OLMAYAN verileri sıralayınız.

let taskFiceQuery = 'Select * from film where length < 50 AND NOT (rental_rate = 2.99  OR rental_rate = 4.99 )'
