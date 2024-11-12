let start_year = parseInt(prompt("Enter the start year:"))
const end_year = parseInt(prompt("Enter the end year:"))
const p = document.querySelector(".target")

while (start_year <= end_year)
{
    p.innerHTML += `<li>${start_year}</li>`
    start_year++;
}