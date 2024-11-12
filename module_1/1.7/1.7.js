const rolls = parseInt(prompt("Enter the number of dices"))
let sum = 0
for (let i = 0; i < rolls; i++) {
    let roll = Math.floor((Math.random() * 6)) + 1
    sum += roll
}
p = document.querySelector(".target")
p.innerHTML = `The sum of the dice for ${rolls} is ${sum}`