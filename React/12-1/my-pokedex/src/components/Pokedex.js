import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';
import MyButton from './MyButton';
class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: 0, pokemonType: '' };
    this.nextPokemon = this.nextPokemon.bind(this);
    this.pokemonFire = this.pokemonFire.bind(this);
  }

  nextPokemon() {
    pokemons.length - 1 > this.state.pokemon
      ? this.setState({ pokemon: this.state.pokemon + 1 })
      : this.setState({ pokemon: 0 });
  }

  pokemonFire() {
    //Filter funciona, só não sei associar ao button
    pokemons.filter((pokemon) => pokemon.type === 'Fire');
  }

  pokemonPsychic() {
    this.setState({ pokemonType: 'Psychic' });
  }

  render() {
    const pokemonListArray = pokemons.map((pokemon) => (
      <Pokemon key={pokemon.name} pokemon={pokemon} />
    ));
    return (
      <div>
        {pokemonListArray[this.state.pokemon]}
        {pokemonListArray[this.state.pokemonType]}
        <div className="button">
          <MyButton onClick={this.nextPokemon} label="Next Pokemon" />
          <MyButton onClick={this.pokemonFire} label="Fire" />
          <MyButton onClick={this.pokemonPsychic} label="Psychic" />
        </div>
      </div>
    );
  }
}

export default Pokedex;

/* 
<div>
  {names.filter(name => name.includes('J')).map(filteredName => (
    <li>
      {filteredName}
    </li>
  ))}
</div>
*/