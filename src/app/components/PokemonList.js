"use client";

import PokemonCard from "./PokemonCard";
import { fetchPokemonById } from "../helpers/pokemon";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import ImageSwitcher from "./ImageSwitcher";

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
    const [searched, setSearched] = useState([]);
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
                        const filtered = pokemon.filter(p => p.name.includes(e.target.value.toLowerCase()));
                        setSearched(filtered);
                    }} className="border border-gray-300 rounded-md px-2 py-1.5" type="text" placeholder="Enter pokemon..." />
                </div>
                <ImageSwitcher
                    imageType={imageType}
                    onChangeHandler={(e) => {
                        setImageType(e.target.value);
                        window.localStorage.setItem('POKEMON_IMAGE_TYPE', e.target.value);
                    }}
                />
            </div>
            {isLoading ? <SkeletonCards /> : <PokemonCards pokemon={searched.length ? searched : pokemon} imageType={imageType} />}
        </>
    );
}
