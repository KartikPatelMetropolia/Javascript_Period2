const result_name = document.querySelector("#name");
const result_url = document.querySelector("#url");
const result_img = document.querySelector("#img");
const form1 = document.querySelector("form[action]");

form1.addEventListener("submit", async function(e) {
    e.preventDefault();
    const query = document.querySelector("#query").value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const json = await response.json();
        let i = 0
        while(i < json.length)
        {
            result_name.innerHTML = `Name: ${json[i]['show']['name']}`
            result_url.innerHTML = `${json[i]['show']['url']}`
            result_url.setAttribute("target", "_blank");
            result_url.setAttribute("href",`${json[i]['show']['url']}`)
            result_img.src = `${json[i]['image']['medium']}`
            result_img.alt = `${json[i]['show']['name']}`
            i++;
        }
    } catch (error) {
        console.log("Error fetching data:", error.message);
    }
});
