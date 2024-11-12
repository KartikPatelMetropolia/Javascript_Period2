function print_square_root(answer, p)
{
    if (answer)
    {
        const num = parseInt(prompt("Enter the number to square root:"));
        if (num < 0)
            p.innerHTML = `The square root of a negative number is not defined.`
        else
            p.innerHTML = `The square root of ${num} is ${Math.sqrt(num)}`
    }
    else
    {
        p.innerHTML = `The square root is not calculated.`
    }
}

const answer = confirm("Should I calculate the square root?");
const p = document.querySelector(".target")
print_square_root(answer, p);
