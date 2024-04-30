import Image from 'next/image';
import { titleCase } from '../helpers/util';
import {getCustomPokemonSpriteUrl, POKE_API_URL} from '../helpers/pokemon';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import useFetchPokemon from '../hooks/useFetchPokemon';

export default function PokemonCard({imageType, id, search}) {
    const {data, isLoading, isError} = useFetchPokemon(id);

    if (isLoading) {
        return <Skeleton height={200} width={200} />;
    }

    if (isError) {
        return <p>oops! failed to load</p>
    }

    if (search.includes(data.name)) {
        return '';
    }

    const sprites = data.sprites;
    const customUrl = getCustomPokemonSpriteUrl(sprites, imageType);

    return (
        <div>
            <Link scroll={true} href={{
                pathname: `/pokemon/${data.id}/${data.name}`,
                query: {imageType: imageType},
            }}>
                <Image
                    className='bg-white p-2 rounded-md h-[200px] hover:bg-slate-100'
                    src={customUrl || sprites['front_default']}
                    alt={`Image of ${data.name}`}
                    width={200}
                    height={200}
                    
                />
            </Link>
            <div className="my-2">
                <span className="text-xl text-center block">
                    {titleCase(data.name)}
                </span>
            </div>
        </div>
    )
}
