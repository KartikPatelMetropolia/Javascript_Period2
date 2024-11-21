const form = document.querySelector("form[action=\"https://api.tvmaze.com/search/shows\"]")

form.addEventListener("submit",async function(e){
    e.preventDefault()
    const query = document.querySelector("#query").value
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        const json = await response.json()
        console.log(json)
    }
    catch(error){
        console.log(error.message)
    }
})