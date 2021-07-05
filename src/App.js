import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokeInfos from './components/PokeInfos'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Pokedex </h1>
        <Switch>
          <Route path="/pokemons/:id" render={(props) => <PokeInfos {...props} pokemons={pokemons} />} />
          <Route path="/" render={(props) => <Pokedex {...props} pokemons={pokemons} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;