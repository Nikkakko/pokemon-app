export interface PokemonInitialStateType {
  allPokemon: undefined | genericPokemonType[];
  randomPokemons: generatedPokemonType[] | undefined;
  compareQueue: generatedPokemonType[];
  userPokemons: userPokemonsType[];
  currentPokemon: undefined | currentPokemonType;
}

export interface genericPokemonType {
  name: string;
  url: string;
}

export interface generatedPokemonType {
  name: string;
  id: number;
  image: string;
  types: pokemonTypeInterface[];
}

export interface userPokemonsType extends generatedPokemonType {
  firebaseId?: string;
}

export interface currentPokemonType {
  id: number;
  name: string;
  types: pokemonTypeInterface[];
  image: string;
  stats: pokemonStatsType[];
  encounters: string[];
  evolutionLevel: number;
  evolution: { level: number; pokemon: { name: string; url: string } }[];
  pokemonAbilities: { abilities: string[]; moves: string[] };
}

export interface pokemonStatsType {
  name: string;
  value: string;
}

export interface pokemonTypeInterface {
  [key: string]: {
    image: string;
    resistance: string[];
    strength: string[];
    weakness: string[];
    vulnerable: string[];
  };
}

export interface allPokemonStateType {
  id: number;
  name: string;
  url: string;

  stats: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }
  ];

  sprites?: {
    back_default: string;
    front_default: string;
  };

  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
}

export type pokemonStatType =
  | 'vulnerable'
  | 'weakness'
  | 'strength'
  | 'resistance';

export type pokemonElementType =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water';
