"use client";

import PokemonCard from "./PokemonCard";
import { fetchPokemonById } from "../helpers/pokemon";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCards = () => {
    const blankCards = new Array(151).fill(0);
    return (
        <ul className="flex justify-center items-center flex-wrap gap-6 mt-10">
            {blankCards.map((_, i) => {
                return (
                    <li key={`card-skeleton-${i}`}>
                        <Skeleton width={200} height={200} />
                    </li>
                )
            })}
        </ul>
    );
}

function PokemonCards({pokemon, imageType}) {
    const m = {};
    for (const p of pokemon) {
        if (!Object.hasOwn(m, p.name)) {
            m[p.name] = {};
        }
        m[p.id] = p.name;
    }
    console.log('MMMM', m);
    return (
        <ul className="flex justify-center items-center flex-wrap gap-6 mt-10">
            {pokemon.map((p) => {
                return (
                    <li key={p.name}>
                        <PokemonCard pokemon={p} imageType={imageType} />
                    </li>
                );
            })}
        </ul>
    )
}

export default function PokemonList() {
    const [pokemon, setPokemon] = useState([]);
    const [imageType, setImageType] = useState('dream_world');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getPokemon() {
            const promises = [];
            for (let i=1; i <= 151; i++) {
                promises.push(fetchPokemonById(i));
            }
            const data = await Promise.all(promises);
            setPokemon(data);
            setIsLoading(false);
        }
        getPokemon();
    });

    useEffect(() => {
        setIsLoading(true);
    }, [imageType]);

    return (
        <>
            <div className="flex flex-col text-left w-fit mr-auto ml-1 mt-2">
                <label htmlFor="sprite-toggler" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Change Pokemon Sprites</label>
                <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={imageType}
                    onChange={(e) => setImageType(e.target.value)}
                >
                    <option value="">Gameboy</option>
                    <option value="home">Modern</option>
                    <option value="official-artwork">Official Artwork</option>
                    <option value="dream_world">Dream World</option>
                    <option value="shiny">Gameboy (Shiny)</option>
                    <option value="home shiny">Modern (Shiny)</option>
                    <option value="official-artwork shiny">Official Artwork (Shiny)</option>
                </select>
            </div>
            {isLoading ? <SkeletonCards /> : <PokemonCards pokemon={pokemon} imageType={imageType} />}
        </>
    );
}
