import Header from "./common/header";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Tabla from "./components/Tabla";
import Home from "./components/Home";
import CharacterDetails from "./components/CharacterDetails";

function App() {
  return (
    <Switch>
      
      <Route path="/:id" component={CharacterDetails} />
      <Route path="/" component={Home} />
      hola hola
    </Switch>
  );
}

export default App;
