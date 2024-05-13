import PokemonCard from "./PokemonCard";
import { POKEMON_GENERATIONS } from "../helpers/pokemon";

export default function PokemonCards({ count, imageType, search, generation }) {
    const cards = [];
    let startIdx = 1;

    for (let i=1; i < generation; i++) {
        startIdx += POKEMON_GENERATIONS[i].totalPokemon;
    }

    for (let i = startIdx; i < startIdx + count; i++) {
      cards.push((
        <li key={`${i}-${imageType}`}>
          <PokemonCard search={search} id={i} imageType={imageType} />
        </li>
      ));
    }
  
    return (
      <ul className="flex justify-center items-center flex-wrap gap-6 mt-10">
        {cards}
      </ul>
    )
}