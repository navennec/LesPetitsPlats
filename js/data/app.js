

console.log(1+1);
// constante qui permet d'ouvrir les menus déroulant
const openList = function (
  dropIngredient,
  dropAppareil,
  dropUstensile,
)
// listener bouton ouverture formulaire
dropdown__button.forEach((btn) => btn.addEventListener("click", launchModal));

// fonction pour faire apparaitre la modale
function launchModal() {
  dropdown__button.style.display = "block";
}

// importer les ingredients
// importer les recettes
import { ingredients } from "./recipes.js";

// ouvrir une modale au clic sur le button dropdown__button ingredient__button pour afficher les ingredients

$(document).ready(function () {
  $(".dropdown__button--ingredient").on("click", function () {
    $(".dropdown__content--ingredient").toggleClass(
      "dropdown__content--active"
    );
  });
});
//


  {
    document.addEventListener("click", function (e) {
      let cible = e.target;
      if (
        cible.id === "dropdownMenuIngredient" ||
        cible.id === "dropdownMenuUstensile" ||
        cible.id === "dropdownMenuAppareil"
      ) {
        if (cible.classList.contains("ingredient__button")) {
          dropIngredient.classList.remove("hidde");
          appareil.classList.add("move");
          ustensile.classList.add("move");
        });
      }