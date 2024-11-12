let arr = []

for(let i = 0; i < 5; i++){
    arr.push(parseInt(prompt(`Enter number ${i + 1}:`)))
}

for(let i = arr.length - 1; i >= 0; i--){
    console.log(arr.pop())
}