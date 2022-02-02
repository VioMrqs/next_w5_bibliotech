import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search";
import * as data from "./book.json";
import './style.scss';

const App = () => {
  return (
    <div className="Container">
      <h1>Biblio-Tech</h1>
      <Search data={data} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
