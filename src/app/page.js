"use client";

import PokemonList from "./components/PokemonList";
import PokemonEntries from "./components/PokemonEntries";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

export default function Home() {
  return (
    <main id="main" className="flex min-h-screen flex-col items-center">
      <PokemonList />
      {/* {cards} */}
      {/* <PokemonEntries /> */}
    </main>
  );
}
