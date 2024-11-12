const resultp = document.querySelector("#target")
const firstname = document.querySelector("input[name='firstname']")
const lastname = document.querySelector("input[name='lastname']")
const form = document.querySelector("#source")

form.addEventListener("submit",(e) => {
    e.preventDefault()
    resultp.innerHTML = `Your name is ${firstname.value} ${lastname.value}`
})