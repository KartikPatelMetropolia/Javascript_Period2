const form1 = document.querySelector("form[action]");
const results = document.querySelector("#results");

form1.addEventListener("submit", async function (e) {
    e.preventDefault();
    const query = document.querySelector("#query").value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const json = await response.json();
        results.innerHTML = '';
        json.forEach(show => {
            const article = document.createElement("article");
            const result_name = document.createElement("h2");
            result_name.innerHTML = `Name: ${show['show']['name']}`;
            const result_url = document.createElement("a");
            result_url.innerHTML = "View Details";
            result_url.href = show['show']['url'];
            result_url.target = "_blank";
            const result_img = document.createElement("img");
            result_img.src = show?.show?.image?.medium || "https://via.placeholder.com/150";
            result_img.alt = show['show']['name'];
            const p_summary = document.createElement("div");
            p_summary.innerHTML = show?.show?.summary || "No summary available";
            article.appendChild(result_name);
            article.appendChild(result_url);
            article.appendChild(result_img);
            article.appendChild(p_summary);
            results.appendChild(article);
        });

    } catch (error) {
        console.log("Error fetching data:", error.message);
    }
});
