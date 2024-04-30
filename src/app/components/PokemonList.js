"use client";

import { useEffect, useState } from "react";
import 'react-loading-skeleton/dist/skeleton.css'
import ImageSwitcher from "./ImageSwitcher";
import PokemonCard from "./PokemonCard";

export default function PokemonList() {
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
        <div className="flex flex-col">
          <label className="block mb-1 text-sm font-medium text-gray-900">Search</label>
          <input onChange={(e) => {
            const filtered = [].filter(p => p.name.includes(e.target.value.toLowerCase()));
            setSearched(filtered);
          }} className="border border-gray-300 rounded-md px-2 py-2 text-sm" type="text" placeholder="Enter pokemon..." />
        </div>
        <ImageSwitcher
          imageType={imageType}
          onChangeHandler={(e) => {
            setImageType(e.target.value);
            window.localStorage.setItem('POKEMON_IMAGE_TYPE', e.target.value);
          }}
        />
      </div>
      {<PokemonCards search={searched} count={count} imageType={imageType} />}
      <button
        onClick={() => setCount(count + 15)}
        className="text-sm bg-slate-50 rounded-md px-4 py-1 border border-gray-300 mt-8 hover:bg-slate-100"
      >
        Load More
      </button>
    </>
  );
}

function PokemonCards({ count, imageType, search, }) {
  const cards = [];
  for (let i=1; i < count; i++) {
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
