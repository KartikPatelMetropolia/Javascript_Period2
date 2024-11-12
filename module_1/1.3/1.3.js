const first = parseInt(prompt("Enter the first number:"))
const second = parseInt(prompt("Enter the second number:"))
const third = parseInt(prompt("Enter the third number:"))
const p = document.querySelector('#answer')
p.innerHTML = `The Sum is ${first + second + third} <br/>The Product is 
	${first * second * third} <br/>The Average is ${(first + second + third) / 3}`