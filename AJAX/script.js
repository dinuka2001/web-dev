var pagecounter = 1;
var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info")

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${pagecounter}.json`);
    pagecounter++;
    
    ourRequest.onload = function() {
        var data = JSON.parse(ourRequest.responseText);
        // console.log(data[0]);
        renderHTML(data);

    };
    ourRequest.send();
    if(pagecounter > 3) {
        btn.classList.add("hide-me");
    }

})


function renderHTML(data) {
    var htmlString = "";
    data.forEach(element => {
        // console.log(element);
        htmlString  += element.species + " " + element.name +"<br> <hr>";
    });
    animalContainer.insertAdjacentHTML('beforeend', htmlString)
}