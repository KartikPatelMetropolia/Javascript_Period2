let answer = 0
const button = document.querySelector("#start")
const input1 = document.querySelector("#num1")
const input2 = document.querySelector("#num2")
const select = document.querySelector("#operation")
input1.type = "number"
input2.type = "number"
const p = document.querySelector("#result")
button.addEventListener("click",()=>{
    if(input1.value === "" || input2.value === ""){
        alert("Enter the integers before clicking:))")
        return;
    }
    const num1 = parseInt(input1.value)
    const num2 = parseInt(input2.value)
    if (select.value === "add") answer = num1 + num2
    else if (select.value === "sub") answer = num1 - num2
    else if (select.value === "multi") answer = num1 * num2
    else if (select.value === "div") answer = num1 / num2
    p.innerHTML = `The answer is ${answer}`
})