import React from 'react';
import Pokemon from '../Pokemon';

export default class PokeInfos extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const { pokemons } = this.props;
    const pokemonSelected = pokemons.find((item) => item.id === parseInt(id, 10))
    const { name, summary, foundAt } = pokemonSelected;
    return (
      <div>
        <h1>{name} Details</h1>
        <Pokemon pokemon={pokemonSelected} />
        <h1>Summary</h1>
        <p>{summary}</p>
        <h1>Game Locations of {name}</h1>
        <div className="map-style">
          { foundAt.map((item, index) => {
            return (
              <div key={index}>
                <img key={item.map} src={item.map} alt={name} />
                <p key={item.location}>{item.location}</p>
              </div>
            );
          }) }
        </div>
      </div>
    );
  }
}
