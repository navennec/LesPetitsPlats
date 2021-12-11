import { recipes } from "./recipes.js";
console.log(recipes);

// 1 construire la dropDown en HTML CSSS  display none ou hidden
// 2 ajouter un event listener sur le bouton du dropDown
// 3 lorsque l'on clique sur le bouton, on affiche la dropDown
// 4 lorsque l'on clique sur un élément de la dropDown, on affiche le nom de l'élément dans le dropDown
// const dropDown = document.querySelector(".dropdown");
// const dropdownMenuIngredients = document.querySelector(
//   ".dropdown-menu-ingredients"
// );
// const dropdownMenuAppareil = document.getElementById("dropdown-menu-appareil");

// console.log(dropdownMenuAppareil, dropdownMenuAppareil, dropDown);

// // dropDown.addEventListener("click", () => {
// //   console.log("super");
// // });
// //document.querySelector('taClasse').style.display = 'flex';
// dropDown.addEventListener("click", () => {
//   document.querySelector(".ingredient__button").style.display = "flex";
// });
//
//

const recettes = document.querySelector('.cards');
const dropdownIngredient = document.querySelector('filter_ingredients_list');

// on boucle pour parcourir toute les recettes du tableau
for (let i = 0; < recipes.length; i++) {
  console.log(recipies[i]);
}

// on recupère le tableau des données ingrédients, quantité et unité contenus dans chaque recette
const ingredientDetail = (recipies[i]);
// console.log(ingredients);

//On déclare une variable avec une chaine vide qu'on va remplir en fonction des données reçues dans la boucle pour afficher les ingrédients
let besoin = '';

// On boucle sur la partie ingrédient pour récupérer le contenu pour chaque partie de chaque recette de ingredients
for (let j = 0; j < ingredientDetail.length; j++) {}
//console.log(ingredientDetail[j]);

//On récupère les données ingredient pour chaque recette
const ingredient = ingredientDetail[j].ingredient;

//On récupère les données quantity pour chaque recette
const quantite = ingredientDetail[j].quantity;
//console.log(quantite);

//On récupère les données unit pour chaque recette
let unite = ingredientDetail[j].unit;
// console.log(unite);
//
//
//
//
//
dropdownIngredient.innerHTML += `<li>${ingredient}</li>`;
  }

  function displayRecipes() {
    recettes.innerHTML += ` <article class="card" data-id="${recipes[i].id}">
          <div class="card_header">
            <img
              class="card_header_background"
              src="./images/fond_recettes.svg"
              alt="photo_plat"
            />
          </div>
          <div class="card_content">
            <div class="card_content_header">
              <div class="card_title">
                <h3>${recipes[i].name}</h3>
              </div>
              <div class="card_duration">
                <img
                  class="clock"
                  src="./images/horloge.svg"
                  alt="logo cadran horloge"
                />
                <p class="duration">${recipes[i].time} min</p>
              </div>
            </div>
            <div class="card_content_body">
              <div class="card_ingredient">
                <ul class="card_ingredient_list">
                ${besoin}
                </ul>
              </div>
              <div class="card_description">
                <p class="card_description_text">
                ${recipes[i].description}
                </p>
              </div>
            </div>
          </div>
        </article>`;
  }
  displayRecipes();
}