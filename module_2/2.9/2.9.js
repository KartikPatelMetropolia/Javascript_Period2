function even(arr)
{
    let result = []
    let i = 0;

    while(i < arr.length)
    {
        if (arr[i] % 2 === 0)
            result.push(arr[i])
        i++;
    }
    return result
}

arr = [2,5,6,31,0,1,4,9]
console.log(even(arr))