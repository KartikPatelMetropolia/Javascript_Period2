let arr = []

for (;;)
{
    let num = parseInt(prompt("Enter the number:"))
    if (arr.find((element) => element === num)){
        console.log("The element was entered previously.")
        break;
    }
    arr.push(num)
}
arr.sort()
for (let i = 0; i< arr.length;i++){
    console.log(arr[i])
}