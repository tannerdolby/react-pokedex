"use client";

import PokemonCard from "./PokemonCard"
import { useState } from "react";
import { POKEMON_IDS } from "../helpers/pokemon";

export default function PokemonEntries() {
    const [imageType, setImageType] = useState('dream_world');

    // TODO: Use SWR to fetch pokemon data to display
    // in a two column of names on left and content on right
    // format
   
    return (
        <div className='grid grid-col-2'>
            <ul>
                {Object.values(POKEMON_IDS).map(name => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <div>
                {/* PokemonCard */}
            </div>
        </div>
    )
}
