let arr = []

for(let i = 0; i < 6; i++){
    arr.push(prompt(`Enter the name of Dog ${i + 1}:`))
}
arr.sort()

for(let i = arr.length - 1; i >= 0; i--){
    console.log(arr.pop())
}