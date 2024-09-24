import {getRecipes} from "./recipe.mjs";
const cookieData = getRecipes();

console.log(cookieData);

function recipeTemplate(info) {
    return `
        <div class="recipe">
            <h2>${info.recipe_name}<h2>
            <img src="${info.image}" alt="${info.recipe_name}">
        </div>
    `;
}