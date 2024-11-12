const trigger = document.querySelector("#trigger")
const targetDOM = document.querySelector("#target")

trigger.addEventListener("mouseover",() => {
    targetDOM.src = "img/picB.jpg"
})

trigger.addEventListener('mouseout',() =>{
    targetDOM.src = "img/picA.jpg"
})