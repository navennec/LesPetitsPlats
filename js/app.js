import { recipes } from "./recipes.js";
console.log(recipes);

// 1 construire la dropDown en HTML CSSS  display none ou hidden
// 2 ajouter un event listener sur le bouton du dropDown
// 3 lorsque l'on clique sur le bouton, on affiche la dropDown
// 4 lorsque l'on clique sur un élément de la dropDown, on affiche le nom de l'élément dans le dropDown
const dropDown = document.querySelector(".dropdown");
// const dropdownMenuIngredients = document.querySelector(
//   ".dropdown-menu-ingredients"
// );
// const dropdownMenuAppareil = document.getElementById("dropdown-menu-appareil");

// console.log(dropdownMenuAppareil, dropdownMenuAppareil, dropDown);

dropDown.addEventListener("click", () => {
  console.log("super");
});
// //document.querySelector('taClasse').style.display = 'flex';
// dropDown.addEventListener("click", () => {
//   document.querySelector(".ingredient__button").style.display = "flex";
// });
//
//

// const dropdownIngredient = document.querySelector('filter_ingredients_list');

for (let i = 0; i < recipes.length; i++) {
  // console.log(recipes[i]);
  const ingredientsDetails = recipes[i];
  console.log(ingredientsDetails.ingredients);
  for (let j = 0; j < ingredientsDetails.length; j++) {
    const ingredient = ingredientsDetails[j].ingredient;
    console.log(ingredients.ingredient);
  }
}
