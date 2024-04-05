import Image from 'next/image';
import { titleCase } from '../helpers/util';
import {getCustomPokemonSpriteUrl} from '../helpers/pokemon';
import Link from 'next/link';

export default function PokemonCard({pokemon, imageType}) {
    const sprites = pokemon.sprites;
    const customUrl = getCustomPokemonSpriteUrl(sprites, imageType);
    console.log(customUrl);
    return (
        <div>
            <Link href={{
                pathname: `/pokemon/${pokemon.id}/${pokemon.name}`,
                query: {imageType: imageType},
            }}>
                <Image
                    className='bg-white p-2 rounded-md h-[200px] hover:bg-slate-100'
                    src={customUrl || sprites['front_default']}
                    alt={`Image of ${pokemon.name}`}
                    width={200}
                    height={200}
                    fetchPriority="high"
                />
            </Link>
            <div className="my-2">
                <span className="text-xl text-center block">
                    {titleCase(pokemon.name)}
                </span>
            </div>
        </div>
    )
}