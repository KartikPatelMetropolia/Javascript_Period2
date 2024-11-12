function is_prime(num)
{
    if (num < 0)
        return false
    let i = 2;
    while (i < num)
    {
        if (num % i === 0)
            return false;
        i++;
    }
    return true
}

const num = prompt("Enter the number")
const p = document.querySelector(".target")
if (is_prime(num))
    p.innerHTML = `The number ${num} is a prime number`
else
    p.innerHTML = `The number ${num} is not a prime number`