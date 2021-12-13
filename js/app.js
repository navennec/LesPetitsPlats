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
  console.log("super cool");
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
  const ingredientsDetails = recipes[i].ingredients;
  console.log(ingredientsDetails);
  for (let j = 0; j < ingredientsDetails.length; j++) {
    const ingredient = ingredientsDetails[j].ingredient;
    console.log(ingredient);
    let elt = document.getElementById("ingredientList");
    elt.innerHTML = ingredient;
  }
}

let displayIngredient = [];
// injecter avec les ingrdients sous forme de tableau

const ingredientDetail = recipes[i].ingredients;
// On déclare une variable avec une chaine vide qu'on va remplir
//en fonction des données reçues dans la boucle pour afficher les ingrédients
let displayIngredients = "";
// On boucle sur la partie ingrédient pour récupérer le contenu pour chaque partie de
//chaque recette de ingredients
for (let j = 0; j < ingredientDetail.length; j++) {
  //On récupère les données ingredient pour chaque recette
  const ingredient = ingredientDetail[j].ingredient;
}

// les const ne recup pas forcement les bonnnes choses de 28 à 35

//
// const elt = document.getElementById("dropdown");
// // On récupère l'élément sur lequel on veut détecter le clic
// elt.addEventListener("click", function () {
//   // On écoute l'événement click
//   elt.innerHTML = "Test click sur boutton ingrediants";
//   // On change le contenu de notre élément pour afficher "C'est cliqué !"
// });
