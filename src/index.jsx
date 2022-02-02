import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import BooksList from "./components/BooksList";
import * as data from "./book.json";
import './style.scss';

const App = () => {

return (
  <div>
    <BooksList data={data} />
  </div>
);
};

ReactDOM.render(<App />, document.getElementById("root"));

// Une barre de recherche est disponible, et les utilisateurs peuvent chercher un ou plusieurs livres en fonction de leur titre. Il y aura également 2 boutons, un permettant de filtrer les livres favoris, et un permettant de filtrer les livres que l'utilisateur souhaite lire.

// Lorsque l'utilisateur clique sur le bouton "Filtrer selon mes favoris", le texte du bouton change pour "Retirer filtre favori" et seuls les livres favoris sont affichés. De même pour le bouton "Filtrer selon mes souhaits", le texte du bouton change pour "Retirer filtre souhait".

// Si les deux filtres sont activés, l'utilisateur voit alors ses livres qu'il souhaite lire ET mis en favoris. C'est-à-dire non pas l'ensemble des livres souhaités et l'ensemble des livres mis en favoris, mais uniquement les livres qui respectent ces deux conditions.

// Afin de comprendre comment mettre en place ces filtres, je t'invite à bien regarder les différents champs qui composent le JSON.
