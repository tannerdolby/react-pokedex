import Image from 'next/image';
import { titleCase } from '../helpers/util';

export default function PokemonCard({pokemon, imageType}) {
    const sprites = pokemon.sprites;
    const otherSprites = sprites.other;
    const imageKey = imageType.split(" ")[0];
    let spriteDirection = 'front_default';
    
    if (imageType.includes('shiny')) {
        spriteDirection = 'front_shiny';
    }

    const customUrl = otherSprites[imageKey] ? otherSprites[imageKey][spriteDirection] : null;

    return (
        <div>
            <a href={`/pokemon/${pokemon.id}/${pokemon.name}`}>
            <Image
                className='bg-white p-2 rounded-md h-[200px] hover:bg-slate-100'
                src={customUrl || sprites[spriteDirection]}
                alt={`Image of ${pokemon.name}`}
                width={200}
                height={200}
                fetchPriority="high"
            />
            </a>
            <div>
                <span className="text-xl my-2 text-center block">
                    {titleCase(pokemon.name)}
                </span>
            </div>
        </div>
    )
}