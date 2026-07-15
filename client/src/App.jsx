import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRandomPokemon = async () => {
    setLoading(true);
    setError(null);
    setPokemon(null);

    const randomId = Math.floor(Math.random() * 1025) + 1;

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`,
      );

      if (response.status === 404) {
        throw new Error(
          "Pokemon not found (404) — this ID does not exist in the PokeAPI.",
        );
      } else if (response.status === 429) {
        throw new Error(
          "Too many requests (429) — please wait a moment and try again.",
        );
      } else if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      const speciesResponse = await fetch(data.species.url);
      const speciesData = await speciesResponse.json();

      const evolutionResponse = await fetch(speciesData.evolution_chain.url);
      const evolutionData = await evolutionResponse.json();

      const evolutions = [];
      let current = evolutionData.chain;

      while (current) {
        evolutions.push(current.species.name);
        current =
          current.evolves_to && current.evolves_to.length > 0
            ? current.evolves_to[0]
            : null;
      }

      setPokemon({ ...data, evolutions });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Random Pokemon Generator</h1>
      <button onClick={getRandomPokemon} disabled={loading}>
        {loading ? "Loading..." : "Get Random Pokemon"}
      </button>

      {loading && <p className="loading">Fetching your Pokemon...</p>}

      {error && (
        <div className="error">
          <p>Something went wrong: {error}</p>
          <button onClick={getRandomPokemon}>Try Again</button>
        </div>
      )}

      {pokemon && !loading && !error && (
        <>
          <PokemonCard pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
