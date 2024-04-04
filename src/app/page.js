import PokemonList from "./components/PokemonList";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PokemonList />
    </main>
  );
}
