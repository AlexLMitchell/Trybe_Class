import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';

class Pokedex extends React.Component {
  render() {
    return pokemons.map((pokemon) => (
      <Pokemon key={pokemon.title} pokemon={pokemon} />
    ));
  }
}

export default Pokedex;
