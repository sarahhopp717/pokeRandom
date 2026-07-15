function PokemonCard({ pokemon }) {
  const image = pokemon.sprites.front_default;
  const types = pokemon.types.map((t) => t.type.name);
  const stats = pokemon.stats.map((s) => ({
    name: s.stat.name,
    value: s.base_stat,
  }));

  const typeColors = {
    fire: "#FDDCB5",
    water: "#C5E8FF",
    grass: "#C8F0C8",
    electric: "#FFF4B0",
    poison: "#E8C8F0",
    rock: "#E8E0C8",
    ground: "#F0E4C0",
    psychic: "#FFD0E0",
    ice: "#D0F0F8",
    dragon: "#C8C8FF",
    dark: "#D0C8C0",
    fairy: "#FFD0E8",
    fighting: "#F0C8C0",
    ghost: "#C8C0E0",
    bug: "#D8ECC0",
    steel: "#D8D8E8",
    flying: "#D8E8FF",
    normal: "#F0F0F0",
  };

  const cardColor = typeColors[types[0]] || "#F0F0F0";

  return (
    <div className="pokemon-card" style={{ backgroundColor: cardColor }}>
      <h2>
        #{pokemon.id} {pokemon.name.toUpperCase()}
      </h2>

      {image ? (
        <img src={image} alt={pokemon.name} className="pokemon-image" />
      ) : (
        <p>No image available</p>
      )}

      <div className="types">
        <h3>Type</h3>
        {types.map((type) => (
          <span key={type} className={`type-badge type-${type}`}>
            {type}
          </span>
        ))}
      </div>

      <div className="stats">
        <h3>Base Stats</h3>
        {stats.map((stat) => (
          <div key={stat.name} className="stat-row">
            <span className="stat-name">{stat.name}</span>
            <span className="stat-value">{stat.value}</span>
          </div>
        ))}
      </div>

      {pokemon.evolutions && pokemon.evolutions.length > 1 && (
        <div className="evolutions">
          <h3>Evolution Chain</h3>
          <div className="evolution-chain">
            {pokemon.evolutions.map((evo, index) => (
              <span key={evo}>
                {evo.charAt(0).toUpperCase() + evo.slice(1)}
                {index < pokemon.evolutions.length - 1 && " → "}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
