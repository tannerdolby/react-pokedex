import useSWR from 'swr';
import { POKE_API_URL } from "../helpers/pokemon";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function useFetchPokemon(id) {
    const {data, isLoading, isError} = useSWR(`${POKE_API_URL}/${id}`, fetcher);

    return {
        data,
        isLoading,
        error: isError,
    }
}
