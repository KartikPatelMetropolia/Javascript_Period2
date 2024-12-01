let numbers = [];
let input = -1;

while (true) {
    input = parseInt(prompt("Enter the number"), 10);
    if (isNaN(input)) {
        alert("Please enter a valid number.");
        continue;
    }
    if (input === 0) {
        break;
    }
    numbers.push(input);
}
numbers.sort((a, b) => b - a);
console.log("Numbers from largest to smallest:");
numbers.forEach(num => console.log(num));
