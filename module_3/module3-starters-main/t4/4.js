'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

let childs = []
for (let i = 0; i < 3; i++) {
    childs[i] = document.createElement('option')
    childs[i].innerHTML = students[i]['name']
    childs[i].value = students[i]['id']
}
const target = document.querySelector("#target")
for (let i = 0; i < 3; i++) {
    target.appendChild(childs[i])
}