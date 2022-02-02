import React from "react";
import ReactDOM from "react-dom";
import BooksList from "./components/BooksList";
import * as data from "./book.json";
import './style.scss';

const App = () => {

return (
  <div className="Container">
    <h1>Biblio-Tech</h1>
    <BooksList data={data} />
  </div>
);
};

ReactDOM.render(<App />, document.getElementById("root"));

// Une barre de recherche est disponible, et les utilisateurs peuvent chercher un ou plusieurs livres en fonction de leur titre. Il y aura également 2 boutons, un permettant de filtrer les livres favoris, et un permettant de filtrer les livres que l'utilisateur souhaite lire.
