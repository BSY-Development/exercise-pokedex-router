import React from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokeInfos from './components/PokeInfos'
import About from './components/About';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Pokedex </h1>
        <navbar>
          <Link className="navigation" to="/">Home</Link>
          <Link className="navigation" to="/about">About</Link>
        </navbar>
        <Switch>
          <Route path="/pokemons/:id" render={(props) => <PokeInfos {...props} pokemons={pokemons} />} />
          <Route path="/about" component={About} />
          <Route path="/:error" component={NotFound} />
          <Route path="/" render={(props) => <Pokedex {...props} pokemons={pokemons} />} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;