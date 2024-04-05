import { fetchPokemonById, POKEMON_TYPE_COLORS, POKEMON_IDS, getCustomPokemonSpriteUrl } from "../../../helpers/pokemon";
import Image from "next/image";
import Link from "next/link";
import { titleCase } from "../../../helpers/util";

export default async function Pokemon({ params, searchParams }) {
    const {id, name} = params;
    const {imageType} = searchParams;
    const pokemon = await fetchPokemonById(id);
    const imageUrl = getCustomPokemonSpriteUrl(pokemon.sprites, imageType);
    const prevNextBtnStyles = 'bg-black text-white py-1 px-4 rounded-md hover:text-white hover:bg-slate-900 hover:no-underline';
    let prevId = Number(id)-1;
    let nextId = Number(id)+1;

    prevId = prevId <= 0 ? 151 : prevId;
    nextId = nextId >= 151 ? 1 : nextId;

    return (
        <main className="mt-8 min-h-screen flex flex-col justify-between">
            <div className="flex flex-col justify-center items-center min-h-[80vh]">
                <Image
                    src={imageUrl || pokemon.sprites.other['dream_world'].front_default}
                    alt={`Image of ${name}`}
                    width={300}
                    height={300}
                    className='w-[300px] h-[300px]'
                />
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl my-5">{titleCase(name)}</h1>
                    <span className="text-black ml-2">#{pokemon.id}</span>
                </div>
                <span>Weight: {pokemon.weight} lbs</span>
                <span>Height: {pokemon.height} cm</span>
                <ul className='flex flex-start items-center flex-wrap gap-2 my-4'>
                    {pokemon.types.map((t) => {
                        return (
                            <li
                                key={`${pokemon.name}-${t.type.name}`}
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
                {/* TODO: Pokemon stats */}
                {/* TODO: Pokemon cries (audio files .ogg) */}
                {/* TODO: Pokemon abilities */}
            </div>
            <div className="flex justify-between items-center">
                <Link
                    href={{
                        pathname: `/pokemon/${prevId}/${POKEMON_IDS[prevId]}`,
                        query: {imageType: imageType}
                    }}
                    className={prevNextBtnStyles}
                >
                    Prev
                </Link>
                <Link
                    href={{
                        pathname: `/pokemon/${nextId}/${POKEMON_IDS[nextId]}`,
                        query: {imageType: imageType}
                    }}
                    className={prevNextBtnStyles}
                    >
                        Next
                    </Link>
            </div>
        </main>
    )
}