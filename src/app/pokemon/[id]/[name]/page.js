"use client";

import { POKEMON_TYPE_COLORS, POKEMON_IDS, getCustomPokemonSpriteUrl } from "../../../helpers/pokemon";
import Image from "next/image";
import Link from "next/link";
import { titleCase } from "../../../helpers/util";
import useFetchPokemon from "../../../hooks/useFetchPokemon";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Pokemon({ params, searchParams }) {
    const {id, name} = params;
    const {imageType} = searchParams;
    // const pokemon = await fetchPokemonById(id);
    const {data, isError, isLoading} = useFetchPokemon(id);
    const imageUrl = getCustomPokemonSpriteUrl(data?.sprites, imageType);
    const prevNextBtnStyles = 'bg-slate-50 text-black px-4 py-1 rounded-md border border-color-gray-100 hover:bg-slate-100 hover:text-black hover:no-underline hover:border-color-gray-200';
    let prevId = Number(id)-1;
    let nextId = Number(id)+1;
    prevId = prevId <= 0 ? 151 : prevId;
    nextId = nextId >= 151 ? 1 : nextId;

    return (
        <main className="min-h-screen flex flex-col justify-start">
            <div className="flex flex-col justify-center items-center">
                {isLoading ? <Skeleton circle={false} width={400} height={420} /> :
                <Image
                    src={imageUrl || data.sprites.other['dream_world'].front_default}
                    alt={`Image of ${name}`}
                    width={400}
                    height={400}
                    className='w-[400px] h-[400px]'
                    priority={true}
                />
                }
                
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl mt-0 mb-2">{titleCase(name)}</h1>
                    <span className="text-black ml-2">#{id}</span>
                </div>
                <span>Weight: {data?.weight} lbs</span>
                <span>Height: {data?.height}&quot;</span>
                <ul className='flex flex-start items-center flex-wrap gap-2 my-4'>
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
                </ul>
            </div>
            <div className="flex justify-between items-center">
                <Link
                    href={{
                        pathname: `/pokemon/${prevId}/${POKEMON_IDS[prevId]}`,
                        query: {imageType: imageType}
                    }}
                    className={prevNextBtnStyles}
                >
                    &#8592; Prev
                </Link>
                <Link
                    href={{
                        pathname: `/pokemon/${nextId}/${POKEMON_IDS[nextId]}`,
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
