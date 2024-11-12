const num = Math.floor(Math.random() * 4) + 1;
const name = prompt("What is your name student?");
const p = document.querySelector('.here')
if (num === 1) p.innerHTML = `${name} you are a Gryffindor`
else if(num === 2) p.innerHTML = `${name} you are a Slytherin`
else if(num === 3) p.innerHTML = `${name} you are a Hufflepuff`
else if(num === 4) p.innerHTML = `${name} you are a Ravenclaw`
