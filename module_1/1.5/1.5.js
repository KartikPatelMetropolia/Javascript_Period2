function check_leap_year(year, p)
{
    if (year <= 0)
        return ;
    if (year % 100 == 0 && year % 400 == 0)
        p.innerHTML = `${year} is a leap year.`
    else if (year % 4 == 0)
        p.innerHTML = `${year} is a leap year`
    else
        p.innerHTML = `${year} is not a leap year`
}

const year = prompt("Enter the year:")
if (year <= 0)
{
    alert("Please enter a valid year.");
}
const p = document.querySelector(".target")
check_leap_year(year, p)
