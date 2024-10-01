// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
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

async function getPokemonList(url) {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      doStuffList(data);
    }
}

function doStuff(data) {
    results = data;
    const outputElement = document.querySelector("#output");
    const html = `<h2>${data.name}</h2><img src="${data.sprites.front_default}" alt="${data.name}">`;
    outputElement.innerHTML = html;
    console.log("first: ", results);
}
  
function doStuffList(data) {
    console.log(data);
    const pokeListElement = document.querySelector("#outputList");
    const pokeList = data.results;
    pokeList.forEach((currentItem) => {
      const html = `<li>${currentItem.name}</li>`;
      // note the += here, this will add to the existing HTML wihout overwriting it
      pokeListElement.innerHTML += html;
    });
}
  

getPokemon(url);
console.log("second: ", results);

getPokemonList(urlList);


// this is part of the NPS week 3 assignment, move into own file
const park_url = "https://developer.nps.gov/api/v1/parks?parkCode=yell&api_key=qTONfh9AQ3xvzwYwJULPUPVllj20kYi46WDBIxVV";

async function getJSON() {
    let data = null;
    const response = await fetch(park_url);

    if (response.ok) {
        data = await response.json();
        document.querySelector("#outputpark").innerHTML = data.data[0].fullName;
    } else {
        console.log("Error");
    }
}

getJSON();