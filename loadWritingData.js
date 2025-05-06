document.addEventListener('DOMContentLoaded', load_data);


function load_data() {
    fetch('writing.json')
        .then(response => response.json())
        .then(data => {

            // Create HTML elements to display the JSON data
            const articleElem = document.createElement("p");
            articleElem.textContent = data.article;

            const titleElem = document.createElement("h2");
            titleElem.textContent = data.title;

            

            // Append the elements to the "dataDisplay" div
            document.getElementById("dataDisplay").appendChild(titleElem);

            document.getElementById("dataDisplay").appendChild(articleElem);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
}