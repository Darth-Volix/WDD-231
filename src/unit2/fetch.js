// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
    // async await is a way to handle promises in a more readable way
    // this is the same as .then(fetch(url))
    const response = await fetch(url);
    console.log(response);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        // .json() takes the response and converts it to a JS object
        // this is the same as .then(response => response.json())
        const data = await response.json();
        doStuff(data);
    }
}
function doStuff(data) {
    const outputElement = document.querySelector("#output");
    results = data;
    const html = `<h2>${results.name}</h2>
                  <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    outputElement.innerHTML = html;
    console.log("first: ", results);
}
getPokemon(url);
console.log("second: ", results);