"use client";

import { POKEMON_TYPE_COLORS, POKEMON_IDS, getCustomPokemonSpriteUrl } from "../../helpers/pokemon";
import Image from "next/image";
import Link from "next/link";
import { titleCase } from "../../helpers/util";
import useFetchPokemon from "../../hooks/useFetchPokemon";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Pokemon({ params, searchParams }) {
    const {id} = params;
    const {imageType} = searchParams;
    const {data, isError, isLoading} = useFetchPokemon(id);
    const imageUrl = getCustomPokemonSpriteUrl(data?.sprites, imageType);
    const prevNextBtnStyles = 'bg-slate-50 text-black px-4 py-1 rounded-md border border-color-gray-100 hover:bg-slate-100 hover:text-black hover:no-underline hover:border-color-gray-200';
    // TODO: restrict prev/next to the currently selected
    // pokemon generation
    let prevId = Number(id)-1;
    let nextId = Number(id)+1;
    prevId = prevId <= 0 ? 151 : prevId;
    nextId = nextId >= 1025 ? 1 : nextId;

    if (isError) {
        return (
            <p>Oops! Something went wrong</p>
        )
    }

    return (
        <main className="flex flex-col justify-start mt-5">
            <div className="flex flex-col justify-center items-center">
                {isLoading ? <Skeleton width={400} height={400} baseColor="#eee" /> :
                <img
                    src={imageUrl || data.sprites.other['dream_world'].front_default}
                    alt={`Image of ${data?.name}`}
                    width={400}
                    height={400}
                    className='w-[400px] h-[400px]'
                    loading='lazy'
                />
                }
                
                {isLoading ? <Skeleton width={150} height={40} /> :
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl mt-0 mb-2">{titleCase(data?.name)}</h1>
                    <span className="text-black ml-2">#{id}</span>
                </div>}
                {isLoading ? <Skeleton width={120} height={20} /> : <span>Weight: {data?.weight || 0} lbs</span>}
                {isLoading ? <Skeleton width={120} height={20} /> : <span>Height: {data.height || 0}&quot;</span>}
                {isLoading ? <Skeleton className='!rounded-full my-4' width={50} height={20} /> : <ul className='flex flex-start items-center flex-wrap gap-2 my-4'>
                    {data?.types.map((t) => {
                        return (
                            <li
                                key={`${data.name}-${t.type.name}`}
                                className={`text-sm rounded-full px-3 py-0.5`}
                                style={{
                                    background: POKEMON_TYPE_COLORS[t.type.name]?.background,
                                    color: POKEMON_TYPE_COLORS[t.type.name]?.textColor
                                }}
                            >
                                {t.type.name}
                            </li>
                        )
                    })}
                </ul>}
            </div>
            <div className="flex justify-between items-center">
                <Link
                    href={{
                        pathname: `/pokemon/${prevId}`,
                        query: {imageType: imageType}
                    }}
                    className={prevNextBtnStyles}
                >
                    &#8592; Prev
                </Link>
                <Link
                    href={{
                        pathname: `/pokemon/${nextId}`,
                        query: {imageType: imageType}
                    }}
                    className={prevNextBtnStyles}
                    >
                        Next &#8594;
                    </Link>
            </div>
        </main>
    )
}
