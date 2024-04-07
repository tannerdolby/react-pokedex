import PokemonList from "./components/PokemonList";

export default function Home() {

  return (
    <main id="main" className="flex min-h-screen flex-col items-center">
      <PokemonList />
    </main>
  );
}
