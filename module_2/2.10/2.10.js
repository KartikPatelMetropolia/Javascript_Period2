const no_of_candidates = parseInt(prompt("Enter the number of people"))
arr = []
for (let i = 0; i < no_of_candidates; i++) {
    let obj = {name: prompt(`Enter the name candidate ${i + 1}`), vote:0}
    arr.push(obj)
}
const no_of_voters = parseInt(prompt("Enter the number of voters"))
for (let i = 0; i < no_of_voters; i++) {
   let key  = prompt(`Voter ${i + 1} who are you voting`)
    for (let j = 0; j < no_of_candidates; j++) {
        if (arr[j]['name'] === key) {
            arr[j]['vote']++;
            break;
        }
    }
}
arr.sort((a, b) => {
   console.log(a, b);
   return b.vote - a.vote;
});
console.log(arr)
if (arr[0]['votes'])
    console.log(`The top is ${arr[0]['name']} with ${arr[0]['vote']} votes`)
console.log("No registered votes")