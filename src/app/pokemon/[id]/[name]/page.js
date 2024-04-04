import { fetchPokemonById, POKEMON_TYPE_COLORS, POKEMON_IDS } from "../../../helpers/pokemon";
import Image from "next/image";

export default async function Pokemon({ params }) {
    const { id, name } = params;
    const pokemon = await fetchPokemonById(id);
    let prevId = Number(id)-1;
    let nextId = Number(id)+1;
    prevId = prevId <= 0 ? 151 : prevId;
    nextId = nextId >= 151 ? 1 : nextId;

    return (
        <main className="my-5">
            <div className="flex flex-col justify-center items-center">
                <Image
                    src={pokemon.sprites.other['dream_world'].front_default}
                    alt={`Image of ${name}`}
                    width={300}
                    height={300}
                    className='w-[300px] h-[300px]'
                />
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl my-5">{name}</h1>
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
            <div className="flex justify-between items-center my-10">
                <a href={`/pokemon/${prevId}/${POKEMON_IDS[prevId]}`} className="bg-black text-white py-1 px-4 rounded-md hover:text-white hover:bg-slate-900 hover:no-underline" type="button">Prev</a>
                <a href={`/pokemon/${nextId}/${POKEMON_IDS[nextId]}`} className="bg-black text-white py-1 px-4 rounded-md hover:text-white hover:bg-slate-900 hover:no-underline" type="button">Next</a>
            </div>
        </main>
    )
}