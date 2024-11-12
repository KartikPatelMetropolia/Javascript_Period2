const ul = document.querySelector("#target")

const child0 = document.createElement("li")
child0.innerHTML = "First item"
const child1 = document.createElement("li")
child1.innerHTML = "Second item"
child1.className = "my-item"
const child2 = document.createElement("li")
child2.innerHTML = "Third item"
ul.appendChild(child0)
ul.appendChild(child1)
ul.appendChild(child2)