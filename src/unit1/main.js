import {getRecipes} from "./recipe.mjs";
const cookieData = getRecipes();

function recipeTemplate(info) {
    return `
        <div class="recipe">
            <h2>${info.recipe_name}<h2>
            <img src="${info.image}" alt="${info.recipe_name}">
        </div>
    `;
}

function setCookieInfo(data) {
    console.log(data);
    const container = document.querySelector('.recipe-container');
    //multiple items in an array to loop through all of them we use the .map() method
    const html = data.map(recipeTemplate);
    container.innerHTML = html.join('');
}

setCookieInfo(cookieData);