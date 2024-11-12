function roll()
{
    return Math.floor(Math.random() * 6) + 1
}

function simulate(no_of_times, dices, eyes_sum)
{
    let i = 0;
    let true_condition = 0;
    while(i < no_of_times)
    {
        let sum = 0;
        for (let i = 0;i < dices; i++){
            sum += roll()
        }
        if (sum === eyes_sum)
            true_condition++;
        i++;
    }
    return ((true_condition / no_of_times) * 100)
}

const dices = parseInt(prompt("Enter the number of dice"))
const eyes_sum = parseInt(prompt("Enter the number of eyes"))
const percent = simulate(10000000, dices, eyes_sum);

const p = document.querySelector(".target")
p.innerHTML = `Probability to get sum ${eyes_sum} with ${dices} dice is ${percent.toFixed(2)}%`