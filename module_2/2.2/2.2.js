const no_of_participants = parseInt(prompt("Enter the number of participants"))
let arr = []

for (let i = 0; i < no_of_participants; i++) {
    arr.push(prompt(`Enter the name of the participant ${i+1}:`))
}
arr.sort()
const ol = document.querySelector(".target")
for (let i = 0; i < no_of_participants; i++) {
    console.log(arr[i])
}