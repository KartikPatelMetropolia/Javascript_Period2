const button = document.querySelector("#start")
const inputbar = document.querySelector("#calculation")
const resultp = document.querySelector("#result")

button.addEventListener("click",()=>{
    if (inputbar.value === ""){
        alert("Enter something in the input bar.")
        return ;
    }
    let result = 0
    const arr = inputbar.value
    console.log(arr)
    if (arr.includes("*")) {
        const arr = inputbar.value.split('*')
        const num1 = parseInt(arr[0])
        const num2 = parseInt(arr[1])
        result = num1 * num2
    }
    else if(arr.includes("+")) {
        const arr = inputbar.value.split('+')
        const num1 = parseInt(arr[0])
        const num2 = parseInt(arr[1])
        result = num1 + num2
    }
    else if(arr.includes("-")) {
        const arr = inputbar.value.split('-')
        const num1 = parseInt(arr[0])
        const num2 = parseInt(arr[1])
        result = num1 - num2
    }
    else if (arr.includes("/")){
        const arr = inputbar.value.split('/')
        const num1 = parseInt(arr[0])
        const num2 = parseInt(arr[1])
        result = num1 / num2
    }

    resultp.innerHTML = `The answer is ${result}`
})