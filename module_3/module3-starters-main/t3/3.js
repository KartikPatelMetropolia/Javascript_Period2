'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.querySelector("#target")
let childs = []

for (let i = 0; i < 3; i++) {
    childs[i] = document.createElement('li')
    childs[i].innerHTML = names[i]
}
for (let i = 0; i < 3; i++) {
    target.appendChild(childs[i])
}