function roll()
{
    return Math.floor(Math.random() * 6) + 1
}
const ul = document.querySelector(".target")
let num = 0;
while (num !== 6)
{
    num = roll()
    ul.innerHTML += `<li>${num}</li>`
}
ul.innerHTML += `Finally rolled a 6.`