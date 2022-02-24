let a;
Boolean(a)
console.log(Boolean(a))

function rec(num) {
  while (num !== 1) return num * rec(num-1) 
  return 1
}


console.log(rec(5))