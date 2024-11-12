function concat(arr)
{
    let str = ""
    let i = 0
    while(i !== arr.length)
    {
        str += arr[i]
        i++;
    }
    return str
}

arr = ['Johnny', 'DeeDee', 'Joey' ,'Marky']
console.log(`The string is ${concat(arr)}`)