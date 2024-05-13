"use client";

import { useEffect, useState } from "react";
import 'react-loading-skeleton/dist/skeleton.css'
import ImageSwitcher from "./ImageSwitcher";
import { POKEMON_GENERATIONS } from "../helpers/pokemon";
import PokemonCards from "./PokemonCards";

export default function PokemonList() {
  const [generation, setGeneration] = useState(1);
  const [count, setCount] = useState(10);
  const [searched, setSearched] = useState([]);
  const [imageType, setImageType] = useState('dream_world');

  useEffect(() => {
    const storedImageType = window.localStorage.getItem('POKEMON_IMAGE_TYPE');
    if (storedImageType) {
      setImageType(storedImageType);
    }
  }, []);

  return (
    <>
      <div className="flex justify-between items-baseline w-full">
        {/* TODO: Come back and update search
          <div className="flex flex-col">
          <label className="block mb-1 text-sm font-medium text-gray-900">Search</label>
          <input onChange={(e) => {
            const filtered = [].filter(p => p.name.includes(e.target.value.toLowerCase()));
            setSearched(filtered);
          }} className="border border-gray-300 rounded-md px-2 py-2 text-sm" type="text" placeholder="Enter pokemon..." />
        </div> */}
        <ImageSwitcher
          imageType={imageType}
          onChangeHandler={(e) => {
            setImageType(e.target.value);
            window.localStorage.setItem('POKEMON_IMAGE_TYPE', e.target.value);
          }}
        />
      </div>
      <ul className='flex gap-4 absolute top-4'>
        {Object.values(POKEMON_GENERATIONS).map((gen, i) => {
          return (
            <li key={gen.label} className={`${generation === i+1 ? 'border-b-2 border-black' :''}`}>
              <button onClick={() => setGeneration(i+1)}>{gen.name}</button>
            </li>
            )
        })}
      </ul>
      <PokemonCards
        generation={generation}
        search={searched}
        count={count}
        imageType={imageType}
      />
      {count + 10 > POKEMON_GENERATIONS[generation].totalPokemon ? '' :
        <button
          onClick={() => setCount(count + 10)}
          className="text-sm bg-slate-50 rounded-md px-4 py-1 border border-gray-300 mt-8 hover:bg-slate-100"
        >
          Load More
        </button>
      }
    </>
  );
}
