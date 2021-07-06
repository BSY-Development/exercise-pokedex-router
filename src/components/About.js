import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <div className="about-style">
          <img src="https://i.pinimg.com/originals/4d/97/b6/4d97b6440ee3ed8c152f407877126b34.jpg" alt="Pokedex" width="250px" />
          <p>The Pokédex is an electronic device designed to catalogue and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series. The name Pokédex is a neologism including "Pokémon" (which itself is a portmanteau of "pocket" and "monster") and "index". The Japanese name is simply "Pokémon Encyclopedia", as it can feature every Pokémon on it, depending on the Pokédex.</p>
        </div>
      </div>
    )
  }
}
